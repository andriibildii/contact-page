import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import MenuIcon from "../assets/images/menuIcon.svg";
import CloseIcon from "../assets/images/closeIcon.svg";
import UserIcon from "../assets/images/userIcon.svg";
import UserIconBl from "../assets/images/userIconBl.svg";
import ShoppingIcon from "../assets/images/shoppingIcon.svg";
import ShoppingIconBl from "../assets/images/shoppingIconBl.svg";
import ArrowBlack from "../assets/images/arrowBlack.svg";
import ArrowWhite from "../assets/images/arrowWhite.svg";

export default function NavBarNew() {
    return (
        <div className="">
            <Disclosure as="nav">
                {({ open }) => (
                    <div
                        className={`${
                            open ? "bg-black" : "bg-[#FBFBFB]"
                        } fixed top-0 left-0 right-0 z-50 text-sm drop-shadow-sm lg:static lg:bg-[#F5F5F5] lg:text-base lg:drop-shadow-none `}
                    >
                        {/* FULL MENU */}
                        <div className="flex flex-row flex-wrap justify-between pl-5 pr-[23px] pt-[29px] pb-[30px] xl:px-[100px] xl:py-[41px]">
                            <div className="w-full">
                                {/* Logo & Navigation*/}
                                <div
                                    className={` ${
                                        open && "text-white lg:text-black"
                                    } flex justify-between`}
                                >
                                    {/* Logo*/}
                                    <div className="">
                                        <NavLink to="/">
                                            <h1 className="font-inter text-lg leading-[22px] xl:text-2xl xl:font-extrabold xl:leading-[29.05px]">
                                                Logo Here
                                            </h1>
                                        </NavLink>
                                    </div>
                                    {/* Logo*/}

                                    {/* Navigation*/}
                                    <div className="hidden lg:ml-6 lg:flex">
                                        <div
                                            className={`flex flex-col pt-4 max-lg:w-full md:text-base lg:flex-row lg:items-center lg:gap-[47px] lg:pt-0 xl:font-normal xl:leading-[18.75px]`}
                                        >
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "font-semibold"
                                                        : ""
                                                }
                                            >
                                                Home
                                            </NavLink>
                                            <NavLink to="#" className="flex">
                                                <span className="pr-[13px]">
                                                    Features
                                                </span>
                                                <img src={ArrowBlack} />
                                            </NavLink>
                                            <NavLink to="#">Blog</NavLink>
                                            <NavLink to="#">Shop</NavLink>
                                            <NavLink to="#">About</NavLink>
                                            <NavLink
                                                to="/contact"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "font-semibold"
                                                        : ""
                                                }
                                            >
                                                Contact
                                            </NavLink>
                                        </div>
                                        {/* USER & SHOPPING Icons*/}
                                        <div className="my-[30px] hidden justify-center gap-9 max-lg:w-full lg:my-0 lg:flex lg:pl-[60px]">
                                            <div
                                                className={`flex h-[33px] w-[31px] items-center justify-center rounded-full border lg:border-black ${
                                                    open && "bg-black"
                                                }`}
                                            >
                                                <img
                                                    src={
                                                        open
                                                            ? UserIcon
                                                            : UserIconBl
                                                    }
                                                    alt="user"
                                                    className="w-4"
                                                />
                                            </div>
                                            <div
                                                className={`flex h-[31px] w-[31px] items-center justify-center rounded-full border lg:border-black ${
                                                    open && "bg-black"
                                                }`}
                                            >
                                                <img
                                                    src={
                                                        open
                                                            ? ShoppingIcon
                                                            : ShoppingIconBl
                                                    }
                                                    alt="shopping"
                                                    className="w-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Navigation*/}

                                    {/* Mobile menu button*/}
                                    <div className="flex items-center lg:hidden">
                                        <Disclosure.Button>
                                            {open ? (
                                                <img
                                                    src={CloseIcon}
                                                    alt="close menu"
                                                />
                                            ) : (
                                                <img
                                                    src={MenuIcon}
                                                    alt="menu"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    {/* Mobile menu button*/}
                                </div>
                            </div>
                            {/* Logo & Navigation*/}
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="px-[23px] lg:hidden">
                                <div className="">
                                    <div className="flex flex-col gap-[30px] pt-4 text-white ">
                                        <Disclosure.Button as={Fragment}>
                                            <NavLink to="/">Home</NavLink>
                                        </Disclosure.Button>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="#" className="flex">
                                            <span className="pr-[10px]">
                                                Features
                                            </span>
                                            <img src={ArrowWhite} />
                                        </NavLink>
                                        <NavLink to="#">Blog</NavLink>
                                        <NavLink to="#">Shop</NavLink>
                                        <NavLink to="#">About</NavLink>
                                        <Disclosure.Button as={Fragment}>
                                            <NavLink to="/contact">
                                                Contact
                                            </NavLink>
                                        </Disclosure.Button>
                                    </div>
                                    <div className="mt-[30px] flex justify-center gap-9 pb-[30px]">
                                        <div className="flex h-[33px] w-[31px] items-center justify-center rounded-full border">
                                            <img
                                                src={UserIcon}
                                                alt="user"
                                                className="w-4"
                                            />
                                        </div>
                                        <div className="flex h-[31px] w-[31px] items-center justify-center rounded-full border">
                                            <img
                                                src={ShoppingIcon}
                                                alt="shopping"
                                                className="w-4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>
        </div>
    );
}
