"use client";
import ContactSvg from "@/components/ContactSvg";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion";


const ContactPage = () => {
  return (
    <div className="flex justify-center gap-40 items-center h-screen">
      <div className="w-[30%]">
        <ContactSvg />
      </div>
      <div className="w-[30%] flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-blue-600 mt-5">Let's Connect</h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input className="text-xl" type="text" id="username" name="username" placeholder="Username" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea className="resize-none" id="message" rows={6} name="message" placeholder="Drop a message..."/>
        </div>
          <Button className="bg-[#800020] text-white">Submit</Button>
      </div>
    </div>
  );
};

export default ContactPage;
