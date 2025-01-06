import Image from "next/image";
import StyledLink from "next/link";
import heroBG from "../../../public/img/heroBG.png";
import mockup from "../../assets/img/mockup.png";
import mainImage2 from "../../../public/img/mainImage2.png";
import mainImage3 from "../../assets/img/mainImage3.png";
import arrowRight from "../../../public/img/arrowRight.png";
import "../../assets/styles/home.css";

export default function Home() {
  return (
    <>
      <div className="container h-screen">
        <Image className="relative object-cover bg-center" layout="fill" src={heroBG} alt="heroBG" priority />
        <div className="absolute text-white ">
          <div className="w-[496px] mt-[240px]">
            <p className="mb-[10px] text-3xl leading-[67px]">Instant collaboration for remote teams</p>
            <p className="text-[20px] leading-[30px]">All-in-one place for your remote team to chat collaborate and track project progress</p>
            <div className="mt-[55px]">
              <input type="text" className="form-container w-[296px] pl-[16px] text-sm" placeholder="Your Email" />
              <button className="form-container w-[165px] ml-[10px] bg-main text-md text-center  font-bold">Get Early Access</button>
            </div>
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
                <Image className="section-link-icon " src={arrowRight} alt="arrowRight" />
              </div>
            </div>
            <Image className="" src={mockup} alt="mockup" />
          </div>
        </div>
      </section>
      <div className="container my-[80px]">
        <section className="section-layout">
          <StyledLink href={"/"}>
            <Image className="section-main-image" src={mainImage2} alt="mainImage" />
          </StyledLink>
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
              <Image className="section-link-icon" src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </section>
        <section className="section-layout my-[80px]">
          <div className="lastsection-description-layout mr-[68px]">
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
              <Image className="section-link-icon " src={arrowRight} alt="arrowRight" />
            </div>
          </div>
          <StyledLink href={"/"}>
            <Image className="section-main-image" src={mainImage3} alt="mainImage3" />
          </StyledLink>
        </section>
      </div>
    </>
  );
}
