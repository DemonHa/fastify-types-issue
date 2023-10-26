import { Guard } from "../../plugins/guard";

declare module "fastify" {
  interface FastifyInstance {
    guard: Guard;
  }
}
