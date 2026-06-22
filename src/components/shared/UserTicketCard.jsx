"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const UserTicketCard = ({ ticket }) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition duration-300">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={ticket?.image || "/travelDefault.jpg"}
          alt={ticket.ticketTitle}
          width={500}
          height={300}
          className="w-full h-36 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* price badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          ৳ {ticket.pricePerUnit}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-2">

        <h2 className="font-semibold text-base line-clamp-1">
          {ticket.ticketTitle}
        </h2>

        <p className="text-xs opacity-70">
          {ticket.fromLocation} → {ticket.toLocation}
        </p>

        <p className="text-xs">
          <span className="font-medium">Type:</span> {ticket.transportType}
        </p>

        <p className="text-xs">
          <span className="font-medium">Qty:</span> {ticket.ticketQuantity}
        </p>

        {/* perks */}
        <div className="flex flex-wrap gap-1">
          {ticket.perks?.slice(0, 2).map((perk) => (
            <span
              key={perk}
              className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800"
            >
              {perk}
            </span>
          ))}
        </div>

        {/* button */}
        <Link href={`/tickets/${ticket._id}`}>
          <Button className="w-full mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
            See Details
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default UserTicketCard;