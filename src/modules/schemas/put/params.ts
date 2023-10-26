import { Static, Type } from "@sinclair/typebox";

export const putParams = Type.Object(
  {
    entityId: Type.String({ format: "uuid" }),
    forecastId: Type.String({ format: "uuid" }),
    scenarioId: Type.String({ format: "uuid" }),
    budgetVersionId: Type.String({ format: "uuid" }),
  },
  { additionalProperties: false },
);
export type PutParams = Static<typeof putParams>;
