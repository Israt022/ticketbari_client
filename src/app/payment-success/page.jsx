import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { paymentSuccess } from "@/lib/actions/booking";

export default async function Success({ searchParams }) {
  const params = await searchParams;

  const session_id = params?.session_id;

  if (!session_id) {
    redirect("/");
  }

  const session =
    await stripe.checkout.sessions.retrieve(
      session_id,
      {
        expand: [
          "line_items",
          "payment_intent",
        ],
      }
    );

  if (session.status === "open") {
    redirect("/");
  }

  // payment update
  try {
    if (
      session.status === "complete" &&
      session.metadata?.bookingId
    ) {
      await paymentSuccess(
        session.metadata.bookingId,
        {
          transactionId:
            session.payment_intent?.id || "",

          ticketId:
            session.metadata?.ticketId,

          quantity:
            Number(
              session.metadata?.quantity
            ) || 0,
        }
      );
    }
  } catch (error) {
    console.error(
      "Payment update failed:",
      error
    );
  }

  const customerEmail =
    session.customer_details?.email || "";

  const amount =
    (session.amount_total || 0) / 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border p-8 md:p-10 text-center">

        <div className="flex justify-center mb-6">
          <CheckCircle2
            size={90}
            className="text-green-500"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Payment Successful 🎉
        </h1>

        <p className="mt-3 text-gray-500">
          Your ticket booking has been confirmed.
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-6 text-left space-y-3">

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
            <span className="text-xs break-all">
              {session.id}
            </span>
          </div>

        </div>

        <p className="mt-6 text-sm text-gray-500">
          A confirmation email has been sent to your email address.
          You can view your booked tickets anytime from your dashboard.
        </p>

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
            <button className="w-full py-3 rounded-xl border">
              Back To Home
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}