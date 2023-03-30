import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div className="mt-[83px] bg-[#F5F5F5] lg:mt-0">
            {/* CONTACT HEADER */}
            <div className="mb-[25px] flex w-full flex-col items-center justify-center pt-[14px] xl:mb-[25px]">
                <h2 className="text-2xl font-bold leading-9 xl:text-[40px] xl:leading-[60px]">
                    Contact Us
                </h2>
                <div className="flex flex-col items-center justify-center pt-[10px] text-sm font-medium leading-[21px] text-[#717171] xl:flex-row xl:pb-[50px]">
                    <p className="">Any questions or remarks?</p>
                    <p>Just write us a message!</p>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div className="flex justify-center pb-[50px]">
                <ContactForm />
            </div>
        </div>
    );
}
