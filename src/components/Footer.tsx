import { NavLink } from "react-router-dom";
import PhoneImage from "../assets/images/phoneIcon.svg";
import MailIcon from "../assets/images/mailIcon.svg";
import LocationIcon from "../assets/images/locationIcon.svg";
import SubscribeForm from "./SubscribeForm";
export default function Footer() {
    return (
        <div className="bg-black px-5 pb-[49px] pt-[19px] text-white xl:px-20 xl:pt-20 ">
            <div className="flex items-center justify-center pb-[20px] xl:pb-[45px]">
                <h2 className="text-4xl font-extrabold xl:leading-[43.57px]">
                    Logo Here
                </h2>
            </div>
            <div className="mb-[30px] border-b border-white" />
            <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-[40px] text-xs font-normal leading-[18px] xl:pl-[10px] xl:text-base xl:leading-6">
                <div className="">
                    <h3 className="text-base font-semibold leading-[26px] xl:text-lg">
                        Reach us
                    </h3>
                    <div className="mt-[15px] xl:mt-[20px] xl:flex xl:items-center xl:justify-start">
                        <img
                            src={PhoneImage}
                            alt="phone"
                            className="mb-[12px] xl:mb-0 xl:pr-7"
                        />
                        <a href="tell:+1012 3456 789">
                            <p>+1012 3456 789</p>
                        </a>
                    </div>
                    <div className="mt-[15px] xl:mt-[24px] xl:flex xl:items-center xl:justify-start">
                        <img
                            src={MailIcon}
                            alt="mail"
                            className="mb-[12px] xl:mb-0 xl:pr-7"
                        />
                        <a href="mailto:demo@gmail.com">
                            <p>demo@gmail.com</p>
                        </a>
                    </div>
                    <div className="pt-[15px] xl:mt-[24px] xl:flex xl:items-start xl:justify-start">
                        <img
                            src={LocationIcon}
                            alt="location"
                            className="mb-[12px] xl:mb-0 xl:pr-7"
                        />
                        <p>
                            132 Dartmouth Street <br /> Boston, Massachusetts{" "}
                            <br /> 02156 United States
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-base font-semibold leading-[26px] xl:text-lg">
                        Company
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="mt-5">
                            About
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Contact
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Blog
                        </NavLink>
                    </div>
                </div>
                <div>
                    <h3 className="text-base font-semibold leading-[26px] xl:text-lg">
                        Legal
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="mt-5">
                            Privacy Policy
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Terms & Services
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Terms of Use
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Refund Policy
                        </NavLink>
                    </div>
                </div>
                <div>
                    <h3 className="text-base font-semibold leading-[26px] xl:text-lg">
                        Quick Links
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="mt-5">
                            Techlabz Keybox
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Downloads
                        </NavLink>
                        <NavLink to="#" className="mt-5 xl:mt-6">
                            Forum
                        </NavLink>
                    </div>
                </div>

                <div className="rounded-[5px] bg-[#0D0D0D] xl:max-w-[316px]">
                    <div className="p-[14px] pt-[17px] pb-[14px]">
                        <h3 className="pb-[23px] text-base font-semibold leading-[26px] xl:pb-[29px] xl:text-lg">
                            Join Our Newsletter
                        </h3>
                        <div className="pb-[20px] xl:pb-[19px]">
                            <SubscribeForm />
                        </div>
                        <p className="font-manrope text-[13px] font-medium leading-[18px] opacity-50">
                            * Will send you weekly updates for your better tool
                            management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
