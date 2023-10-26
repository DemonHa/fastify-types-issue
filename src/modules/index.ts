import { FastifyPluginAsync } from "fastify";

import { handlerGet, handlerPut, otherValidationMethod } from "./handler";
import * as Schemas from "./schemas";

const randomModule: FastifyPluginAsync = async fastifyInstance => {
  // Declare a route
  fastifyInstance.put(
    "/",
    {
      preHandler: [
        fastifyInstance.guard.permissionCheck("unauthorized"),
        otherValidationMethod,
      ],
      schema: Schemas.put,
    },
    handlerPut,
  );

  fastifyInstance.get(
    "/",
    {
      preHandler: fastifyInstance.guard.permissionCheck("authorized"),
      schema: Schemas.get,
    },
    handlerGet,
  );
};

export default randomModule;
export const autoPrefix = "/random-module";
