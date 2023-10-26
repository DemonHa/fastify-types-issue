import { Static, Type } from "@sinclair/typebox";

export const putQuery = Type.Object(
  {
    queryField: Type.String(),
  },
  { additionalProperties: false },
);
export type PutQuery = Static<typeof putQuery>;
