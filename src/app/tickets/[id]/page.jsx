// import TicketDetailsView from "@/components/TicketDetailsView";
import TicketDetailsView from "@/components/TicketDetailsView";
import { getTicketsById } from "@/lib/actions/ticket";

const TicketDetailsPage = async ({ params }) => {
    const {id} = await params;
  const ticket = await getTicketsById(id);
  console.log(ticket,'id page');

  return (
    <div>
        <TicketDetailsView ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;