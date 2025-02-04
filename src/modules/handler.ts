import { RouteHandler } from "fastify";

import { GetParams } from "./schemas/get/params";
import { PutBody } from "./schemas/put/body";
import { PutParams } from "./schemas/put/params";
import { PutQuery } from "./schemas/put/querystring";
import { PutResponse } from "./schemas/put/response";

export const handlerPut: RouteHandler<{
  Params: PutParams;
  Body: PutBody;
  Querystring: PutQuery;
  Reply: PutResponse;
}> = async (req, res) => {
  const body = req.body;
  const params = req.params;
  const query = req.query;
  console.log(body);
  console.log(params);
  console.log(query);
  return await res.status(201).send("ok");
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