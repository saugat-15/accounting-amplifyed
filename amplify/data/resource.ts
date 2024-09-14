import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    Accounts: a.model({
      id: a.string().required(),
      brokerageRate: a.float(),
    }),
  })
  .authorization((allow) => [
    allow.group("Admin").to(["read", "create", "update", "delete"]),
    allow.group("User").to(["read"]),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
