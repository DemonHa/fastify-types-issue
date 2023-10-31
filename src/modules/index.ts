import { FastifyPluginAsync } from 'fastify';

import { handlerGet, handlerPut, otherValidationMethod } from './handler';
import * as Schemas from './schemas';

const randomModule: FastifyPluginAsync = async fastifyInstance => {
  // Declare a route
  fastifyInstance.route({
    url: '/',
    method: 'PUT',
    handler: handlerPut,
    schema: Schemas.put,
    preHandler: [fastifyInstance.guard.permissionCheck('unauthorized'), otherValidationMethod],
  });

  fastifyInstance.route({
    url: '/',
    method: 'GET',
    handler: handlerGet,
    schema: Schemas.get,
    preHandler: fastifyInstance.guard.permissionCheck('unauthorized'),
  });
};

export default randomModule;
export const autoPrefix = '/random-module';
