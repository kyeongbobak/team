import StyledLink from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function TopNavBar() {
  return (
    <div className="absolute z-10 w-full ">
      <div className="container flex items-center mt-[40px] justify-between">
        <StyledLink href={"/"}>
          <Image src={logo} alt="logo" />
        </StyledLink>
        <ul className="flex flex-row items-center text-white text-md space-x-[20px]">
          <li>
            <StyledLink className="text-color" href={"/"}>
              Product
            </StyledLink>
          </li>
          <li>
            <StyledLink className="text-white" href={"/"}>
              Blog
            </StyledLink>
          </li>
          <li>
            <StyledLink className="text-white" href={"/"}>
              Contact
            </StyledLink>
          </li>
          <li>
            <StyledLink className="text-white" href={"/"}>
              Log In
            </StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>
              <button className="bg-white bg-opacity-20 w-[105px] h-[42px] text-white text-center rounded-[4px]">Get Access</button>
            </StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
