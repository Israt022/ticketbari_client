import Image from "next/image";
import { FiMapPin, FiClock, FiTag, FiPackage } from "react-icons/fi";
import { BsBusFront } from "react-icons/bs";

const TicketDetailsView = ({ ticket }) => {
  const isExpired = new Date(ticket.departureDateTime) < new Date();
  const isSoldOut = ticket.ticketQuantity <= 0;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 space-y-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border shadow-sm">
          <Image
            src={ticket.image || "/travelDefault.jpg"}
            alt={ticket.ticketTitle}
            fill
            className="object-cover"
          />

          <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full flex items-center gap-2 text-xs">
            <BsBusFront />
            {ticket.transportType}
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-5">

          <h1 className="text-2xl md:text-3xl font-bold">
            {ticket.ticketTitle}
          </h1>

          <p className="flex items-center gap-2 text-sm opacity-70">
            <FiMapPin />
            {ticket.fromLocation} → {ticket.toLocation}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FiTag /> ৳ {ticket.pricePerUnit}
            </span>

            <span className="flex items-center gap-1">
              <FiPackage /> Qty: {ticket.ticketQuantity}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
            <FiClock />
            {new Date(ticket.departureDateTime).toLocaleString()}
          </div>

          {/* PERKS */}
          <div className="flex flex-wrap gap-2">
            {ticket.perks?.map((perk) => (
              <span
                key={perk}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800"
              >
                {perk}
              </span>
            ))}
          </div>

          {/* BOOK BUTTON (UI ONLY) */}
          <button
            disabled={isExpired || isSoldOut}
            className={`w-full mt-4 py-3 rounded-xl font-medium transition
              ${
                isExpired || isSoldOut
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
              }`}
          >
            {isExpired
              ? "Trip Ended"
              : isSoldOut
              ? "Sold Out"
              : "Book Now"}
          </button>

          {(isExpired || isSoldOut) && (
            <p className="text-xs text-red-500">
              Booking is not available for this ticket
            </p>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="border rounded-2xl p-6 bg-white dark:bg-zinc-900">
        <h2 className="font-semibold text-lg mb-2">About This Trip</h2>
        <p className="text-sm opacity-70">
          Premium travel service with verified vendors, secure booking system,
          and comfortable journey experience.
        </p>
      </div>
    </div>
  );
};

export default TicketDetailsView;