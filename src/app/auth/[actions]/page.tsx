import Image from "next/image";
import logo_other from "../../../assets/img/logo_other.png";
import Login from "../../../components/Login";
import SignUp from "../../../components/SignUp";

export default async function Auth({ params }: { params: { actions: string } }) {
  const pathname = await params;

  return (
    <>
      <Image src={logo_other} alt="logo_other" />
      {pathname.actions === "login" ? <Login /> : <SignUp />}
    </>
  );
}
