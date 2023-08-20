import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={` flex-col`}>
      <div
        className={` flex justify-center absolute bottom-7 left-10 z-20 items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src="/assets/Discount.svg" alt="discount" className="object-contain" width={32} height={32} />
          <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100px] leading-[75px]">
             MAKE THE WORLD FUTURISTIC WITH AI
          </h1>

        </div>
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[770px] mt-5`}
        >
          Our Company, Web Sculptors is a startup that will do their best to make
          the world futuristic with the help of AI and technology .
        </p>
      </div>

      <div
        className={`w-full h-[95vh] relative`}
      >
        <img
          src="/assets/ai-1.webp"
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 rounded-full blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
