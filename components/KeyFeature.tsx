import { features } from "@/constants";
import Heading from "./Heading";
import Image from "next/image";

const KeyFeature = () => {
  return (
    <section id="features">
      <div>
        <Heading
          subTitle="Whats the function"
          title="Meet the feature of our product"
        />
        <div className="grid sm:px-32 px-9 sm:grid-cols-3 grid-cols-1 w-full gap-10 mt-20 mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex mt-10 items-center md:items-start md:justify-normal justify-center text-current flex-col gap-2"
            >
              <Image src={feature.img} alt="img" width={80} height={80} />
              <h1 className="text-lg font-semibold">{feature.title}</h1>
              <p className="text-sm leading-[1.9] text-[#343D48] font-normal text-center md:text-left">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
