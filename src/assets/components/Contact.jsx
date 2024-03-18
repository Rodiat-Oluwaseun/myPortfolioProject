import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();
  // logic for form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f412m9o", "template_pvlv12a", form.current, {
        publicKey: "5rgXB8WcpgSZPjrA0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitted(true);

    // Reset submission status after a certain period of time
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="w-full h-screen bg-[] flex justify-center item-center p-4">
      {isSubmitted && (
        <p
          className="Success flex justify-center item-center "
          style={{ color: "green" }}
        >
          Message sent
        </p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-serif inline border-b-4 border-[#E5E7EA] text-dark-100">
            {" "}
            Contact{" "}
          </p>
          <p className="py-4 text-black">
            Submit the form below or send an email - rolayemi@outlook.com
          </p>
        </div>

        <input
          className="bg-[#E5E7EA] p-2"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="bg-[#E5E7EA] p-2 my-4"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="message"
          className="bg-[#E5E7EA] p-2"
          rows="10"
        ></textarea>
        <button className="text-black border-2 hover:bg-[#E5E7EA] hover:border-[#E5E7EA] px-4 py-3  mx-auto  rounded my-8 flex items-center ">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
