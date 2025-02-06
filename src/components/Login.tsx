"use client";

import StyledLink from "next/link";
import "../assets/styles/login.css";
import { useForm } from "react-hook-form";
import axios from "axios";

type LoginInfo = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>();

  const handleOnSubmit = async (data: LoginInfo) => {
    try {
      const res = await axios.post("/api/auth/login", data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        alert("로그인 성공");
      } else {
        alert(res.data.error || "로그인 실패");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("로그인 중 오류 발생");
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col border-[1px] border-[#c4c4c4] p-[35px] rounded-[4px]" action="">
          <label className="ally-hidden" htmlFor="username">
            이메일
          </label>
          <input
            className="custom-login-input placeholder: text-md"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email!",
            })}
          />
          <p>{errors.email?.message}</p>
          <label className="ally-hidden" htmlFor="password">
            비밀번호
          </label>
          <input
            className="custom-login-input placeholder: text-md"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter your password",
            })}
          />
          <p>{errors.password?.message}</p>
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
