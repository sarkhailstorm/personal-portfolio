"use client";
import React from "react";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoading ? (
    <div className="bg-black inset-0 z-50 fixed flex items-center justify-center">
      <HashLoader color="#007bff" size={100} />
    </div>
  ) : null;
};

export default Loading;
