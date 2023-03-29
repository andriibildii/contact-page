import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center justify-center text-xl">
            <h1 className="pb-4">
                Hello! My name is{" "}
                <span className="font-bold">Andrii Bildii</span>
            </h1>
            <h2 className="pb-4">It is my Hard-Skills (coding) assessment </h2>
            <p className="pb-8">
                Please, click to the{" "}
                <NavLink to="/contact" className="text-blue-600">
                    Contact
                </NavLink>{" "}
                link
            </p>
            <div className="flex gap-10">
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
        </div>
    );
}
