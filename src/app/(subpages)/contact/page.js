import Image from "next/image";
import bg from "../../../../public/background/contactbg1.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            CONTACT THE CAPTAIN
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Welcome to my corner of the web, where creativity meets the cosmos! As a web developer with a passion for exploring the final frontier, I bring the boundless curiosity and precision of space exploration to every project I undertake.Whether you are looking to launch a new website or enhance an existing one, I am here to help you navigate the digital universe.Lets embark on this journey together—reach out via the contact form below,and lets make your web presence as stellar as the stars.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}