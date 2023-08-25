import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <section
      className={`flex bg-[#EA3A60] sm:px-20 px-9 py-14 mt-24 justify-center items-center flex-col`}
    >
      <div
        className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image
            src="/assets/logo2.png"
            alt="logo"
            width={266}
            height={72}
            className="object-contain"
          />
          <p
            className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] mt-4 max-w-[310px]`}
          >
            Our Company, Web Sculptors is a startup that will do their best to
            make the world futuristic with the help of AI and technology .
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] mt-4 text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-dimWhite cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45}">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2023 Web Sculptors. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
