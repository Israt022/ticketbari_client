'use client'

import { Link } from "@heroui/react";
import Logo from "./Logo";
import { BsStripe } from "react-icons/bs";
import { GrStripe } from "react-icons/gr";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  if(pathName.includes('dashboard')){
    return null;
  }
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 mt-10">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* COLUMN 1 */}
        <div>
          <Logo />
          <p className="mt-3 text-sm">
            Book bus, train, launch & flight tickets easily with a simple and fast booking system.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tickets">All Tickets</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@ticketbari.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Facebook: TicketBari Official</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="font-semibold mb-3">Payment Methods</h3>
          <p className="text-sm">We support secure payments:</p>
          <div className="mt-3 flex gap-2">
            <div className="px-3 py-1 flex items-center bg-white text-blue-500 font-semibold dark:bg-gray-800 border rounded text-xs">
              <GrStripe size={18} />
              Stripe
            </div>
            {/* <div className="px-3 py-1 bg-white dark:bg-gray-800 border rounded text-xs">
              Visa
            </div>
            <div className="px-3 py-1 bg-white dark:bg-gray-800 border rounded text-xs">
              MasterCard
            </div> */}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © 2025 TicketBari. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;