"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

type ModeToggleProps = {
  onClick?: () => void;
};

export const ModeToggle: React.FC<ModeToggleProps> = ({ onClick }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    onClick?.(); // call optional prop
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="dark:text-white w-[39px] h-[39px] rounded-full bg-[#09090B] outline outline-1 outline-[#2c2c2c] hover:text-white hover:bg-[#1b1b21] ease-in-out duration-300"
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )
      ) : (
        <div className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
