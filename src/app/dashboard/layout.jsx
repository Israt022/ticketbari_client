import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getUserSession } from "@/lib/core/session";

const DashboardLayout = async({ children }) => {
    const user = await getUserSession();
    // console.log('from layout', user);
    return (
        <div className="flex h-screen bg-background">
            <div className="flex flex-1 overflow-hidden">
                <DashboardSidebar user={user} />
                <div className=" flex-1 overflow-y-auto">
                    <div className="border-b px-5 py-3">
                        <DashboardNavbar user={user} /> 
                    </div>
                    <main className="p-5">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;