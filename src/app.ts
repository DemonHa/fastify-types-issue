import { fastifyAutoload } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import { fastifyRawBody } from "fastify-raw-body";
import path from "path";

import { guardPlugin } from "./plugins/guard";

const initApp: FastifyPluginAsync = async (fastify, opts) => {
  await fastify.register(guardPlugin);

  // Adds the raw body to the Fastify request object.
  // When global: true you still need to add rawBody: true to the config of your endpoint
  // We could also add routes: [] instead of global: true, but it doesn't accept wildcard routes which makes it too difficult to maintain
  await fastify.register(fastifyRawBody, {
    global: false,
    runFirst: true,
    routes: ["/webhooks/stripe"],
  });

  // This loads all plugins defined in modules with their folder name as prefix
  // define your routes in one of these
  await fastify.register(fastifyAutoload, {
    dir: path.join(__dirname, "modules/"),
    options: Object.assign({}, opts),
    maxDepth: 1,
  });
};

export default initApp;
