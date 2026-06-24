"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const ChartView = ({ revenue }) => {
  const data = [
    {
      name: "Added",
      value: revenue.totalTicketsAdded,
      color: "#8b5cf6",
    },
    {
      name: "Sold",
      value: revenue.totalTicketsSold,
      color: "#3b82f6",
    },
    {
      name: "Revenue",
      value: revenue.totalRevenue / 1000, // scale down for visibility
      color: "#10b981",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="bg-white dark:bg-black p-5 rounded-2xl border">
        <ResponsiveContainer
          width="100%"
          height={400}
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-2xl p-5 bg-white dark:bg-black">
          <h4 className="text-gray-500 text-sm">
            Total Tickets Added
          </h4>

          <p className="text-3xl font-bold text-violet-500 mt-2">
            {revenue.totalTicketsAdded}
          </p>
        </div>

        <div className="border rounded-2xl p-5 bg-white dark:bg-black">
          <h4 className="text-gray-500 text-sm">
            Total Tickets Sold
          </h4>

          <p className="text-3xl font-bold text-blue-500 mt-2">
            {revenue.totalTicketsSold}
          </p>
        </div>

        <div className="border rounded-2xl p-5 bg-white dark:bg-black">
          <h4 className="text-gray-500 text-sm">
            Total Revenue
          </h4>

          <p className="text-3xl font-bold text-green-500 mt-2">
            ৳ {revenue.totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartView;