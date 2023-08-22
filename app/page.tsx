import Hero from "@/components/Hero";
import KeyFeature from "@/components/KeyFeature";
import Navbar from "@/components/Navbar";
import QualityFeature from "@/components/QualityFeature";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-[#00040f] flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div> */}
      {/* <div className="flex justify-center items-start"> */}
        {/* <div className="xl:max-w-[1280px] w-full"> */}
          <Hero />
          <KeyFeature />
          <Service />
          <QualityFeature />
          <Team />
        {/* </div> */}
      {/* // </div> */}
    </main>
  );
}
