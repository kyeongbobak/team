"use client";

import StyledLink from "next/link";

export default function Login() {
  return (
    <>
      <form action="">
        login
        <input type="text" />
        <input type="text" />
        <StyledLink href="/auth/singup">SingUp</StyledLink>
      </form>
    </>
  );
}
