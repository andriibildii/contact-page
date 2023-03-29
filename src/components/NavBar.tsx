import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../assets/images/menuIcon.svg";
import CloseIcon from "../assets/images/closeIcon.svg";
import UserIcon from "../assets/images/userIcon.svg";
import UserIconBl from "../assets/images/userIconBl.svg";
import ShoppingIcon from "../assets/images/shoppingIcon.svg";
import ShoppingIconBl from "../assets/images/shoppingIconBl.svg";

export default function NavBar() {
    const [activeMenu, setActiveMenu] = useState(true);
    const [smallScreen, setSmallScreen] = useState(false);

    const [screenSize, setScreenSize] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenSize && screenSize < 768) {
            setActiveMenu(false);
            setSmallScreen(true);
        } else {
            setActiveMenu(true);
            setSmallScreen(false);
        }
    }, [screenSize]);

    return (
        <nav
            className={`h-200 border-b px-5 ${
                smallScreen && activeMenu ? "bg-black text-white" : ""
            } text-sm md:text-base`}
        >
            <div className="flex w-full flex-wrap justify-between py-7">
                <div className="w-full md:flex">
                    <div className="flex w-full items-center justify-between">
                        <NavLink to="/">
                            <h1 className="font-inter text-lg leading-[22px]">
                                Logo Here
                            </h1>
                        </NavLink>
                        {smallScreen && (
                            <div>
                                {!activeMenu ? (
                                    <button
                                        onClick={() =>
                                            setActiveMenu(!activeMenu)
                                        }
                                        className="transition duration-300 ease-out"
                                    >
                                        <img src={MenuIcon} alt="menu" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            setActiveMenu(!activeMenu)
                                        }
                                        className="transition duration-300 ease-out"
                                    >
                                        <img src={CloseIcon} alt="close menu" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {activeMenu && (
                        <div
                            className={`${
                                activeMenu && smallScreen ? "" : ""
                            } flex flex-col gap-8 pt-4 ease-out md:flex-row md:items-center md:pt-0 md:transition-transform md:duration-1000`}
                        >
                            {/* After developing the rest of the pages, must be specified the path that leads to these pages */}
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="#">Features</NavLink>
                            <NavLink to="#">Blog</NavLink>
                            <NavLink to="#">Shop</NavLink>
                            <NavLink to="#">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <div className="my-[30px] flex justify-center gap-9 md:my-0">
                                <div className="flex h-[33px] w-[33px] items-center justify-center rounded-full border md:border-black">
                                    <img
                                        src={
                                            smallScreen ? UserIcon : UserIconBl
                                        }
                                        alt="user"
                                        className=""
                                    />
                                </div>
                                <div className=" flex h-[33px] w-[33px] items-center justify-center rounded-full border md:border-black">
                                    <img
                                        src={
                                            smallScreen
                                                ? ShoppingIcon
                                                : ShoppingIconBl
                                        }
                                        alt="shopping"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
