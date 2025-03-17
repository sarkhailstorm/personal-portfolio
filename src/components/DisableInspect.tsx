"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DisableInspect() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      setScreenSize(window.innerWidth < 500 ? "mobile" : "desktop");

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    };
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      screenSize === "desktop"
        ? toast.error("Inspection is not allowed!")
        : null;
    });

    const disableInspect = (e: KeyboardEvent) => {
      if (e.key === "F12") {
        e.preventDefault();
        toast("🚫 Developer Tools are disabled!");
      } else if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        toast("🔒 Viewing source code is restricted!");
      } else if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        toast("❗Saving is disabled!");
      } else if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        toast.error("Copying is not allowed!");
      } else if (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I")) {
        e.preventDefault();
        toast("🔎 Inspection is not allowed!");
      } else if (e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J")) {
        e.preventDefault();
        toast.error("Console access is disabled!");
      } else if (e.ctrlKey && e.shiftKey && (e.key === "m" || e.key === "M")) {
        e.preventDefault();
        toast.error("Responsive mode is restricted!");
      }
    };

    document.addEventListener("keydown", disableInspect);

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", disableInspect);
    };
  }, []);

  return null;
}
