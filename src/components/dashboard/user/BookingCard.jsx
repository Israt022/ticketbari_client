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

      <span className={`px-2 py-1 text-xs rounded ${
                      booking.status === "accepted"
                        ? "bg-green-100 text-green-600"
                        : booking.status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}>
        {booking.status}
      </span>

      {/* countdown (future use) */}
      <Countdown departureTime={booking.departureDateTime} />

      {booking.status === "accepted" && 
       booking.paymentStatus !== "paid" && (
        <form action="/api/payment" method="POST">
          <input
            type="hidden"
            name="bookingId"
            value={booking._id}
          />

          <input
            type="hidden"
            name="ticketId"
            value={booking.ticketId}
          />

          <input
            type="hidden"
            name="ticketTitle"
            value={booking.ticketTitle}
          />

          <input
            type="hidden"
            name="totalPrice"
            value={booking.totalPrice}
          />

          <input
            type="hidden"
            name="quantity"
            value={booking.quantity}
          />

          <input
            type="hidden"
            name="vendorId"
            value={booking.vendorId}
          />

          <input
            type="hidden"
            name="fromLocation"
            value={booking.fromLocation}
          />

          <input
            type="hidden"
            name="toLocation"
            value={booking.toLocation}
          />

          <input
            type="hidden"
            name="image"
            value={booking.image}
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            Pay Now
          </Button>
        </form>
      )}

    </div>
  );
};

export default BookingCard;