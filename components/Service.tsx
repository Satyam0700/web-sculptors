import Image from "next/image";
import Heading from "./Heading";

const Service = () => {
  return (
    <div id="service">
      <Heading
        title="Business Goals Achieved with the Ai"
        subTitle="our services"
      />
      <div className="sm:px-20 px-9 mt-32 mb-10 flex md:flex-row flex-col items-center justify-center gap-20">
        <Image
          src="/assets/service.png"
          width={512}
          height={512}
          alt="service"
        />
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex gap-5 items-start">
              <Image
                src="/assets/subscription.svg"
                alt="subscriptions"
                width={70}
                height={70}
              />
              <div className="">
                <h1 className="text-lg font-semibold mb-4">Smart Feature</h1>
                <p className="text-base font-medium max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi beatae error tempore ad libero perferendis optio
                  explicabo iste magnam?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start mt-10 gap-5">
              <Image
                src="/assets/partnership.svg"
                alt="subscriptions"
                width={70}
                height={70}
              />
              <div className="">
                <h1 className="text-lg font-semibold mb-4">Secure content</h1>
                <p className="text-base font-medium max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi beatae error tempore ad libero perferendis optio
                  explicabo iste magnam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
