import TicketCard from '@/components/dashboard/vendor/TicketCard';
import { getTickets } from '@/lib/api/ticket';
import React from 'react';

const MyAddedTicketPage = async() => {
    const tickets = await getTickets();
    console.log(tickets);
     if (!tickets?.length) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold">
          No Tickets Added Yet
        </h2>

        <p className="text-gray-500 mt-2">
          You havent added any tickets yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Added Tickets
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket._id}
            ticket={ticket}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddedTicketPage;