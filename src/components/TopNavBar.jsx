import StyledLink from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function TopNavBar() {
  return (
    <div className="flex mt-[40px] mx-[140px] justify-between">
      <StyledLink href={"/"}>
        <Image src={logo} alt="" className="w-[4.375rem]" />
      </StyledLink>
      <ul className="flex flex-row space-x-[50px] text-sm">
        <li>
          <StyledLink href={"/"}>Product</StyledLink>
        </li>
        <li>
          <StyledLink href={"/"}>Service</StyledLink>
        </li>
        <li>
          <StyledLink href={"/"}>Contact</StyledLink>
        </li>
        <li>
          <StyledLink href={"/"}>Log In</StyledLink>
        </li>
        <li>
          <StyledLink href={"/"}>
            <button>Get Access</button>
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
