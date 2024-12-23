import Image from "next/image";
import heroBG from "../../../public/img/heroBG.png";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image src={heroBG} alt="heroBG" className="relative object-cover" layout="fill" priority />
      </div>
    </div>
  );
}
