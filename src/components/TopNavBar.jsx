import StyledLink from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function TopNavBar() {
  return (
    <div className="flex  justify-between items-center mt-[40px] mx-[140px]">
      <StyledLink href={"/"}>
        <Image src={logo} alt="logo" />
      </StyledLink>
      <ul className="flex flex-row items-center space-x-[50px]   text-white text-md ">
        <li>
          <StyledLink className="text-white" href={"/"}>
            Product
          </StyledLink>
        </li>
        <li>
          <StyledLink className="text-white" href={"/"}>
            Service
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
            <button className="bg-white bg-opacity-20 w-[105px] h-[42px] text-white text-center ">Get Access</button>
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
