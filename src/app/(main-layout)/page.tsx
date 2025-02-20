"use client";

import Image from "next/image";
import StyledLink from "next/link";
import hero_bg from "../../assets/img/hero_bg.png";
import mockup from "../../assets/img/mockup.png";
import main_image2 from "../../assets/img/main_image2.png";
import main_image3 from "../../assets/img/main_image3.png";
import arrow_right from "../../assets/img/arrow_right.png";
import stars from "../../assets/img/stars.png";
import arrow_back_blue from "../../assets/img/arrow_back_blue.png";
import arrow_forward_blue from "../../assets/img/arrow_forward_blue.png";
import animationImageTop from "../../assets/img/animationImageTop.png";
import animationImageBottom from "../../assets/img/animationImageBottom.png";
import animationImage from "../../assets/img/animationImage.png";
import "../../assets/styles/home.css";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "@/redux/store";
import { login } from "../../redux/slices/authslice";

interface reviewItem {
  id: number;
  reviewer: string;
  content: string;
  user_info: string;
  imageUrl: string;
}

export default function Home() {
  const [reviewList, setReviewList] = useState<reviewItem[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

  const animationImageTopRef = useRef<HTMLImageElement | null>(null);
  const animationImageBottomRef = useRef<HTMLImageElement | null>(null);
  const animationImageRef = useRef<HTMLImageElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  useEffect(() => {
    const getReviewList = async (): Promise<void> => {
      try {
        const { data } = await axios.get<reviewItem[]>("/api/review");
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

  const handleEmailLogin = async ({ email }: { email: string }): Promise<void> => {
    try {
      const { data } = await axios.post("/api/auth/login", { email });
      reset({
        email: "",
      });

      if (data) {
        dispatch(login(data.token));
      }
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      if (axiosError.status === 404) {
        alert("This is a non-existent user!");
      }
    }
  };

  const handleSlide = (direction: "left" | "right"): void => {
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
        <Image className="main-image" fill src={hero_bg} alt="hero_bg" priority />
        <div className="headline-wrapper">
          <p className="headline">Instant collaboration for remote teams</p>
          <p className="sub-headline">All-in-one place for your remote team to chat collaborate and track project progress</p>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit(handleEmailLogin)}>
              <input
                type="email"
                className="form-container placeholder: text-black"
                placeholder="Email"
                {...register("email", {
                  required: "Please enter your email !",
                })}
              />
              {isAuthenticated ? (
                <button type="submit" className="button-layout bg-orange">
                  Get Access
                </button>
              ) : (
                <button type="submit" className="button-layout bg-main">
                  Get Early Access
                </button>
              )}
            </form>
          </div>
          {errors.email && <p className="pt-[10px] pl-[5px] text-[12px] text-white">{errors.email.message}</p>}
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
                <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" priority />
              </div>
            </div>
            <Image className="section-main-image-first" src={mockup} alt="mockup" />
          </div>
        </div>
      </section>
      <div className="container my-[80px]">
        <section className="section-layout-second">
          <div className="relative flex mr-[30px]">
            <Image className="section-main-image" src={main_image2} alt="main_image2" priority />
            <div className="absolute animation-image z-10">
              <Image ref={animationImageTopRef} className="mt-[43px] fade-in-out-fast" src={animationImageTop} alt="animationImageTop" priority />
              <Image ref={animationImageBottomRef} className="animation-image-bottom mt-[11px] fade-in-out-slow" src={animationImageBottom} alt="animationImageBottom" priority />
            </div>
          </div>
          <div className="section-item">
            <p className="section-title">Simple task management</p>
            <p className="section-description-layout">
              Tast management with Team App is simple as it gets. No complicated layout and need for user training. Tour team members will intuitively know how to navigate the plateform. It’s so simple a baby could do it!
            </p>
            <div className="section-link-layout">
              <StyledLink className="section-link" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" priority />
            </div>
          </div>
        </section>
        <section className="section-layout-second my-[80px]">
          <div className="last-section-description-layout">
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
              <Image className="section-link-icon icon-hover-move" src={arrow_right} alt="arrow_right" priority />
            </div>
          </div>
          <div className="relative flex">
            <Image className="section-main-image-third" src={main_image3} alt="main_image3" priority />
            <div className="absolute animation-image-next">
              <Image ref={animationImageRef} className="fade-in-out-fast" width="225" src={animationImage} alt="animationImage" priority />
            </div>
          </div>
        </section>
      </div>
      <div className="overflow-x-hidden">
        <div className="container">
          <h1 className="text-3xl text-blue">What people say about Team App</h1>
          <ul ref={ulRef} className="flex mt-[120px] mb-[60px] gap-[30px] transition-transform duration-300" style={{ transform: `translateX(${offset}px)` }}>
            {reviewList.map((item) => (
              <li className="bg-[#fff] w-[367px] h-[396px] rounded-[7px] drop-shadow-xl pt-[60px] px-[38px]" key={item.id}>
                <Image width="124" height="24" src={stars} alt="stars" priority />
                <p className="mt-[30px] w-[267px] h-[116px] text-gray text-regular ">{item.content}</p>
                <div className="flex mt-[70px] gap-[15px] items-center ">
                  {item.imageUrl ? <Image src={item.imageUrl} alt="profile-image" width="50" height="50" priority /> : <p>No Image</p>}
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
              <Image src={arrow_back_blue} alt="arrow_back_blue" priority />
            </button>
            <button onClick={() => handleSlide("right")}>
              <Image src={arrow_forward_blue} alt="arrow_forward_blue" priority />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
