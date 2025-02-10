"use client";

import axios from "axios";
import StyledLink from "next/link";
import "../assets/styles/login.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { login } from "../redux/slices/authslice";
import { AxiosError } from "axios";

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

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const handleOnSubmit = async (data: LoginInfo) => {
    try {
      const res = await axios.post("/api/auth/login", data);

      if (res.status === 200) {
        dispatch(login({ token: res.data.token, email: data.email }));

        router.push("/");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.status === 401) {
        alert("Password does not match!");
      }
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
              required: "Please enter your email !",
            })}
          />
          <p className="custom-errormessage">{errors.email?.message}</p>
          <label className="ally-hidden" htmlFor="password">
            비밀번호
          </label>
          <input
            className="custom-login-input placeholder: text-md"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter your password !",
            })}
          />
          <p className="custom-errormessage">{errors.password?.message}</p>
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
