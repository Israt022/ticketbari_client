"use client";

import React, { useState } from "react";
import { Button, Switch } from "@heroui/react";
import { toggleAdvertise } from "@/lib/actions/ticket";
import toast from "react-hot-toast";

const AdvertiseTicketTable = ({ tickets }) => {
  const [localTickets, setLocalTickets] = useState(tickets);

  const handleToggle = async(id) => {
    try {
      console.log("clicked:", id);

      const result = await toggleAdvertise(id);

      if (result?.acknowledged) {
        toast.success("Updated successfully!");
      } else {
        toast.error(result?.message || "Failed");
      }

    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-zinc-800">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-zinc-900">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Route</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
            <th className="p-3">Advertise</th>
          </tr>
        </thead>

        <tbody>
          {localTickets?.map((ticket) => (
            <tr
              key={ticket._id}
              className="border-t border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900"
            >
              <td className="p-3 font-medium">
                {ticket.ticketTitle}
              </td>

              <td className="p-3">
                {ticket.fromLocation} → {ticket.toLocation}
              </td>

              <td className="p-3">৳ {ticket.pricePerUnit}</td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    ticket.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>

              <td className="p-3">
                {/* <Switch
                  isSelected={ticket.isAdvertised}
                  onValueChange={(value) => {
                    console.log("SWITCH CLICKED:", value);
                    handleToggle(ticket);
                  }}
                >
                  {ticket.isAdvertised ? "On" : "Off"}
                </Switch> */}
                <button
                  onClick={() => handleToggle(ticket._id)}
                  className={`px-3 py-1 rounded text-white ${
                    ticket.isAdvertised ? "bg-green-500" : "bg-gray-500"
                  }`}
                >
                  {ticket.isAdvertised ? "ON" : "OFF"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdvertiseTicketTable;