"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { BsBusFront } from "react-icons/bs";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const LatestTicketsSection = ({ tickets }) => {
  const router = useRouter();

  return (
    <section className="px-4 md:px-10 py-14 container mx-auto space-y-10">
        <div className="w-full flex justify-center mb-10">
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >

                {/* glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 rounded-full"></div>

                {/* main pill */}
                <div className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-md">

                <FiClock className="text-blue-500 text-xl animate-pulse" />

                <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Latest Arrivals
                </h2>

                </div>
            </motion.div>
        </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {Array.isArray(tickets?.tickets) &&
        tickets.tickets.slice(0, 8).map((ticket) => (
        // tickets?.slice(0, 8).map((ticket) => (
          <motion.div
            key={ticket._id}
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition"
          >

            {/* IMAGE */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={ticket?.image || '/travelDefault.jpg'}
                alt={ticket.ticketTitle}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay badge */}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <BsBusFront />
                {ticket.transportType}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-3">

              <h3 className="font-semibold text-sm line-clamp-1">
                {ticket.ticketTitle}
              </h3>

              <div className="flex items-center gap-2 text-xs opacity-70">
                <FiMapPin />
                {ticket.fromLocation} → {ticket.toLocation}
              </div>

              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1">
                  <FiTag /> ৳{ticket.pricePerUnit}
                </span>

                <span>Qty: {ticket.ticketQuantity}</span>
              </div>

              {/* PERKS */}
              <div className="flex flex-wrap gap-1">
                {ticket.perks?.slice(0, 2).map((perk, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800"
                  >
                    {perk}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/tickets/${ticket._id}`}>
                <button
                    onClick={() => router.push(`/tickets/${ticket._id}`)}
                    className="w-full mt-2 py-2 rounded-xl border border-blue-500 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white transition"
                >
                    View Details
                </button>
              </Link>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestTicketsSection;