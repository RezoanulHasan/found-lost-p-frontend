"use client";
"use client";
import React, { useRef, FormEvent } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const contact = {
        user_name: formRef.current.user_name.value,
        user_email: formRef.current.user_email.value,
        subject: formRef.current.subject.value,
        message: formRef.current.message.value,
      };

      try {
        const response = await fetch(
          "https://aircnc-server-k3xjzddn8-rezoanulhasan.vercel.app/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully",
            icon: "success",
            confirmButtonText: "CLOSE",
          });
          formRef.current.reset();
        }
      } catch (error) {
        console.error("Error sending message:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to send message",
          icon: "error",
          confirmButtonText: "CLOSE",
        });
      }
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="name-email grid grid-cols-2 gap-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter subject of your message"
            name="subject"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn bg-teal-600 text-white">
            SEND MESSAGE <FaArrowCircleRight />
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
