
import { motion } from "framer-motion";
import UserTicketCard from "@/components/shared/UserTicketCard";
import { getTickets } from "@/lib/api/ticket";
import AllTicketPage from "@/components/AllTicketPage";
import TicketControls from "@/components/TicketControls";
import TicketPagination from "@/components/TicketPagination";

const TicketsPage = async() => {
    const tickets = await getTickets();
    return (
        <div>
            {/* filters */}
            <TicketControls />

            {/* all cards */}
            <AllTicketPage tickets={tickets} />

            {/* pagination */}
            <TicketPagination />
        </div>
    );
};

export default TicketsPage;