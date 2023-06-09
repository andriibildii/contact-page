import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { AxiosError } from "axios";
import { MdDone } from "react-icons/md";
import toast from "react-hot-toast";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
    })
    .required();

interface InputSubscription {
    email: string;
}

export default function SubscribeForm() {
    let subscribeId = "Subscribe";
    // to send data to a temporary server (Post request), use the useMutation hook from the react-query library
    // by destructuring, we immediately obtain the necessary values
    const { mutate, isLoading, isSuccess, isError, error } = useMutation<
        object,
        any,
        { id: Date; email: string }
    >({
        mutationFn: (email) => {
            return axios.post("http://localhost:4000/subscriptions", email);
        },
        onSuccess: () => {
            toast.success("Subscribe has been made", {
                duration: 5000,
                id: subscribeId,
            });
        },
        onError: (error) => {
            if (error instanceof AxiosError) {
                toast.error(error?.message, {
                    duration: 5000,
                    id: subscribeId,
                });
            }
        },
    });

    // to processing forms, we use the useForm hook from the react-hook-form library
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<InputSubscription>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: InputSubscription) => {
        subscribeId = toast.loading("Sending...", { id: subscribeId });
        // initiating sending data to the server
        mutate({ id: new Date(), email: data?.email });
        // overwrite the values entered by the user in the form
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="pl-[10px] text-red-500">
                {errors.email?.message}
                {isError && error?.message}
            </p>
            <div className="flex flex-wrap items-center justify-start rounded-[25px]">
                <div
                    className={`rounded-tl-[4px] rounded-bl-[4px] bg-[#1A1A1A] py-[11px] pr-[45px] pl-[10px] text-[#616161] ${
                        isError || errors.email ? "border border-red-700" : ""
                    } h-[38px]`}
                >
                    <input
                        {...register("email")}
                        placeholder="Your email address"
                        className="flex w-[107px] items-center justify-center bg-[#1A1A1A] text-center text-[11px] font-normal italic leading-4"
                    />
                </div>

                <div
                    className={`flex h-[38px] items-center justify-center rounded-tr-[4px] rounded-br-[4px] bg-black py-[11px] px-[10px] ${
                        isSuccess && "border border-green-700"
                    }`}
                >
                    {isSuccess && <MdDone className="text-lg text-green-600" />}
                    <input
                        type="submit"
                        value={`${isSuccess ? "Done!" : "Subscribe"}`}
                        className="w-[84px] text-xs font-medium leading-[18px]"
                        disabled={isLoading}
                    />
                </div>
            </div>
        </form>
    );
}
