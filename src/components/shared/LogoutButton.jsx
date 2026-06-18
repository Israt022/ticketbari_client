'use client';

import { authClient } from "@/lib/auth-client";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/auth/login");
    };

    return (
        <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-500/10"
            >
            <BiLogOut className="size-5" />
            Logout
        </button>
    );
};

export default LogoutButton;