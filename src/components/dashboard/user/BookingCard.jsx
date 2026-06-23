"use client";

import Image from "next/image";
// import Countdown from "@/components/ticket/Countdown";
import { Button } from "@heroui/react";
import Countdown from "@/components/ticket/Countdown";

const BookingCard = ({ booking }) => {
  return (
    <div className="border rounded-2xl p-4 space-y-3 shadow-sm">

      <Image
        src={booking.image || "/travelDefault.jpg"}
        width={400}
        height={200}
        className="rounded-xl object-cover"
        alt=""
      />

      <h2 className="font-bold text-lg">
        {booking.ticketTitle}
      </h2>

      <p className="text-sm">
        {booking.fromLocation} → {booking.toLocation}
      </p>

      <p>
        Quantity: {booking.quantity}
      </p>

      <p>
        Total: ৳ {booking.totalPrice}
      </p>

      <p className="text-sm text-gray-500">
        {booking.departureDateTime}
      </p>

      <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
        {booking.status}
      </span>

      {/* countdown (future use) */}
      <Countdown departureTime={booking.departureDateTime} />

      {booking.status === "accepted" && (
        <Button className="w-full bg-green-500 text-white">
          Pay Now
        </Button>
      )}

    </div>
  );
};

export default BookingCard;