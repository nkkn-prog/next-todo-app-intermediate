import React from "react";
import { signIn, signOut }  from "../auth"


export function SignIn({
  provider,
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button type="submit">サインイン</button>
    </form>
  );
}

export function SignOut({
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">ログアウト</button>
    </form>
  );
}

  