"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import "../assets/styles/signup.css";

type SignInfo = {
  email: string;
  password: string;
  name: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInfo>();

  const handleOnSubmit = async (data: SignInfo): Promise<void> => {
    try {
      const res = await axios.post("/api/auth/signup", data);
      if (res.status === 200) {
        alert("회원가입 성공");
      } else {
        alert(res.data.error || "회원가입 실패");
      }
    } catch (error) {
      console.log(error);
      alert("회원가입 중 오류 발생");
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col border-[1px] rounded-[4px] border-[#c4c4c4] p-[35px] " action="">
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Email
            </label>
            <div className="flex gap-[8px]">
              <input
                className="grow custom-signup-input placeholder: text-md"
                type="email"
                {...register("email", {
                  required: "Please enter your email !",
                })}
              />
            </div>
          </div>
          <p className="custom-signup-errormessage">{errors.email?.message}</p>
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Password
            </label>
            <input
              className="custom-signup-input placeholder: text-md"
              type="password"
              {...register("password", {
                required: "Please enter your password !",
                validate: {
                  hasLowCase: (value) => /[a-z]/.test(value) || "The password must contain at least one lowercase letter.",
                  hasNumber: (value) => /[0-9]/.test(value) || "The password must contain at least one number.",
                },
              })}
            />
          </div>
          <p className="custom-signup-errormessage">{errors.password?.message}</p>
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Name
            </label>
            <input
              className="custom-signup-input placeholder: text-md"
              type="text"
              {...register("name", {
                required: "Please enter your name !",
              })}
            />
          </div>
          <p className="custom-signup-errormessage">{errors.name?.message}</p>
          <button className="bg-blue mt-[35px] px-[200px] py-[15px] text-sm text-white rounded-[4px]">SIGN UP</button>
        </form>
      </div>
    </>
  );
}
