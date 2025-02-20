import Image from "next/image";
import StyledLink from "next/link";
import logo_other from "../../../assets/img/logo_other.png";
import Login from "../../../components/Login";
import SignUp from "../../../components/SignUp";

export default async function Auth({ params }: { params: Promise<{ actions: string }> }) {
  const { actions } = await params;

  return (
    <>
      <div className="w-[550px] mx-auto mt-[200px]">
        <StyledLink href={`/`}>
          <Image className="block w-[100px] mx-auto mb-[70px]" src={logo_other} alt="logo_other" priority />
        </StyledLink>
        {actions === "login" ? <Login /> : <SignUp />}
      </div>
    </>
  );
}
