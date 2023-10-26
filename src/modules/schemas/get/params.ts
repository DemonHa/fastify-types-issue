import { Static, Type } from "@sinclair/typebox";

export const getParams = Type.Object(
  {
    entityId: Type.String({ format: "uuid" }),
  },
  { additionalProperties: false },
);
export type GetParams = Static<typeof getParams>;
