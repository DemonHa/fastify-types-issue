import { getParams } from "./get/params";
import { putBody } from "./put/body";
import { putParams } from "./put/params";

export const put = {
  summary: "PUT",
  params: putParams,
  body: putBody,
}

export const get = {
  summary: "GET",
  params: getParams,
}