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
        if (screenSize && screenSize < 1024) {
            setActiveMenu(false);
            setSmallScreen(true);
        } else {
            setActiveMenu(true);
            setSmallScreen(false);
        }
    }, [screenSize]);

    return (
        <div
            className={`h-200 ${smallScreen ? "border-b" : "bg-[#F5F5F5]"} ${
                smallScreen && activeMenu ? "bg-black text-white" : ""
            } text-sm lg:text-base`}
        >
            <div className="flex flex-row flex-wrap justify-between pl-5 pr-[23px] pt-[29px] pb-[30px] xl:px-[100px] xl:py-[41px]">
                <div className="w-full lg:flex">
                    <div className="flex w-full flex-wrap items-center justify-between lg:flex-nowrap">
                        <nav className="flex w-full justify-between">
                            <NavLink to="/">
                                <h1 className="font-inter text-lg leading-[22px] xl:text-2xl xl:font-extrabold xl:leading-[29.05px]">
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
                                            <img
                                                src={CloseIcon}
                                                alt="close menu"
                                            />
                                        </button>
                                    )}
                                </div>
                            )}
                        </nav>

                        {activeMenu && (
                            <>
                                <div
                                    className={`flex flex-col gap-[30px] pt-4 max-lg:w-full lg:flex-row lg:items-center lg:gap-[47px] lg:pt-0 xl:text-base xl:font-normal xl:leading-[18.75px]`}
                                >
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="#">Features</NavLink>
                                    <NavLink to="#">Blog</NavLink>
                                    <NavLink to="#">Shop</NavLink>
                                    <NavLink to="#">About</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>

                                    {/* After developing the rest of the pages, must be specified the path that leads to these pages */}
                                </div>
                                <div className="my-[30px] flex justify-center gap-9 max-lg:w-full lg:my-0 lg:pl-[60px]">
                                    <div className="flex h-[33px] w-[31px] items-center justify-center rounded-full border lg:border-black">
                                        <img
                                            src={
                                                smallScreen
                                                    ? UserIcon
                                                    : UserIconBl
                                            }
                                            alt="user"
                                            className="w-4"
                                        />
                                    </div>
                                    <div className="flex h-[31px] w-[31px] items-center justify-center rounded-full border lg:border-black">
                                        <img
                                            src={
                                                smallScreen
                                                    ? ShoppingIcon
                                                    : ShoppingIconBl
                                            }
                                            alt="shopping"
                                            className="w-4"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
