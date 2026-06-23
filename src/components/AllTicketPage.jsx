"use client";

// import { motion } from "framer-motion";
import UserTicketCard from "./shared/UserTicketCard";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.35 },
//   },
// };

const AllTicketPage = ({tickets}) => {
    // console.log(tickets.tickets);
    return (
        <section className="w-full py-10 px-4 md:px-10">
            {/* GRID */}
            {/* <motion.div */}
            <div
                // variants={container}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
            >
                {tickets?.map((ticket) => (
                // <motion.div
                <div
                    key={ticket._id}
                    // variants={item}
                    // whileHover={{ y: -5 }}
                >
                    <UserTicketCard ticket={ticket} />
                </div>
                // </motion.div>
                ))}
            </div>
            {/* </motion.div> */}

        </section>
    );
};

export default AllTicketPage;