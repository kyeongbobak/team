"use client";

import StyledLink from "next/link";
import "../assets/styles/login.css";
import { usePathname } from "next/navigation";

export default function Login() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="min-h-screen">
        <form className="flex flex-col border-[1px] border-[#c4c4c4] p-[35px] rounded-[4px]" action="">
          <label className="ally-hidden" htmlFor="username">
            이메일
          </label>
          <input className="custom-login-input placeholder: text-md" type="text" placeholder="Email" />
          <label className="ally-hidden" htmlFor="password">
            비밀번호
          </label>
          <input className="custom-login-input placeholder: text-md" type="password" placeholder="Password" />
          <button className="bg-blue text-sm text-white mt-[35px] px-[213px] py-[15px] rounded-[4px]">LOGIN</button>
        </form>
        <div>
          <StyledLink className="block text-center mt-[20px] text-sm" href="/auth/singup">
            SIGN UP
          </StyledLink>
        </div>
      </div>
    </>
  );
}
