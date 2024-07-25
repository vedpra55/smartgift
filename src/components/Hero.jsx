import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-2 md:px-5 pt-5">
      <img className="w-14" src="/logo.jpg" />
      <Link href={"/"}>
        <div className=" relative w-full h-[10rem] md:h-[26.5rem]">
          <Image
            src="/banner.jpg"
            layout="fill"
            objectFit="cover"
            className="mt-5 rounded-2xl"
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default Hero;
