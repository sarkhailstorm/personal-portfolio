"use client";
import ContactSvg from "@/components/ContactSvg";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({name: "", email: "", message: ""});
      setStatus("Submitted!");
      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
    else {
      setStatus("Failed! Try again.")
    }
  };

  return (
    <div className="flex justify-center gap-32 items-center h-screen">
      <div className="w-[30%]">
        <ContactSvg />
      </div>
      <form onSubmit={handleSubmit} className="w-[30%] flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-[#007bff] mt-5">
          Let's Connect
        </h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            className="lg:py-5"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="lg:py-5"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="resize-none"
            id="message"
            rows={6}
            name="message"
            placeholder="Drop a message..."
            onChange={handleChange}
            value={formData.message}
          />
        </div>
        <Button type="submit" className="bg-[#800020] hover:bg-[#800020] hover:scale-95 ease-in-out duration-300 text-white">
          {status || "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
