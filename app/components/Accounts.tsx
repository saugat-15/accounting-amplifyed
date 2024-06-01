"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Accounts({ signOut, user }: any) {
  const [accounts, setAccounts] = useState<Array<Schema["Accounts"]["type"]>>(
    []
  );

  async function listAccounts() {
    client.models.Accounts.observeQuery({
      authMode: "userPool",
    }).subscribe({
      next: (data) => setAccounts([...data.items]),
    });
  }

  useEffect(() => {
    listAccounts();
  }, []);

  async function createAccount() {
    await client.models.Accounts.create(
      {
        brokerageRate: 0.1,
      },
      {
        authMode: "userPool",
      }
    );
  }

  async function deleteAccount(accountId: string) {
    await client.models.Accounts.delete(
      {
        id: accountId,
      },
      {
        authMode: "userPool",
      }
    );
  }

  return (
    <main>
      <h1>Welcome, {user?.signInDetails?.loginId}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={createAccount}>+ new account</button>

        <button onClick={() => console.log(accounts)}>+ fetch Account</button>
      </div>
      <ul>
        {accounts.map((account) => (
          <div key={account.id}>
            <li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {account.id}
                <button
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                  }}
                  onClick={() => deleteAccount(account.id)}
                >
                  X
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={signOut}
      >
        Sign out
      </button>
    </main>
  );
}
