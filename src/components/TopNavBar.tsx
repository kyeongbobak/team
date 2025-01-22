import StyledLink from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function TopNavBar() {
  return (
    <div className="absolute z-10 w-full ">
      <div className="container flex justify-between items-center mt-[40px]">
        <StyledLink href={"/"}>
          <Image src={logo} alt="logo" />
        </StyledLink>
        <ul className="flex flex-row items-center text-white text-md space-x-[40px]">
          <li>
            <StyledLink href={"/"}>Product</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>Blog</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>Contact</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>Log In</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>
              <button className="bg-white bg-opacity-20 w-[105px] h-[42px] rounded-[4px] text-center ">Get Access</button>
            </StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
