import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div className="bg-[#F5F5F5]">
            {/* CONTACT HEADER */}
            <div className="mb-5 flex w-full flex-col items-center justify-center pt-[14px]">
                <h2 className="text-2xl font-bold leading-9">Contact Us</h2>
                <div className="text-center text-sm font-medium leading-[21px] text-[#717171]">
                    <p className="pt-[10px]">Any questions or remarks?</p>
                    <p>Just write us a message!</p>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div className="pb-[50px]">
                <ContactForm />
            </div>
        </div>
    );
}
