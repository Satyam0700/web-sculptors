import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex-col h-screen bg-cover bg-center custom-image`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div
        className={` flex justify-center absolute bottom-20 left-10 z-[3] items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[42px] text-white ss:leading-[75px] leading-[55px]">
            MAKE THE <span className="text-gradient"> WORLD FUTURISTIC</span> WITH AI
          </h1>
        </div>
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[770px] mt-5`}
        >
          Our Company, Web Sculptors is a startup that will do their best to
          make the world futuristic with the help of AI and technology .
        </p>
      </div>
    </section>
  );
};

export default Hero;
