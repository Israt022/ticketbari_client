// import TicketDetailsView from "@/components/TicketDetailsView";
import TicketDetailsView from "@/components/TicketDetailsView";
import { getTicketsById } from "@/lib/actions/ticket";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const TicketDetailsPage = async ({ params }) => {

    const {id} = await params;
    const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/login");
  }
  const ticket = await getTicketsById(id);
  console.log(ticket,'id page');

  return (
    <div>
        <TicketDetailsView ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;