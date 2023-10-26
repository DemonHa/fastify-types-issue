import { FastifyRequest, preHandlerAsyncHookHandler } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { Unauthorized } from "http-errors";

export interface Guard {
  permissionCheck: (permission: string) => preHandlerAsyncHookHandler;
}

const guard: Guard = {
  permissionCheck:
    (permission: string) =>
    async (req: FastifyRequest<{ Params: { entityId: string } }>) => {
      console.log(req.params.entityId);
      if (permission !== "authorized") throw new Unauthorized(`User is not authorized`);
    },
};

export const guardPlugin = fastifyPlugin(async fastify => {
  await fastify.decorate("guard", guard);
});
