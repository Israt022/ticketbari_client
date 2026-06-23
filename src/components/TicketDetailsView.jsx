"use client";

import Image from "next/image";
import { FiMapPin, FiClock, FiTag, FiPackage } from "react-icons/fi";
import { BsBusFront } from "react-icons/bs";
import { Button } from "@heroui/react";
import { useState } from "react";
import Countdown from "./ticket/Countdown";
import BookingModal from "./ticket/BookingModal";

const TicketDetailsView = ({ ticket }) => {
  const isExpired = new Date(ticket.departureDateTime) < new Date();
  const isSoldOut = ticket.ticketQuantity <= 0;

  const [isOpen, setIsOpen] = useState(false);

  console.log(ticket,'details');

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 space-y-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="space-y-4">

          <div className="relative h-[320px] md:h-[450px] rounded-3xl overflow-hidden border shadow-lg">
            <Image
              src={ticket.image || "/travelDefault.jpg"}
              alt={ticket.ticketTitle}
              fill
              className="object-cover"
            />

            <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2">
              <BsBusFront />
              {ticket.transportType}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3">

            <div className="border rounded-2xl p-4 text-center">
              <h3 className="font-bold text-lg">
                ৳ {ticket.pricePerUnit}
              </h3>
              <p className="text-xs opacity-70">
                Per Ticket
              </p>
            </div>

            <div className="border rounded-2xl p-4 text-center">
              <h3 className="font-bold text-lg">
                {ticket.ticketQuantity}
              </h3>
              <p className="text-xs opacity-70">
                Available
              </p>
            </div>

            <div className="border rounded-2xl p-4 text-center">
              <h3 className="font-bold text-lg">
                {ticket.transportType}
              </h3>
              <p className="text-xs opacity-70">
                Transport
              </p>
            </div>

          </div>

        </div>

        {/* INFO */}
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {ticket.ticketTitle}
            </h1>

            <p className="mt-2 flex items-center gap-2 text-gray-500">
              <FiMapPin />
              {ticket.fromLocation} → {ticket.toLocation}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">

            <div className="flex items-center gap-2">
              <FiTag />
              ৳ {ticket.pricePerUnit}
            </div>

            <div className="flex items-center gap-2">
              <FiPackage />
              {ticket.ticketQuantity} Seats
            </div>

          </div>

          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <FiClock />
            {new Date(
              ticket.departureDateTime
            ).toLocaleString()}
          </div>

          {/* COUNTDOWN */}
          <Countdown
            departureTime={ticket.departureDateTime}
          />

          {/* PERKS */}
          <div>
            <h3 className="font-semibold mb-3">
              Included Facilities
            </h3>

            <div className="flex flex-wrap gap-2">
              {ticket.perks?.map((perk) => (
                <span
                  key={perk}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-zinc-800"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>

          {/* BOOK BUTTON */}

          <Button
            onPress={() => setIsOpen(true)}
            isDisabled={isExpired || isSoldOut}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          >
            {isExpired
              ? "Trip Ended"
              : isSoldOut
              ? "Sold Out"
              : "Book Now"}
          </Button>

          {(isExpired || isSoldOut) && (
            <p className="text-red-500 text-sm">
              Booking is not available for this trip.
            </p>
          )}

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="border rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-sm">

        <h2 className="text-2xl font-bold mb-4">
          About This Trip
        </h2>

        <p className="leading-8 text-gray-600 dark:text-gray-300">
          Premium travel service with verified vendors,
          secure booking system and comfortable travel
          experience. Enjoy a smooth journey with
          professional transport service, real-time
          booking confirmation and dedicated support.
        </p>

      </div>

      {/* BOOKING MODAL */}

      <BookingModal
        ticket={ticket}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </div>
  );
};

export default TicketDetailsView;