import { useEffect, useState, useRef } from "react";
import StyledLink from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import logo_other from "../assets/img/logo_other.png";
import { usePathname } from "next/navigation";
import "../assets/styles/topnavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, persistor } from "../redux/store";
import { logout } from "../redux/slices/authslice";
import { useMediaQuery } from "react-responsive";
import menu_icon from "../assets/img/menu.png";
import styles from "../assets/styles/topnavbar.module.css";

export default function TopNavBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [slideState, setSlideState] = useState("");
  const navbarRef = useRef<HTMLDivElement>(null);

  const pathName = usePathname();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
  };

  useEffect(() => {
    setSlideState(isClicked ? styles.slideIn : styles.slideOut);
  }, [isClicked]);

  return (
    <>
      {isMobile ? (
        <div className={pathName === "/" ? "absolute z-10 w-full" : "z-10 w-full"}>
          <div className="container">
            <div className="navbar-wrapper">
              <StyledLink href={"/"}>{pathName === "/" ? <Image src={logo} alt="logo" priority /> : <Image src={logo_other} alt="logo_other" priority />}</StyledLink>
              <button className={`p-[7px] rounded-t-[8px] ${isClicked ? "bg-[#3f4760]" : ""}`} onClick={() => setIsClicked(!isClicked)}>
                <Image src={menu_icon} width={30} height={30} alt="menu_icon" />
              </button>
            </div>
            <div ref={navbarRef} className={`${styles.navbarSlideWrapper} ${slideState}`}>
              <ul className="bg-[#3f4760] text-white px-[20px] pt-[20px] pb-[36px] rounded-b-[7px] rounded-tl-[7px]">
                <li className="px-[20px] py-[12px] text-sm">
                  <StyledLink href={"/"}>Product</StyledLink>
                </li>
                <li className="px-[20px] py-[12px] text-sm">
                  <StyledLink href={`/blog`}>Blog</StyledLink>
                </li>
                <li className="px-[20px] py-[12px] text-sm">
                  <StyledLink href={"/"}>Contact</StyledLink>
                </li>
                <li className="px-[20px] py-[12px] text-sm">
                  {isAuthenticated ? (
                    <StyledLink href={"/"}>
                      <button onClick={handleLogout}>Log out</button>
                    </StyledLink>
                  ) : (
                    <StyledLink href={"/auth/login"}>Log In</StyledLink>
                  )}
                </li>
                <li className="px-[20px] py-[12px] text-sm">
                  <StyledLink href={"/"}>
                    {isAuthenticated ? (
                      <button className="bg-[#d5f1fb] text-[#56bbed] w-[105px] h-[42px] rounded-[4px] text-center">Get Access</button>
                    ) : (
                      <button className="bg-white bg-opacity-20 w-[105px] h-[42px] rounded-[4px] text-center">Get Access</button>
                    )}
                  </StyledLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={pathName === "/" ? "absolute z-10 w-full" : "z-10 w-full"}>
          <div className="container navbar-wrapper">
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
                {isAuthenticated ? (
                  <StyledLink href={"/"}>
                    <button onClick={handleLogout}>Log out</button>
                  </StyledLink>
                ) : (
                  <StyledLink href={"/auth/login"}>Log In</StyledLink>
                )}
              </li>
              <li>
                <StyledLink href={"/"}>
                  {isAuthenticated ? (
                    <button className="bg-[#d5f1fb] text-[#56bbed] w-[105px] h-[42px] rounded-[4px] text-center ">Get Access</button>
                  ) : (
                    <button className="bg-white bg-opacity-20 w-[105px] h-[42px] rounded-[4px] text-center ">Get Access</button>
                  )}
                </StyledLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
