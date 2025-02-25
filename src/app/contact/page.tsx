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
    <div className="flex justify-center gap-32 items-center h-screen">
      <motion.form
        onSubmit={handleSubmit}
        className="w-[30%] flex flex-col gap-4"
        initial={{ opacity: 0, x: -100, y: 200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <motion.h1
          className="font-bold text-2xl text-[#007bff] mt-8 mb-2 tracking-widest"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
        Let's Connect
        </motion.h1>
        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className="text-[16px]">
            Name
          </Label>
          <Input
            className="lg:py-5 lg:border-2 focus:border-[#007bff] focus-visible:ring-0"
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
          <Label htmlFor="email" className="text-[16px]">
            Email
          </Label>
          <Input
            className="lg:py-5 lg:border-2 focus:border-[#007bff] focus-visible:ring-0"
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
          <Label htmlFor="message" className="text-[16px]">
            Message
          </Label>
          <Textarea
            className="resize-none lg:border-2 focus:border-[#007bff] focus-visible:ring-0"
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
          className={`bg-[#0262c9] hover:bg-[#2173cb] hover:scale-95 ease-in-out transition-transform duration-300 text-white ${
            isLoading
              ? "bg-[#093360] text-[#949494] hover:bg-[#093360] hover:scale-100"
              : "bg-[#0262c9]"
          }`}
        >
          {isLoading ? status : "Send"}
        </Button>
      </motion.form>
      <motion.div
        className="w-[30%] mt-8"
        initial={{ opacity: 0, x: 200, y: 200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <ContactSvg />
      </motion.div>
    </div>
  );
};

export default ContactPage;
