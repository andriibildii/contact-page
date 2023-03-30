import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import MainHero from "../assets/images/Mainhero.svg";

export default function Home() {
    return (
        <div className="relative flex h-screen flex-col items-center justify-center text-base font-medium lg:text-xl lg:font-semibold ">
            <h1 className="z-30 pb-4 text-center">
                Hello! My name is{" "}
                <span className="font-bold">Andrii Bildii</span>
            </h1>
            <h2 className="z-30 pb-4 text-center">
                This is my implementation of the technical task for the position
                of React Frontend Engineer{" "}
            </h2>
            <p className="z-30 pb-8 text-center">
                Please, click to the{" "}
                <NavLink
                    to="/contact"
                    className="mx-1 rounded-md bg-black px-4 py-2 text-white drop-shadow-lg hover:border hover:bg-[#FBFBFB] hover:text-black"
                >
                    Contact
                </NavLink>{" "}
                link
            </p>
            <div className="z-30 py-5 font-medium">
                <p>My social links:</p>
            </div>
            <div className="z-30 mb-5 flex gap-10">
                <a
                    href="https://github.com/andriibildii"
                    className="flex h-10 w-10 items-center justify-center gap-8 rounded-full border border-black bg-black text-white hover:bg-[#333]"
                    target="blank"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/andriibildii"
                    className="flex h-10 w-10 items-center justify-center gap-8 rounded-full bg-black text-white hover:bg-[#0077B5]"
                    target="blank"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/andrii.bildii"
                    className="flex h-10 w-10 items-center justify-center gap-8 rounded-full bg-black text-white hover:bg-[#fa7e1e]"
                    target="blank"
                >
                    <FaInstagram />
                </a>
            </div>
            <img
                src={MainHero}
                alt=""
                className="h-90 absolute right-[40%] bottom-[25%] z-0 overflow-hidden"
            />
        </div>
    );
}
