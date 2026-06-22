"use client";

import { motion } from "framer-motion";
import { FiShield, FiZap, FiGlobe, FiThumbsUp } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Secure Booking",
    desc: "Your transactions are fully protected and encrypted.",
  },
  {
    icon: FiZap,
    title: "Fast Processing",
    desc: "Instant ticket confirmation and booking system.",
  },
  {
    icon: FiGlobe,
    title: "Wide Coverage",
    desc: "Tickets available across all major routes in Bangladesh.",
  },
  {
    icon: FiThumbsUp,
    title: "Trusted Vendors",
    desc: "Only verified vendors can publish tickets.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 md:px-10 py-16 container mx-auto space-y-12">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Why Choose Us
        </h2>

        <p className="text-sm opacity-60">
          We provide the best travel ticket experience
        </p>
      </div>

      {/* GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition text-center space-y-3"
            >

              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <Icon className="text-xl" />
                </div>
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm opacity-60">
                {item.desc}
              </p>

            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;