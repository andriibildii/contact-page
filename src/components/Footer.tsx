import { NavLink } from "react-router-dom";
import PhoneImage from "../assets/images/phoneIcon.svg";
import MailIcon from "../assets/images/mailIcon.svg";
import LocationIcon from "../assets/images/locationIcon.svg";
import SubscribeForm from "./SubscribeForm";
export default function Footer() {
    return (
        <div className="bg-black px-5 pb-[49px] text-white">
            <div className="flex items-center justify-center pt-[19px] pb-[20px]">
                <h2 className="text-4xl font-extrabold">Logo Here</h2>
            </div>
            <div className="mb-[30px] border-b border-white" />
            <div className="flex flex-wrap justify-between gap-x-5 gap-y-[30px] text-xs font-normal leading-[18px]">
                <div>
                    <h3 className="text-base font-semibold leading-[26px]">
                        Reach us
                    </h3>
                    <div className="mt-[15px]">
                        <img
                            src={PhoneImage}
                            alt="phone"
                            className="mb-[12px]"
                        />
                        <a href="tell:+1012 3456 789">
                            <p>+1012 3456 789</p>
                        </a>
                    </div>
                    <div className="mt-[15px]">
                        <img src={MailIcon} alt="mail" className="mb-[12px]" />
                        <a href="mailto:demo@gmail.com">
                            <p>demo@gmail.com</p>
                        </a>
                    </div>
                    <div className="mt-[15px]">
                        <img
                            src={LocationIcon}
                            alt="location"
                            className="mb-[12px]"
                        />
                        <p>
                            132 Dartmouth Street <br /> Boston, Massachusetts{" "}
                            <br /> 02156 United States
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-base font-semibold leading-[26px]">
                        Company
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="mt-5">
                            About
                        </NavLink>
                        <NavLink to="#" className="mt-5">
                            Contact
                        </NavLink>
                        <NavLink to="#" className="mt-5">
                            Blog
                        </NavLink>
                    </div>
                </div>

                <div>
                    <h3 className="text-base font-semibold leading-[26px]">
                        Legal
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="mt-5">
                            Privacy Policy
                        </NavLink>
                        <NavLink to="#" className="mt-5">
                            Terms & Services
                        </NavLink>
                        <NavLink to="#" className="mt-5">
                            Terms of Use
                        </NavLink>
                        <NavLink to="#" className="mt-5">
                            Refund Policy
                        </NavLink>
                    </div>
                </div>

                <div>
                    <h3 className="text-base font-semibold leading-[26px]">
                        Quick Links
                    </h3>
                    <div className="flex flex-col">
                        <NavLink to="#" className="pt-5">
                            Techlabz Keybox
                        </NavLink>
                        <NavLink to="#" className="pt-5">
                            Downloads
                        </NavLink>
                        <NavLink to="#" className="pt-5">
                            Forum
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="mt-10 rounded-[5px] bg-[#0D0D0D]">
                <div className="p-[14px] pt-[17px] pb-[14px]">
                    <h3 className="mb-[23px] text-base font-semibold leading-[26px]">
                        Join Our Newsletter
                    </h3>
                    <div className="mb-[20px] ">
                        <SubscribeForm />
                    </div>
                    <p className="text-[13px] font-medium leading-[18px] opacity-50">
                        * Will send you weekly updates for your better tool
                        management.
                    </p>
                </div>
            </div>
        </div>
    );
}
