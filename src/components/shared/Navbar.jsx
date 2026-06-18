'use client';

import { useEffect, useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { Sun, Moon } from "@gravity-ui/icons";
import { GiBus } from "react-icons/gi";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [theme, setTheme] = useState("light");
    const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = true;

  const user = {
    name: "Israt",
    avatar: "https://i.pravatar.cc/40"
  };

  // Theme apply
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenProfile(false);
    };

    if (openProfile) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [openProfile]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled 
        ? 
        "bg-white/70 dark:text-black dark:bg-slate-900 backdrop-blur-md shadow-sm py-2" 
        : "bg-slate-50 dark:text-black dark:bg-slate-900  py-1"
    }`}>
                {/* <nav className="sticky fixed top-0 z-40 w-full border-b bg-white/70 dark:bg-black/70 backdrop-blur"> */}

        <header className="flex h-16 items-center justify-between px-6">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <button
              className="md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              ☰
            </button>

            {/* LOGO */}
            <Logo />

            </div>

          {/* CENTER */}
          <ul className="hidden md:flex items-center gap-6 font-medium md:flex-row flex-col">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tickets">All Tickets</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* THEME TOGGLE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? (
                <Moon width={18} height={18} />
              ) : (
                <Sun width={18} height={18} />
              )}
            </button>

            {/* LOGIN / USER */}
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                    <Button size="sm">
                        Login
                    </Button>
                </Link>
                <Link href="/register">
                    <Button size="sm">
                        Register
                    </Button>
                </Link>
              </>
            ) : (
              <div className="relative">

                {/* PROFILE BUTTON */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenProfile(!openProfile);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Image
                    src="/user.jpg"
                    width={32}
                    height={32}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <span className="hidden md:block dark:text-white">{user.name}</span>
                </div>

                {/* DROPDOWN */}
                {openProfile && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border shadow rounded z-50">

                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      My Profile
                    </Link>

                    <Link>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500">
                            Logout
                        </button>
                    </Link>

                  </div>
                )}

              </div>
            )}

          </div>
        </header>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col border-t p-4 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/tickets">All Tickets</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        )}

        </nav>
  );
};

export default Navbar;