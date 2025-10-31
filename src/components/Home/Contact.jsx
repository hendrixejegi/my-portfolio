import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = () => {
    emailjs
      .sendForm("service_cex169h", "template_27rz2zw", formRef.current, {
        publicKey: "EmcKFb5QvsL-TKp5G",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section className="p-8">
      <div
        id="contact"
        className="relative rounded-2xl border-1 border-neutral-700/60 p-4 before:absolute before:inset-[0_0_0_0] before:-z-10 before:rounded-xl before:bg-[url(/67443.jpg)] before:bg-cover before:grayscale before:content-[''] lg:p-8"
      >
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center">
          <div className="basis-1/2">
            <hgroup className="text-secondary space-y-4">
              <h2 className="text-5xl font-bold">
                Lets Build Something Together
              </h2>
              <p>
                Have an idea, a project, or just want to say hi? I&apos;m just a
                message away.
              </p>
            </hgroup>
          </div>
          <form
            id="contact-form"
            ref={formRef}
            action={sendEmail}
            className="border-secondary basis-1/2 space-y-4 rounded-xl border-1 bg-black/30 p-4 backdrop-blur-sm lg:p-8"
          >
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="contact@email.com"
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What's this about?"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me everything"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="border-secondary text-tertiary ml-auto block cursor-pointer rounded-lg border-1 bg-black/50 px-4 py-2 font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
