"use client";

import StyledLink from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import logo_other from "../assets/img/logo_other.png";
import { usePathname } from "next/navigation";
import "../assets/styles/topnavbar.css";

export default function TopNavBar() {
  const pathName = usePathname();

  return (
    <>
      <div className={pathName === "/" ? "absolute z-10 w-full" : "z-10 w-full"}>
        <div className={pathName === "/blog" ? "container flex justify-between items-center pt-[40px]" : "container flex justify-between items-center mt-[40px]"}>
          <StyledLink href={"/"}>{pathName === "/" ? <Image src={logo} alt="logo" priority /> : <Image src={logo_other} alt="logo_other" priority />}</StyledLink>
          <ul className={pathName === "/" ? "custom-ul text-white" : "custom-ul text-blue"}>
            <li>
              <StyledLink href={"/"}>Product</StyledLink>
            </li>
            <li>
              <StyledLink href={`/blog`}>Blog</StyledLink>
            </li>
            <li>
              <StyledLink href={"/"}>Contact</StyledLink>
            </li>
            <li>
              <StyledLink href={"/auth/login"}>Log In</StyledLink>
            </li>
            <li>
              <StyledLink href={"/"}>
                <button className="bg-white bg-opacity-20 w-[105px] h-[42px] rounded-[4px] text-center ">Get Access</button>
              </StyledLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
