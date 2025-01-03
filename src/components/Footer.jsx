import StyledLink from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import arrowForward from "../../public/img/arrow_forward.png";

export default function Footer() {
  return (
    <div className="bg-navy h-[446px] ">
      <div className="flex container pt-[50px] justify-between">
        <div className="text-white text-xs w-[168px] h-[81px] mx-auto">
          <Image src={logo} alt="logo" />
          <p className="pt-[20px]">Collaboration platform for modern teams.</p>
        </div>
        <div className="flex ml-[128px]">
          <dl className="text-xs space-y-[16px]">
            <dt className="text-white text-regular font-bold w-[169px] h-[22px]">Company</dt>
            <dd>
              <StyledLink className="text-white" href="/">
                Product
              </StyledLink>
            </dd>
            <dd>
              <StyledLink className="text-white" href="/">
                Blog
              </StyledLink>
            </dd>
            <dd>
              <StyledLink className="text-white" href="/">
                Support
              </StyledLink>
            </dd>
          </dl>
          <dl className="text-xs space-y-[16px] w-[169px] h-[22px]">
            <dt className="text-white text-regular font-bold">Features</dt>
            <dd>
              <StyledLink className="text-white" href="/">
                Screen Sharing
              </StyledLink>
            </dd>
            <dd>
              <StyledLink className="text-white" href="/">
                iOS & Android Apps
              </StyledLink>
            </dd>
            <dd>
              <StyledLink className="text-white" href="/">
                File Sharing
              </StyledLink>
            </dd>
            <dd>
              <StyledLink className="text-white" href="/">
                User Management
              </StyledLink>
            </dd>
          </dl>
          <div className="text-xs text-white space-y-[16px] w-[169px] h-[22px]">
            <p className="text-white text-regular font-bold">Contact Us</p>
            <p>info@chatapp.com</p>
            <p>1-800-200-300</p>
            <div>
              <p>1010 Sunset Blvd,</p>
              <p>Palo Alto, CA</p>
            </div>
          </div>
          <div className="text-xs text-white space-y-[16px] ">
            <p className="text-white text-regular font-bold">Stay up to date</p>
            <p>Subscribe to our newsletter.</p>

            <input className="w-[267px] h-[48px] bg-white bg-opacity-20 rounded-[4px] pl-[16px]" placeholder="Email" type="text" />
            <button>
              <Image className="bg-opacity-30 absolute mt-[-16px] ml-[-40px]" src={arrowForward} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
