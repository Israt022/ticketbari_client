import Image from "next/image";
import { Button } from "@heroui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TicketCard = ({ ticket }) => {
  const isRejected = ticket.status === "rejected";

  const statusColor = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl border bg-white dark:bg-zinc-900 overflow-hidden">
      <Image
        src={ticket?.image}
        alt={ticket.ticketTitle}
        width={500}
        height={300}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">
            {ticket.ticketTitle}
          </h2>

          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[ticket.status]}`}
          >
            {ticket.status}
          </span>
        </div>

        <p>
          <strong>Route:</strong>{" "}
          {ticket.fromLocation} → {ticket.toLocation}
        </p>

        <p>
          <strong>Transport:</strong> {ticket.transportType}
        </p>

        <p>
          <strong>Price:</strong> ৳{ticket.pricePerUnit}
        </p>

        <p>
          <strong>Quantity:</strong> {ticket.ticketQuantity}
        </p>

        <p>
          <strong>Departure:</strong>{" "}
          {new Date(ticket.departureDateTime).toLocaleString()}
        </p>

        <div className="flex flex-wrap gap-2">
          {ticket.perks?.map((perk) => (
            <span
              key={perk}
              className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800"
            >
              {perk}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            isDisabled={isRejected}
            startContent={<FiEdit2 />}
          >
            Update
          </Button>

          <Button
            size="sm"
            color="danger"
            isDisabled={isRejected}
            startContent={<FiTrash2 />}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;