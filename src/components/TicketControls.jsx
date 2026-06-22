"use client";

import { FiSearch, FiFilter, FiMapPin } from "react-icons/fi";
import { ArrowDown } from "lucide-react";

const TicketControls = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 mb-10">

      {/* MAIN WRAPPER CARD */}
      <div className="p-4 md:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 
                      bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl 
                      shadow-sm hover:shadow-md transition space-y-4">

        {/* TOP ROW: FROM / TO / FILTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* FROM */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl 
                          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
                          focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FiMapPin className="text-blue-500" />
            <input
              type="text"
              placeholder="From location"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* TO */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl 
                          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
                          focus-within:ring-2 focus-within:ring-purple-500 transition">
            <FiMapPin className="text-purple-500" />
            <input
              type="text"
              placeholder="To location"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* FILTER */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl 
                          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <FiFilter className="text-gray-500" />
            <select className="w-full bg-transparent outline-none text-sm">
              <option>All Transport</option>
              <option>Bus</option>
              <option>Train</option>
              <option>Plane</option>
              <option>Launch</option>
            </select>
          </div>

        </div>

        {/* BOTTOM ROW: SORT */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl 
                        bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
                        w-full md:w-1/3">

          <ArrowDown className="text-gray-500" />

          <select className="w-full bg-transparent outline-none text-sm">
            <option>Sort by Price</option>
            <option>Low → High</option>
            <option>High → Low</option>
          </select>

        </div>

      </div>
    </div>
  );
};

export default TicketControls;