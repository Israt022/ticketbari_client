import {Bell, Bookmark, Briefcase, CreditCard, Envelope, FileText, Gear, House, LayoutSideContentLeft, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";
import { Building, Ticket, User, Users } from "lucide-react";
import { getUserSession } from "@/lib/core/session";
import Logo from "../shared/Logo";
import { BiLogOut } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import LogoutButton from "../shared/LogoutButton";

const DashboardSidebar = async() => {
    const user = await getUserSession();
// console.log(user);
    const vendorNavLinks = [
        { icon: House, href: "/dashboard/vendor", label: "Vendor Profile" },
        { icon: Magnifier, href: "/dashboard/vendor/add-ticket", label: "Add Ticket" },
        { icon: Bell, href: "/dashboard/vendor/my-added-ticket", label: "My Added Tickets" },
        { icon: Briefcase, href: "/dashboard/vendor/requested_bookings", label: "Requested Bookings" },
        { icon: Envelope, href: "/dashboard/vendor/revenue", label: "Revenue Overview " },
    ]

    const userNavLinks = [
        { icon: House, href: "/dashboard/user", label: "User Profile" },
        { icon: Magnifier, href: "/dashboard/user/booking_lists", label: "My Booked Tickets" },
        { icon: Bookmark, href: "/dashboard/user/transaction_history", label: "Transaction History" },
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Admin Profile" },
        { icon: Ticket, href: "/dashboard/admin/manage_tickets", label: "Manage Tickets" },
        { icon: User, href: "/dashboard/admin/manage_users", label: "Manage Users" },
        { icon: Briefcase, href: "/dashboard/admin/advertise_ticket", label: "Advertise Tickets" },
    ];

    const navLinksMap = {
        user : userNavLinks,
        vendor : vendorNavLinks,
        admin : adminNavLinks
    }
    
    const navItems = navLinksMap[user?.role  || 'user']
   const role = user?.role;

    const navContent = (
        <div className="flex h-full flex-col">
            
            {/* Logo */}
            <Link href={'/'}>
                <div className="border-b border-purple-500/30 pb-5">
                <Logo />
                </div>
            </Link>

            {/* Navigation */}
            <nav className="mt-6 flex flex-1 flex-col gap-2">
            {navItems.map((item) => (
                <Link
                key={item.label}
                href={item.href}
                className="
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    text-sm font-medium
                    transition-all duration-200
                    hover:bg-purple-500/10
                    hover:text-purple-600
                "
                >
                <item.icon className="size-5" />
                {item.label}
                </Link>
            ))}
            </nav>

            {/* Logout Button */}
            <div className="mt-auto border-t border-default pt-4">
                <LogoutButton />
            </div>
        </div>
    );
  return (
    <>
        <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
            {navContent}
        </aside>
        <Drawer>
            <Button 
                className={"lg:hidden rounded-none py-9"} 
                variant="secondary" 
            >
                <LayoutSideContentLeft />
                Menu
            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                <Drawer.Dialog>
                    <Drawer.CloseTrigger />
                    <Drawer.Header>
                    <Drawer.Heading>
                        
                    </Drawer.Heading>
                    </Drawer.Header>
                    <Drawer.Body>
                        {navContent}
                    </Drawer.Body>
                </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    </>
  );
};

export default DashboardSidebar;