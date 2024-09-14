import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  // optionally define an environment variable for your group name
  environment: {
    USER_GROUP_NAME: 'User',
    ADMIN_GROUP_NAME: 'Admin',
    ADMIN_EMAIL: 'saugatgiri15@gmail.com',
  }
});