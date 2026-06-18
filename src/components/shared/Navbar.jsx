'use client';

import { useEffect, useState } from "react";
import { Link, Button, Label, Dropdown, Avatar } from "@heroui/react";
import Image from "next/image";
import { Sun, Moon } from "@gravity-ui/icons";
import { GiBus } from "react-icons/gi";
import Logo from "./Logo";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import ShareButton from "./ShareButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [theme, setTheme] = useState("light");
    const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = true;

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathName = usePathname();
  // console.log(pathName);
  
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

  if(pathName.includes('dashboard')){
    return null;
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSignOut = async () => {
    await authClient.signOut();
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
              className="md:hidden dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              ☰
            </button>

            {/* LOGO */}
            <Link href="/">
              <Logo />
            </Link>

            </div>

          {/* CENTER */}
          <ul className="hidden md:flex items-center gap-6 font-medium md:flex-row flex-col">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tickets">All Tickets</Link></li>
            <li><Link href={`/dashboard/${user?.role}`}>Dashboard</Link></li>
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
            {!user && (
              <div className="hidden lg:block lg:flex lg:gap-3">
                <Link href="/auth/login">
                    <ShareButton btn={"Login"}/>
                </Link>
                <Link href="auth//registration">
                    <ShareButton btn={"Register"} />
                </Link>
              </div>
            ) } 
            {user && (
            <div className="hidden items-center gap-4 md:flex">
              <Dropdown>
                <Dropdown.Trigger className="rounded-full flex gap-2 items-center">
                  <Avatar size="sm" aria-label="Menu">
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt="John Doe"
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <p className="dark:text-white">{user?.name}</p>
                </Dropdown.Trigger>
                <Dropdown.Popover>
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm dark:text-white leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >

                    <Dropdown.Item id="copy-link" textValue="Copy link">
                      <CgProfile />
                      <Link href={`/dashboard/${user?.role}`}>
                        <Label>Profile</Label>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                      onClick={handleSignOut}
                    >
                      <BiLogOut />
                      <Label>Logout</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          )}
          </div>
        </header>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col border-t p-4 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/tickets">All Tickets</Link>
            <Link href={`/dashboard/${user?.role}`}>Dashboard</Link>
            {
              user && (
                <div className="flex flex-col justify-center gap-2">
                    <p className="dark:text-white">{user?.name}</p>
                    <Link href="/auth/login"
                      onClick={handleSignOut}
                    >
                      <ShareButton btn={"Logout"} />
                    </Link>
                </div>
              )
            }
            {
              !user && (
                <div className="flex gap-3">
                <Link href="/auth/login">
                    <ShareButton btn={"Login"}/>
                </Link>
                <Link href="/auth/registration">
                    <ShareButton btn={"Register"}
                    />
                </Link>
              </div>
              )
            }
          </div>
        )}

        </nav>
  );
};

export default Navbar;