import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
<header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black/80 backdrop-blur-md shadow-md">
  <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
    {/* Mobile Navigation */}
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-4 text-lg font-medium ml-3 mt-3">
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span>Your Brand</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Features
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              About
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
        Your Brand
      </a>
      <nav className="flex items-center gap-6">
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
          About
        </a>
      </nav>
    </div>

    {/* Right Side */}
    <div className="flex items-center space-x-4">
      {/* 🌗 Dark Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDarkMode}
        className="transition-colors"
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
        )}
        <span className="sr-only">Toggle Dark Mode</span>
      </Button>

      {/* 👤 User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <span className="sr-only">User menu</span>
            <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-800 dark:text-white">U</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</header>
  );
};

export default Navbar;
