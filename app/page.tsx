"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import Accounts from "./components/Accounts";

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <Accounts signOut={signOut} user={user} />}
    </Authenticator>
  );
}
