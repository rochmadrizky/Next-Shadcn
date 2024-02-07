"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconArrowLeft, IconUser } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function DarkMode() {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return "";

  return (
    <Button
      size="icon"
      className="mode-toggle flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-500 w-6 h-6" />
      ) : (
        <Moon className="text-gray-600 w-6 h-6" />
      )}
    </Button>
  );
}
