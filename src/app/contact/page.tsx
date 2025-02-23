"use client";
import ContactSvg from "@/components/ContactSvg";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const ContactPage = () => {
  return (
    <div className="flex justify-center gap-40 items-center h-screen">
      <div className="w-[30%]">
        <ContactSvg />
      </div>
      <div className="w-[30%] flex flex-col gap-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Username" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea className="resize-none" id="message" rows={6} placeholder="Drop a message..."/>
        </div>
          <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ContactPage;
