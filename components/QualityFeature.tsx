import { QualityFeatures } from "@/constants";
import Heading from "./Heading";
import Image from "next/image";

const QualityFeature = () => {
  return (
    <div id="product">
      <Heading title="Amazing useful features" subTitle="QUALITY FEATURES" />

      <div className="sm:px-20 px-9 mt-32 mb-10 grid md:grid-cols-2 grid-cols-1 gap-20">
        {QualityFeatures.map((feature) => (
            <div key={feature.id} className="flex items-start gap-5">
                <Image src={feature.img} width={100} height={100} alt={feature.text} />
                <div>
                <h1 className="text-lg font-semibold mb-4">{feature.title}</h1>
                <p className="text-base font-medium max-w-md">
                 {feature.text}
                </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default QualityFeature;
