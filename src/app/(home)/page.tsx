import Image from "next/image";
import StyledLink from "next/link";
import heroBG from "../../../public/img/heroBG.png";
import mainImage1 from "../../../public/img/mainImage1.png";
import mainImage2 from "../../../public/img/mainImage2.png";
import mainImage3 from "../../../public/img/mainImage3.jpg";
import arrowRight from "../../../public/img/arrowRight.png";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image src={heroBG} alt="heroBG" className="relative object-cover" layout="fill" priority />
        <div className="absolute mt-[230px] ml-[140px] text-white ">
          <div className="text-3xl leading-[7rem]">
            <p>Instant collaboration</p>
            <p>for remote teams</p>
          </div>
          <div className="text-[20px] mt-[10px]">
            <p>All-in-one place for your remote team to chat</p>
            <p>collaborate and track project progress</p>
          </div>
          <div className="mt-[55px]">
            <input type="text" className="w-[320px] h-[56px] pl-[16px] text-sm" placeholder="Email" />
            <button className="bg-main w-[165px] h-[56px] ml-[10px] rounded-[4px] text-center text-sm">Get Early Access</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-[140px] mt-[313px]">
          <div>
            <div className="w-[367px] h-[134px] text-3xl leading-[70px]">
              <p>Your hub for teamwork</p>
            </div>
            <p className="w-[367px] mt-[30px] text-blue text-regular">
              In Team App, you’ve got all the flexibility to work when, where and how it’s best for you. you can easily chat, send audio and vedio clips, or hop on a huddle to talk things out live.
            </p>
            <div className="mt-[40px] flex items-center mr-[2px] text-md">
              <StyledLink className=" text-main  pr-[4px]" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="w-[16px] h-[8px]" src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
        <div className="mt-[114px] ml-[250px]">
          <StyledLink href={"/"}>
            <Image src={mainImage1} alt="mainImage" />
          </StyledLink>
        </div>
      </div>
      <div className="flex justify-between mt-[160px]">
        <div className="ml-[140px]">
          <StyledLink href={"/"}>
            <Image src={mainImage2} alt="mainImage" />
          </StyledLink>
        </div>
        <div>
          <div className="mr-[240px]">
            <div className="w-[367px] h-[134px] mt-[113px] text-3xl leading-[70px]">
              <p>Simple task management</p>
            </div>
            <p className="w-[367px] mt-[30px] text-blue text-regular">
              Tast management with Team App is simple as it gets. No complicated layout and need for user training. Tour team members will intuitively know how to navigate the plateform. It’s so simple a baby could do it!
            </p>
            <div className="mt-[40px] flex items-center mr-[2px] text-md">
              <StyledLink className=" text-main  pr-[4px]" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="w-[16px] h-[8px]" src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-[140px] mt-[313px]">
          <div>
            <div className="w-[400px] h-[134px] text-3xl leading-[70px]">
              <p>Scheduling that actually works</p>
            </div>
            <div className="w-[527px] mt-[30px] text-blue text-regular">
              <p>Intergrate the Team calendar with your favorite calendar app, be it Google Calendar or iCal.</p>
              <p>Each team member works with their favorite calendar, while all the data is synced with the master calendar.</p>
            </div>
            <div className="mt-[40px] flex items-center mr-[2px] text-md">
              <StyledLink className="text-main  pr-[4px]" href={"/"}>
                Lean More
              </StyledLink>
              <Image className="w-[16px] h-[8px]" src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
        <div className="w-[565px] mt-[130px] ml-[68px] mr-[140px] mb-[160px]">
          <StyledLink href={"/"}>
            <Image src={mainImage3} alt="mainImage3" />
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
