
import TicketContainer from "@/components/TicketContainer";
import { getTickets } from "@/lib/api/ticket";

const TicketsPage = async ({ searchParams }) => {
  const filters = await searchParams;

  const filterObj = {
    ...filters,
    page: Number(filters.page || 1),
  };

  const queryString = new URLSearchParams(filterObj).toString();

  const ticketData = await getTickets(queryString);
  // console.log('filters',filters);
  // console.log('filters obj ' ,filterObj);
  // console.log('query',queryString);
  return (
    <TicketContainer
      filters={filterObj}
      tickets={ticketData.tickets}
      total={ticketData.total}
    />
  );
};

export default TicketsPage;