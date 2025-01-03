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
      <div className="h-screen container">
        <Image className="relative object-cover bg-center" layout="fill" src={heroBG} alt="heroBG" priority />
        <div className="absolute text-white ">
          <div className="w-[496px]  mt-[240px]">
            <p className="text-3xl leading-[7rem] font-cabin">Instant collaboration for remote teams</p>
            <p className="mt-[10px] text-[20px] ">All-in-one place for your remote team to chat collaborate and track project progress</p>
            <div className="mt-[55px]">
              <input type="text" className="w-[320px] h-[56px] pl-[16px] text-sm" placeholder="Email" />
              <button className="w-[165px] h-[56px] ml-[10px] rounded-[4px] bg-main text-center text-sm">Get Early Access</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="section-layout mt-[114px] ">
          <div className="section-content-width mt-[199px]">
            <div>
              <p className="section-title">Your hub for teamwork</p>
              <p className="section-description-layout">In Team App, you’ve got all the flexibility to work when, where and how it’s best for you. you can easily chat, send audio and vedio clips, or hop on a huddle to talk things out live.</p>
            </div>
            <div className="section-link-layout">
              <StyledLink className="section-link" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="section-link-icon " src={arrowRight} alt="arrowRight" />
            </div>
          </div>
          <div className="ml-[250px]">
            <StyledLink href={"/"}>
              <Image className="w-[70rem]" src={mockup} alt="mockup" />
            </StyledLink>
          </div>
        </section>
        <section className="section-layout ">
          <div>
            <StyledLink href={"/"}>
              <Image className="section-image-size" src={mainImage2} alt="mainImage" />
            </StyledLink>
          </div>
          <div>
            <div className="section-content-width mt-[113px] ml-[128px]">
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
          </div>
        </section>
        <section className="section-layout">
          <div>
            <div className="lastsection-description-layout mr-[68px]">
              <div className="mt-[99px]">
                <p className="section-title">Scheduling that actually works</p>
                <div className="mt-[20px] ">
                  <p className="">Intergrate the Team calendar with your favorite calendar app, be it Google Calendar or iCal.</p>
                  <p className="pt-[20px]">Each team member works with their favorite calendar, while all the data is synced with the master calendar.</p>
                </div>
              </div>
              <div className="section-link-layout">
                <StyledLink className="section-link" href={"/"}>
                  Lean More
                </StyledLink>
                <Image className="section-link-icon " src={arrowRight} alt="arrowRight" />
              </div>
            </div>
          </div>
          <div className="">
            <StyledLink href={"/"}>
              <Image className="section-image-size" src={mainImage3} alt="mainImage3" />
            </StyledLink>
          </div>
        </section>
      </div>
    </>
  );
}
