import StyledLink from "next/link";
import Image from "next/image";
import BlogFeed from "../../../components/BlogFeed";
import chevron_right from "../../../assets/img/chevron_right.png";

export default async function blog() {
  return (
    <>
      <div className="container mt-[98px] bg-[#f5f7fa]">
        <h1 className="text-blue text-3xl">Blog</h1>
        <p className="text-gray text-regular mb-[80px]">Our latest web design tips, tricks, insights and resources hot off the presses.</p>
        <BlogFeed />
        <div className="mx-auto flex justify-center items-center bg-[#e7eaee] w-[165px] py-[10px] mt-[40px] mb-[120px] rounded-[4px]">
          <StyledLink className="text-regular text-[#69788d]" href={``}>
            Next
          </StyledLink>
          <Image width={20} height={20} src={chevron_right} alt="chevron_right" priority />
        </div>
      </div>
    </>
  );
}
