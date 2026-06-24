import { TbTransactionDollar } from "react-icons/tb";
import TransactionTable from "./TransactionTable";
import { getMyBookingTicket } from "@/lib/actions/booking";

const TransactionHistoryPage = async () => {
  const bookingHistory = await getMyBookingTicket();

  const transactions =
    bookingHistory?.filter(
      (booking) =>
        booking.paymentStatus === "paid"
    ) || [];

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex gap-1 items-center">
        <TbTransactionDollar
          className="text-violet-500"
          size={28}
        />
        <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600 text-transparent bg-clip-text">
          Transaction History
        </h1>
      </div>

      <h3>
        Total Transactions (
        <span className="font-bold text-violet-500">
          {transactions.length}
        </span>
        )
      </h3>

      <TransactionTable
        transactions={transactions}
      />
    </div>
  );
};

export default TransactionHistoryPage;