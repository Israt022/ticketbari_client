"use client";

import { FiFilter, FiMapPin } from "react-icons/fi";
import { ArrowDown } from "lucide-react";

const TicketControls = ({
  from,
  setFrom,
  to,
  setTo,
  transport,
  setTransport,
  sort,
  setSort,
}) => {

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 mb-10">
      <div className="p-4 md:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-sm hover:shadow-md transition space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <FiMapPin className="text-blue-500" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From location"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <FiMapPin className="text-purple-500" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To location"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <FiFilter className="text-gray-500" />

            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="w-full bg-transparent outline-none text-sm"
            >
              <option value="all">All Transport</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="plane">Plane</option>
              <option value="launch">Launch</option>
            </select>
          </div>

        </div>

        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full md:w-1/3">
          <ArrowDown className="text-gray-500" />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          >
            <option value="">Sort by Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default TicketControls;