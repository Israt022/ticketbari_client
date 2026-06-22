"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import UserTicketCard from "../shared/UserTicketCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const AdvertisementSection = ({ tickets }) => {
  return (
    <section className="w-full py-10 px-4 md:px-10">

      {/* FLOATING TITLE (SAFE WRAPPER) */}
      <div className="flex justify-center mb-10">

        <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >

        {/* glow background */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-30 rounded-full"></div>

        {/* main card */}
        <div className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-md">
          <FiStar className="text-purple-500 text-xl animate-pulse" />

          <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Featured Advertisements
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
      >
        {tickets?.map((ticket) => (
          <motion.div
            key={ticket._id}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <UserTicketCard ticket={ticket} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default AdvertisementSection;