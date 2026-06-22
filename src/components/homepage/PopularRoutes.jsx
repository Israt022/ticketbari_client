"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiTrendingUp } from "react-icons/fi";

const routes = [
  { from: "Dhaka", to: "Chittagong", count: 120 },
  { from: "Dhaka", to: "Sylhet", count: 98 },
  { from: "Rajshahi", to: "Dhaka", count: 75 },
  { from: "Khulna", to: "Barisal", count: 60 },
];

const PopularRoutes = () => {
  return (
    <section className="px-4 md:px-10 py-14 container mx-auto space-y-10">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <FiTrendingUp className="text-purple-500 text-xl" />
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Popular Routes
          </h2>
        </div>

        <p className="text-sm opacity-60">
          Most frequently traveled routes by users
        </p>
      </div>

      {/* GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {routes.map((route, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex items-center gap-2 text-sm opacity-70">
              <FiMapPin />
              Route
            </div>

            <h3 className="mt-2 font-semibold text-lg">
              {route.from} → {route.to}
            </h3>

            <p className="text-sm mt-2 opacity-60">
              {route.count}+ bookings
            </p>

            <div className="mt-4 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${route.count / 1.5}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularRoutes;