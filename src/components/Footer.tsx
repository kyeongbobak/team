"use client";

import StyledLink from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import arrowForward from "../assets/img/arrow_forward.png";
import check from "../assets/img/check.png";
import "../styles/footer.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Footer() {
  const [active, setActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const handleOnSubmit = () => {
    setActive(true);
  };

  return (
    <div className="bg-navy py-[60px]">
      <div className="container footer-wrapper">
        <div className="footer-logo-block">
          <Image className="pt-[4px]" src={logo} alt="logo" priority />
          <p className="w-[148px] h-[40px] mt-[18px] text-base text-[#fff9]">Collaboration platform for modern teams.</p>
        </div>
        <nav>
          <h3 className="footer-nav-title">Company</h3>
          <ul className="footer-nav-item">
            <li>
              <StyledLink className="" href="/">
                Product
              </StyledLink>
            </li>
            <li>
              <StyledLink className="" href="/">
                Blog
              </StyledLink>
            </li>
            <li>
              <StyledLink className="" href="/">
                Support
              </StyledLink>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="footer-nav-title">Features</h3>
          <ul className="footer-nav-item">
            <li>
              <StyledLink href="/">Screen Sharing</StyledLink>
            </li>
            <li>
              <StyledLink href="/">iOS & Android Apps</StyledLink>
            </li>
            <li>
              <StyledLink href="/">File Sharing</StyledLink>
            </li>
            <li>
              <StyledLink href="/">User Management</StyledLink>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="footer-nav-title">Contact Us</h3>
          <div className="footer-nav-item">
            <p>info@chatapp.com</p>
            <p>1-800-200-300</p>
            <div>
              <p>1010 Sunset Blvd,</p>
              <p>Palo Alto, CA</p>
            </div>
          </div>
        </nav>
        <div>
          <h3 className="footer-nav-title">Stay up to date</h3>
          <div className="footer-nav-item">
            <p>Subscribe to our newsletter.</p>
            {active === true ? (
              <div className="flex justify-between items-center gap-[10px]">
                <p className="text-orange">Subscription successfully completed</p>
                <Image src={check} alt="check" priority />
              </div>
            ) : (
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input
                  type="email"
                  className="w-[296px] h-[56px] text-[#fff9] bg-white bg-opacity-20 pl-[16px] rounded-[4px]"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter your email !",
                  })}
                />
                <button>
                  <Image className="absolute bg-opacity-30 mt-[-16px] ml-[-40px]" src={arrowForward} alt="arrow" priority />
                </button>
                {errors.email && <p className="pt-[10px] pl-[5px] text-[12px] text-white">{errors.email.message}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-[180px] text-xs text-[#fff9]">© Copyright ChatApp Inc.</div>
    </div>
  );
}
