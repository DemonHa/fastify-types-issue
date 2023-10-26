import { Static, Type } from "@sinclair/typebox";

export const putResponse = Type.Literal("ok");
export type PutResponse = Static<typeof putResponse>;
