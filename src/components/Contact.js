import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ij80mus",
        "template_jg7lq0s",
        form.current,
        "Te2UxaDaAdwHwZLBc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="container flex flex-col align-middle justify-center mx-auto"
    >
      <section className=" bg-white">
        <div className="py-8 lg:py-16 mx-auto px-4 max-w-screen-md ">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-black">
            CONTACT US
          </h2>
          <p className="mb-8 lg:mb-16 font-medium text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-1xl font-medium  text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-1xl font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-1xl font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="py-3 px-5 text-sm font-medium text-center text-[#ffab2d] rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#0E303D]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
