import { Static, TSchema, Type } from "@sinclair/typebox";


function Nullable<T extends TSchema & { type: string }>(schema: T) {
  return Type.Unsafe<Static<T> | null>({ ...schema, nullable: true });
}

export const putBody = Type.Object(
  {
    randomFieldOne: Type.Object({}),
    randomFieldTwo: Nullable(Type.String()),
    randomFieldThree: Type.Array(Type.Object({})),
  },
  { additionalProperties: false },
);

export type PutBody = Static<typeof putBody>;
