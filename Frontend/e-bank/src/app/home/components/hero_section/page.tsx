import Image from "next/image";
import heroImage from "../../../assets/img0.png";

const HeroSection = () => {
  return (
    <div className="hero-section bg-mainRed text-white py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-2xl md:max-w-6xl mx-auto flex flex-row items-center justify-center md:justify-between">
        <div className="hero-content space-y-4 md:w-1/2">
          <h1 className="text-xl md:text-6xl font-bold leading-tight">
            Banking made easy!
          </h1>
          <p className="text-sm md:text-xl">
            Start your digital banking journey with us and enjoy a seamless
          </p>
          <button className="btn bg-white text-mainRed hover:bg-gray-200 px-6 py-2 rounded-md font-semibold">
            Join us
          </button>
        </div>
        <div className="mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={heroImage}
            alt="hero"
            width={500}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
