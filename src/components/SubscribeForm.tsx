import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { MdDone } from "react-icons/md";

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
    const { mutate, isLoading, isSuccess, isError, error } = useMutation<
        object,
        any,
        { id: Date; email: string }
    >({
        mutationFn: (email) => {
            return axios.post("http://localhost:4000/subscriptions", email);
        },
    });

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<InputSubscription>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: InputSubscription) => {
        mutate({ id: new Date(), email: data?.email });
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="pl-[10px] text-red-500">
                    {errors.email?.message}
                    {isError && error?.message}
                </p>
                <div className="flex flex-wrap items-center justify-start rounded-[25px]">
                    <div className="h-[39px] rounded-tl-[4px] rounded-bl-[4px] bg-[#1A1A1A] py-[11px] pr-[45px] pl-[10px] text-[#616161]">
                        <input
                            {...register("email")}
                            placeholder="Your email address"
                            className="w-[107px] bg-[#1A1A1A] text-[11px] font-normal italic leading-4"
                        />
                    </div>

                    <div className="flex h-[39px] items-center justify-center rounded-tr-[4px] rounded-br-[4px] bg-black py-[11px] px-[10px]">
                        {isSuccess && (
                            <MdDone className="text-lg text-green-600" />
                        )}
                        <input
                            type="submit"
                            value={`${isSuccess ? "Done!" : "Subscribe"}`}
                            className="w-[84px] text-xs font-medium leading-[18px]"
                            disabled={isLoading}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
