import { RouteHandler } from "fastify";

import { GetParams } from "./schemas/get/params";
import { PutBody } from "./schemas/put/body";
import { PutParams } from "./schemas/put/params";

export const handlerPut: RouteHandler<{
  Params: PutParams;
  Body: PutBody;
}> = async (req, res) => {
  const body = req.body;
  const params = req.params;
  console.log(body);
  console.log(params);
  return await res.status(201).send();
};

export const handlerGet: RouteHandler<{
  Params: GetParams;
}> = async (req, res) => {
  const params = req.params;
  console.log(params);
  return await res.status(200).send();
};

export const otherValidationMethod: RouteHandler<{
  Params: PutParams;
  Body: PutBody;
}> = async req => {
  console.log("other validation method");
  console.log(req.params);
};