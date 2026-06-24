import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { paymentSuccess } from "@/lib/actions/booking";

export default async function Success({ searchParams }) {
  console.log(searchParams);
  const { session_id } = await searchParams;
  console.log(session_id,'session id');
  if (!session_id) {
    throw new Error(
      "Please provide a valid session_id"
    );
  }

  const session =
    await stripe.checkout.sessions.retrieve(
      session_id,
      {
        expand: ["line_items", "payment_intent"],
      }
    );

  if(session.status === "complete"){
    await paymentSuccess(
      session.metadata.bookingId,
      {
        transactionId:
          session.payment_intent.id,
        ticketId:
          session.metadata.ticketId,
        quantity:
          session.metadata.quantity,
      }
    );

  }
    

  if (session.status === "open") {
    redirect("/");
  }

  const customerEmail =
    session.customer_details?.email;

  const amount =
    (session.amount_total || 0) / 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-black dark:via-zinc-950 dark:to-black px-4">

      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 text-center">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <CheckCircle2
            size={90}
            className="text-green-500"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Payment Successful 🎉
        </h1>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Your ticket booking has been confirmed.
        </p>

        {/* INFO CARD */}
        <div className="mt-8 rounded-2xl bg-gray-50 dark:bg-zinc-800 p-6 text-left space-y-3">

          <div className="flex justify-between">
            <span>Email</span>
            <span className="font-medium">
              {customerEmail}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Payment Status</span>
            <span className="text-green-500 font-semibold">
              Paid
            </span>
          </div>

          <div className="flex justify-between">
            <span>Amount Paid</span>
            <span className="font-semibold">
              ৳ {amount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Session ID</span>
            <span className="text-xs">
              {session.id}
            </span>
          </div>

        </div>

        {/* MESSAGE */}
        <p className="mt-6 text-sm text-gray-500">
          A confirmation email has been sent to your
          email address. You can view your booked
          tickets anytime from your dashboard.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-3 mt-8">

          <Link
            href="/dashboard/user/my-booking-tickets"
            className="flex-1"
          >
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
              My Booked Tickets
            </button>
          </Link>

          <Link
            href="/"
            className="flex-1"
          >
            <button className="w-full py-3 rounded-xl border border-zinc-300 dark:border-zinc-700">
              Back To Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}