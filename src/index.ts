import Fastify from "fastify";

import App from "./app";

const fastify = Fastify({
  logger:
    process.env.NODE_ENV === "production"
      ? {
          level: "warn",
        }
      : {
          level: "info",
        },
  bodyLimit: 30000000, // 30Mb
  maxParamLength: 300,
  // @ts-expect-error Missing type?
  http2SessionTimeout: 0, // Running behind GCLB,
  ajv: {
    customOptions: {
      strict: "log",
      keywords: ["kind", "modifier", "example", "min", "max"],
      allowUnionTypes: true,
    },
  },
});

const start = async (): Promise<void> => {

  await fastify.register(App);

  try {
    await fastify.listen({ host: '127.0.0.1', port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Graceful exit for containers
const closeGracefully: NodeJS.SignalsListener = async signal => {
  // eslint-disable-next-line no-console
  console.log(`Received signal to terminate: ${signal}`);

  // Close persistent connections
  await fastify.close();

  // eslint-disable-next-line no-console
  console.log("Graceful exit");
  process.exit();
};

// ONLY SIGINT will shutdown gracefully
process.on("SIGINT", closeGracefully);

start().catch(ex => {
  throw ex;
});
