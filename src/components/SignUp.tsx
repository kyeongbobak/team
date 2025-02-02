import "../assets/styles/signup.css";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen">
        <form className="flex flex-col border-[1px] rounded-[4px] border-[#c4c4c4] p-[35px] " action="">
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Email
            </label>
            <div className="flex gap-[8px]">
              <input className="grow custom-input placeholder: text-md" type="text" />
              <button className="w-[130px] h-[57px] bg-blue rounded-[4px] text-white text-sm">VERIFY</button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Password
            </label>
            <input className="custom-input placeholder: text-md" type="password" />
          </div>
          <div className="flex flex-col">
            <label className="py-[12px] text-md" htmlFor="">
              Name
            </label>
            <input className="custom-input placeholder: text-md" type="text" />
          </div>
          <button className="bg-blue mt-[35px] px-[200px] py-[15px] text-sm text-white rounded-[4px]">SIGN UP</button>
        </form>
      </div>
    </>
  );
}
