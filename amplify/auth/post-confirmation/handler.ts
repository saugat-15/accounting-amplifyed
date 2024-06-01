import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { env } from "$amplify/env/post-confirmation";

const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
  const email = event.request.userAttributes["email"];

  // add user to group
  const command = new AdminAddUserToGroupCommand({
    GroupName:
      email === env.ADMIN_EMAIL ? env.ADMIN_GROUP_NAME : env.USER_GROUP_NAME,
    Username: event.userName,
    UserPoolId: event.userPoolId,
  });
  const response = await client.send(command);
  console.log("processed", response.$metadata.requestId);
  return event;
};
