"use client";

import Image from "next/image";
import StyledLink from "next/link";
import hero_bg from "../../assets/img/hero_bg.png";
import mockup from "../../assets/img/mockup.png";
import main_image2 from "../../assets/img/main_image2.png";
import main_image3 from "../../assets/img/main_image3.png";
import arrow_right from "../../assets/img/arrow_right.png";
import stars from "../../assets/img/stars.png";
import arrow_back from "../../assets/img/arrow_back.png";
import arrow_forward from "../../assets/img/arrow_forward.png";
import animationImageTop from "../../assets/img/animationImageTop.png";
import animationImageBottom from "../../assets/img/animationImageBottom.png";
import animationImage from "../../assets/img/animationImage.png";
import "../../assets/styles/home.css";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface reviewItem {
  id: number;
  reviewer: string;
  content: string;
  user_info: string;
  imageUrl: string;
}

export default function Home() {
  const [reviewList, setReviewList] = useState<reviewItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const animationImageTopRef = useRef<HTMLImageElement>(null);
  const animationImageBottomRef = useRef<HTMLImageElement>(null);
  const animationImageRef = useRef<HTMLImageElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  useEffect(() => {
    const getReviewList = async () => {
      try {
        const { data } = await axios.get("/api/review");
        setReviewList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getReviewList();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: "100px 0px" }
    );

    if (animationImageTopRef.current) observer.observe(animationImageTopRef.current);
    if (animationImageBottomRef.current) observer.observe(animationImageBottomRef.current);
    if (animationImageRef.current) observer.observe(animationImageRef.current);
  }, []);

  const handleOnSubmit = () => {
    setActive(true);
    reset({
      email: "",
    });
  };

  const handleSlide = (direction: "left" | "right") => {
    const slideWidth = 180;
    const maxOffset = -(slideWidth * (reviewList.length - 3));

    setOffset((prevOffset) => {
      let newOffset = direction === "right" ? prevOffset - slideWidth : prevOffset + slideWidth;
      newOffset = Math.max(newOffset, maxOffset);
      newOffset = Math.min(newOffset, 0);
      return newOffset;
    });
  };

  return (
    <>
      <div className="container h-screen">
        <Image className="relative object-cover bg-center" layout="fill" src={hero_bg} alt="hero_bg" priority />
        <div className="absolute text-white ">
          <div className="w-[496px] mt-[240px]">
            <p className="mb-[10px] text-3xl leading-[67px]">Instant collaboration for remote teams</p>
            <p className="text-[20px] leading-[30px]">All-in-one place for your remote team to chat collaborate and track project progress</p>
            <div className="mt-[55px]">
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input
                  type="email"
                  className="form-container w-[296px] pl-[16px] text-sm placeholder: text-black"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Please enter your email !",
                  })}
                />
                {active === true ? (
                  <button className="form-container button-layout bg-orange">Get Access</button>
                ) : (
                  <button type="submit" className="form-container button-layout bg-main">
                    Get Early Access
                  </button>
                )}
              </form>
            </div>
            {errors.email && <p className="pt-[10px] pl-[5px] text-[12px] text-white">{errors.email.message}</p>}
          </div>
        </div>
      </div>
      <section className="overflow-x-hidden my-[80px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <p className="section-title">Your hub for teamwork</p>
              <p className="section-description-layout">In Team App, you’ve got all the flexibility to work when, where and how it’s best for you. you can easily chat, send audio and vedio clips, or hop on a huddle to talk things out live.</p>
              <div className="section-link-layout">
                <StyledLink className="section-link" href={"/"}>
                  Lean More
                </StyledLink>
                <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <Image src={mockup} alt="mockup" />
          </div>
        </div>
      </section>
      <div className="container my-[80px]">
        <section className="section-layout">
          <div className="relative">
            <Image ref={animationImageTopRef} className="absolute w-[227px] mt-[43px] ml-[243px] fade-in-out-fast" src={animationImageTop} alt="animationImageTop" />
            <Image ref={animationImageBottomRef} className="absolute w-[227px] mt-[191px] ml-[243px] fade-in-out-slow" src={animationImageBottom} alt="animationImageBottom" />
            <Image className=" section-main-image" src={main_image2} alt="main_image2" />
          </div>
          <div>
            <div>
              <p className="section-title">Simple task management</p>
              <p className="section-description-layout">
                Tast management with Team App is simple as it gets. No complicated layout and need for user training. Tour team members will intuitively know how to navigate the plateform. It’s so simple a baby could do it!
              </p>
            </div>
            <div className="section-link-layout">
              <StyledLink className="section-link" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" />
            </div>
          </div>
        </section>
        <section className="section-layout my-[80px]">
          <div className="last-section-description-layout mr-[68px]">
            <div>
              <p className="section-title">Scheduling that actually works</p>
              <div>
                <p>Intergrate the Team calendar with your favorite calendar app, be it Google Calendar or iCal.</p>
                <br />
                <p>Each team member works with their favorite calendar, while all the data is synced with the master calendar.</p>
              </div>
            </div>
            <div className="section-link-layout">
              <StyledLink className="section-link" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" />
            </div>
          </div>
          <div className="relative">
            <Image ref={animationImageRef} className="absolute mt-[50px] ml-[50px] fade-in-out-fast" width="225" src={animationImage} alt="animationImage" />
            <Image className="section-main-image" src={main_image3} alt="main_image3" />
          </div>
        </section>
      </div>
      <div className="overflow-x-hidden">
        <div className="container">
          <h1 className="text-3xl text-blue">What people say about Team App</h1>
          <ul ref={ulRef} className="flex mt-[120px] mb-[60px] gap-[30px] transition-transform duration-300" style={{ transform: `translateX(${offset}px)` }}>
            {reviewList.map((item) => (
              <li className="bg-[#fff] w-[367px] h-[396px] rounded-[7px] drop-shadow-xl pt-[60px] px-[38px]" key={item.id}>
                <Image width="124" height="24" src={stars} alt="stars" />
                <p className="mt-[30px] w-[267px] h-[116px] text-gray text-regular ">{item.content}</p>
                <div className="flex mt-[70px] gap-[15px] items-center ">
                  {item.imageUrl ? <Image src={item.imageUrl} alt="profile-image" width="50" height="50" /> : <p>No Image</p>}
                  <div>
                    <p className="text-blue text-regular">{item.reviewer}</p>
                    <p className="text-gray text-sm">{item.user_info}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mb-[160px] gap-[10px]">
            <button onClick={() => handleSlide("left")}>
              <Image src={arrow_back} alt="arrow_back" />
            </button>
            <button onClick={() => handleSlide("right")}>
              <Image src={arrow_forward} alt="arrow_forward" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
