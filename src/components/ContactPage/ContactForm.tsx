import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import SendLetterIcon from "../../assets/images/sendLetterIcon.svg";
import ContactInfo from "./ContactInfo";
import { MdDone } from "react-icons/md";

const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/;

const schema = yup
    .object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
        phoneNumber: yup
            .string()
            .required("Phone number is required")
            .matches(phoneRegExp, "Phone number is not valid"),
        message: yup.string(),
    })
    .required();

interface InputMessage {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string[];
    message: string;
}

export default function ContactForm() {
    const { mutate, isLoading, isSuccess, isError, error } = useMutation<
        object,
        any,
        { id: Date; data: InputMessage }
    >({
        mutationFn: (message) => {
            return axios.post("http://localhost:4000/messages", message);
        },
    });

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<InputMessage>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: InputMessage) => {
        mutate({
            id: new Date(),
            data: data,
        });
        reset();
    };

    const subject = ["subject1", "subject2", "subject3", "subject4"];

    return (
        <div className="mx-5 flex flex-wrap bg-white md:flex-nowrap">
            <div className="mx-[5px] mb-[30px] mt-[5px] w-full md:m-[10px] md:w-1/2">
                <ContactInfo />
            </div>

            <div className="w-full px-[21px] md:w-1/2 md:p-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap gap-x-1 xl:gap-x-[39px]">
                        <div className="flex w-full flex-col pb-5 text-xs font-medium leading-[20px] text-gray-500 focus-within:text-black xl:w-[278px]">
                            <label className="leading-5">First Name</label>
                            <input
                                {...register("firstName")}
                                type="text"
                                className={`appearance-none border-0 border-b bg-transparent px-0  pt-1 pb-[11px] text-sm text-[#8D8D8D] focus:border-b-2 focus:border-black focus:pt-[5px] focus:pb-[10px] focus:text-black focus:outline-none focus:ring-0 ${
                                    errors.firstName &&
                                    "border-red-600 focus:border-red-600"
                                }`}
                            />
                            {errors.firstName && (
                                <span className="text-red-500">
                                    {errors.firstName?.message}
                                </span>
                            )}
                        </div>

                        <div className="flex w-full flex-col pb-5 text-xs font-medium leading-[20px] text-gray-500 focus-within:text-black xl:w-[278px]">
                            <label>Last Name</label>
                            <input
                                {...register("lastName")}
                                type="text"
                                className={`appearance-none border-0 border-b bg-transparent px-0  pt-1 pb-[11px] text-sm text-[#8D8D8D] focus:border-b-2 focus:border-black focus:text-black focus:outline-none focus:ring-0 ${
                                    errors.lastName &&
                                    "border-red-600 focus:border-red-600"
                                }`}
                            />
                            {errors.lastName && (
                                <span className="text-red-500">
                                    {errors.lastName?.message}
                                </span>
                            )}
                        </div>

                        <div className="flex w-full flex-col pb-5 text-xs font-medium leading-[20px] text-gray-500 focus-within:text-black xl:w-[278px]">
                            <label>Email</label>
                            <input
                                {...register("email")}
                                type="tel"
                                className={`appearance-none border-0 border-b bg-transparent px-0  pt-1 pb-[11px] text-sm text-[#8D8D8D] focus:border-b-2 focus:border-black focus:text-black focus:outline-none focus:ring-0 ${
                                    errors.email &&
                                    "border-red-600 focus:border-red-600"
                                }`}
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>

                        <div className="flex w-full flex-col pb-[25px] text-xs font-medium leading-[20px] text-gray-500 focus-within:text-black xl:w-[278px]">
                            <label>Phone Number</label>
                            <input
                                {...register("phoneNumber")}
                                type="phoneNumber"
                                className={`appearance-none border-0 border-b border-black bg-transparent  px-0 pt-1 pb-[11px] text-sm text-[#8D8D8D] focus:border-b-2 focus:border-black focus:text-black focus:outline-none focus:ring-0 ${
                                    errors.lastName &&
                                    "border-red-600 focus:border-red-600"
                                }`}
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-500">
                                    {errors.phoneNumber?.message}
                                </span>
                            )}
                        </div>

                        <div className="flex w-full flex-col ">
                            <label className="text-sm font-semibold">
                                Select Subject?
                            </label>
                            <div className="flex flex-wrap justify-center gap-y-[14px] gap-x-5 pt-[10px]">
                                {subject.map((value) => (
                                    <div
                                        key={value}
                                        className="flex items-center gap-[10px] text-xs font-normal leading-[20px]"
                                    >
                                        <input
                                            className="flex h-4 w-4 flex-col rounded-full border-none bg-[#E0E0E0] text-black focus:ring-white"
                                            type="checkbox"
                                            value={value}
                                            {...register("subject")}
                                        />

                                        <p>General Inquiry</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex w-full flex-col pt-[35px] pb-[25px]">
                            <div className="group relative z-0 w-full">
                                <input
                                    {...register("message")}
                                    type="text"
                                    name="message"
                                    id="message"
                                    className="peer block w-full appearance-none border-0 border-b bg-transparent px-0 pt-1 pb-[11px] text-sm text-[#8D8D8D] focus:border-b-2 focus:border-black focus:text-black focus:outline-none focus:ring-0 dark:border-gray-600"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-sm
									peer-focus:font-medium
									peer-focus:text-black"
                                >
                                    Write your message..
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-center gap-[6.4px]">
                                <input
                                    type="submit"
                                    value={`${
                                        isSuccess ? "Done!" : "Send Message"
                                    }`}
                                    className={`h-[38.21px] w-[278px] rounded-[3.20093px] bg-black text-[12.95px] font-medium leading-[19.42px] text-white shadow-md drop-shadow-[0_0_8.96262px_rgba(0,0,0,0.12)] ${
                                        isSuccess && "shadow-green-600"
                                    }`}
                                    disabled={isLoading}
                                />
                                {isSuccess && (
                                    <MdDone className="text-lg text-green-600" />
                                )}
                                {isError && (
                                    <span className="font-medium text-red-500">
                                        {error?.message}
                                    </span>
                                )}
                            </div>

                            <div className="relative bottom-[15px] left-[55.43px] h-[52.15px] w-[104.4px] rotate-[1.75deg] pb-[50px]">
                                <img src={SendLetterIcon} alt="ellipse one" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
