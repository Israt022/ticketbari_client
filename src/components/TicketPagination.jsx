"use client";

const TicketPagination = () => {
  return (
    <div className="flex justify-center gap-2 mt-10">

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          {page}
        </button>
      ))}

    </div>
  );
};

export default TicketPagination;