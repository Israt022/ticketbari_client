import TicketCard from '@/components/dashboard/vendor/TicketCard';
import { getVendorTickets } from '@/lib/api/ticket';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const MyAddedTicketPage = async() => {
  const user = await getUserSession();
    const tickets = await getVendorTickets();
    // console.log(tickets);
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
      {user?.isFraud && (
        <div className="mb-5 rounded-lg bg-red-100 border border-red-500 p-4">
          <h3 className="font-semibold text-red-600">
            Fraud Vendor
          </h3>

          <p className="text-sm text-red-500">
            You can no longer add tickets.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket._id}
            ticket={ticket}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddedTicketPage;