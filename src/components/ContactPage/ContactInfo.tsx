import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import PhoneImage from "../../assets/images/phoneIcon.svg";
import MailIcon from "../../assets/images/mailIcon.svg";
import LocationIcon from "../../assets/images/locationIcon.svg";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Ellipse2 from "../../assets/images/ellipse2.svg";
import Twitter from "../../assets/images/twitter.svg";

export default function ContactInfo() {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center rounded-md bg-black pb-[25px] pt-[15px] text-xs font-normal leading-[18px] text-white xl:items-start xl:justify-start xl:pl-10 xl:pb-[36px] xl:text-base">
                <div className="text-center xl:pt-[25px] xl:text-start">
                    <h2 className="mb-[6px] text-xl font-semibold leading-[30px] xl:text-[28px] xl:leading-[42px]">
                        Contact Information
                    </h2>
                    <p className="text-[11px] font-normal leading-4 text-[#C9C9C9] xl:text-lg xl:leading-[27px]">
                        Say something to start a live chat!
                    </p>
                </div>

                <div className="flex flex-col items-center pt-[15.19px] xl:items-start xl:pb-[96px] xl:pt-[111px] xl:pl-[3px]">
                    <div className="flex flex-col items-center justify-center xl:flex xl:flex-row xl:items-center ">
                        <img
                            src={PhoneImage}
                            alt="phone"
                            className="mb-[13px] xl:mr-[28px] xl:mb-0"
                        />
                        <a href="tell:+1012 3456 789">
                            <p>+1012 3456 789</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-[19px] xl:flex xl:flex-row xl:items-center xl:pt-[50px]">
                        <img
                            src={MailIcon}
                            alt="mail"
                            className="mb-[14px] xl:mr-[28px] xl:mb-0"
                        />
                        <a href="mailto:demo@gmail.com">
                            <p>demo@gmail.com</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center pb-[58px] pt-[16.5px] xl:flex xl:flex-row xl:items-start xl:pt-[50px]">
                        <img
                            src={LocationIcon}
                            alt="location"
                            className="mb-[11.5px] xl:mr-[28px] xl:mb-0"
                        />
                        <p className="text-center xl:text-left">
                            132 Dartmouth Street Boston, <br /> Massachusetts
                            02156 United States
                        </p>
                    </div>
                </div>

                <div className="z-20 flex gap-6">
                    <a
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#262626] hover:bg-white hover:text-black"
                    >
                        <BsTwitter className="text-base" />
                    </a>
                    <a
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#262626] hover:bg-white hover:text-[#262626]"
                    >
                        <BsInstagram className="text-base" />
                    </a>
                    <a
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#262626] hover:bg-white hover:text-[#262626]"
                    >
                        <BsDiscord className="text-lg" />
                    </a>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bottom-[55px] right-[24px] z-10 ">
                    <img
                        src={Ellipse2}
                        alt="ellipse two"
                        className="xl:h-[134.5px] xl:w-[134.5px]"
                    />
                </div>
                <div className="absolute right-0 bottom-0">
                    <img
                        src={Ellipse1}
                        alt="ellipse one"
                        className="h-[96px] w-[96px] rounded-b-md xl:h-[174.5px] xl:w-[154.5px]"
                    />
                </div>
            </div>
        </>
    );
}
