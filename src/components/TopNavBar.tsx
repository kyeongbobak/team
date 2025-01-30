"use client";

import StyledLink from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import logo_other from "../assets/img/logo_other.png";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathName = usePathname();
  const dynamicParam = pathName.replace(/[^a-zA-Z]/g, "");
  console.log(dynamicParam);

  return (
    <>
      {dynamicParam === "" ? (
        <div className="absolute z-10 w-full ">
          <div className="container flex justify-between items-center mt-[40px]">
            <StyledLink href={"/"}>
              <Image src={logo} alt="logo" />
            </StyledLink>
            <ul className="flex flex-row items-center text-white text-md space-x-[40px]">
              <li>
                <StyledLink href={`/post/${1}`}>Product</StyledLink>
              </li>
              <li>
                <StyledLink href={`/blog`}>Blog</StyledLink>
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
      ) : (
        <div className="z-10 w-full">
          <div className="container flex justify-between items-center mt-[40px]">
            <StyledLink href={"/"}>
              <Image src={logo_other} alt="logo" />
            </StyledLink>
            <ul className="flex flex-row items-center text-blue text-md space-x-[40px]">
              <li>
                <StyledLink href={`/post/${1}`}>Product</StyledLink>
              </li>
              <li>
                <StyledLink href={`/blog/`}>Blog</StyledLink>
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
      )}
    </>
  );
}
