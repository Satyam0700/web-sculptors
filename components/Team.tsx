import { teams } from "@/constants"
import Heading from "./Heading"
import Image from "next/image"
import Link from "next/link"

const Team = () => {
  return (
    <div id="teams">
        <Heading title="The most qualified and talented individuals" subTitle="our team"/>

        <div className="sm:mx-20 mx-9 mt-24 mb-10 px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {teams.map((team) => (
                <div key={team.id} className="flex hover:bg-white hover:shadow-xl hover:text-[#EA3A60] transition py-10 px-20 rounded-lg flex-col text-center gap-10 mt-10 items-center justify-center">
                    <Image src={team.imgSrc} width={100} height={100} alt={team.altText}/>
                    <div>
                        <h1 className="text-lg font-semibold mb-1 ">{team.title}</h1>
                        <p className="text-base font-normal text-[#343D48]">{team.designation}</p>
                        {/* <div className="">
                            {team.socialProfile.map((social) => (
                                <Link key={social.id} href={social.path} className="">
                                   <span className=" text-[#343D48] transition hover:text-[#EA3A60]">{<social.icon />}</span> 
                                </Link>
                            ))}
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team