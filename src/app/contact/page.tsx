"use client";
import ContactSvg from "@/components/ContactSvg";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { LuSend } from "react-icons/lu";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("");
      setIsLoading(false);
      toast.success("Email sent successfully!", { duration: 5000 });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send email!", { duration: 5000 });
    }
  };

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex flex-col md:gap-4 gap-20 justify-center items-center h-screen"
    >
      <motion.h1
        className="font-bold text-3xl dark:text-white text-gray-800 md:mt-20 mt-28 md:block hidden"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 3,
          delay: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 8,
          mass: 1,
        }}
      >
        Got something cool in mind? Let&apos;s connect!
      </motion.h1>
      <div className="md:hidden flex flex-col gap-4 mt-6">
        <motion.h1
          className="text-[1.8rem] text-center font-bold dark:text-white text-gray-800"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 8,
            mass: 1,
          }}
        >
          {" "}
          Got something in mind?
        </motion.h1>
        <motion.div
          className="text-center"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 3,
            type: "spring",
            stiffness: 100,
            damping: 8,
            mass: 1,
          }}
        >
          <motion.span className="text-2xl font-bold dark:text-blue-400 text-indigo-800">
            Let&apos;s connect!
          </motion.span>
        </motion.div>
      </div>

      <div className="flex gap-4 justify-evenly items-center mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-[30%] w-[90%] md:gap-4 gap-6"
        >
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="text-[16px] dark:text-white text-gray-800">
              Name
            </Label>
            <Input
              className="lg:py-6 lg:border-2 py-6 dark:text-white dark:focus:border-[#007bff] dark:border-[#27272a] border-gray-400 focus:border-indigo-800 dark:caret-white caret-indigo-800 text-gray-800 focus-visible:ring-0"
              required
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-[16px] dark:text-white text-gray-800">
              Email
            </Label>
            <Input
              className="lg:py-6 lg:border-2 py-6 dark:text-white dark:focus:border-[#007bff] dark:border-[#27272a] border-gray-400 focus:border-indigo-800 dark:caret-white caret-indigo-800 text-gray-800 focus-visible:ring-0"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-[16px] dark:text-white text-gray-800">
              Message
            </Label>
            <Textarea
              className="resize-none lg:border-2 dark:text-white dark:focus:border-[#007bff] dark:border-[#27272a] border-gray-400 focus:border-indigo-800 dark:caret-white caret-indigo-800 text-gray-800 focus-visible:ring-0"
              required
              id="message"
              rows={6}
              name="message"
              placeholder="Drop a message..."
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <Button
            type="submit"
            className={`dark:hover:bg-[#2173cb] hover:bg-indigo-600 hover:scale-95 ease-in-out transition-transform duration-300 text-white ${
              isLoading
                ? "dark:bg-[#093360] bg-[#3d47b3] dark:text-[#949494] text-[#b3b2b2] dark:hover:bg-[#093360] hover:bg-[#3d47b3] hover:scale-100"
                : "dark:bg-[#0262c9] bg-indigo-800"
            }`}
          >
            <LuSend />
            {isLoading ? status : "Send"}
          </Button>
        </form>
        <div className="mt-8 w-[27%] hidden md:flex">
          <ContactSvg />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
