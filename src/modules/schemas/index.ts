import { getParams } from "./get/params";
import { putBody } from "./put/body";
import { putParams } from "./put/params";
import { putQuery } from "./put/querystring";
import { putResponse } from "./put/response";

export const put = {
  summary: "PUT",
  params: putParams,
  body: putBody,
  querystring: putQuery,
  response: {
    201: putResponse
  }
}

export const get = {
  summary: "GET",
  params: getParams,
}