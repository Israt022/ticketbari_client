"use client";

const TicketPagination = ({
  total,
  page,
  setPage,
}) => {

  const totalPages = Math.ceil(total / 9);

  return (
    <div className="flex justify-center mt-10 gap-2">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
};

export default TicketPagination;