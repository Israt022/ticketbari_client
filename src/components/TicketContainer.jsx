"use client";

import { useRouter, useSearchParams } from "next/navigation";
import TicketControls from "./TicketControls";
import AllTicketPage from "./AllTicketPage";
import { Pagination } from "@heroui/react";
import NoData from "./NoData";
import { useEffect, useState } from "react";

const TicketContainer = ({ tickets, total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const transport = searchParams.get("transport") || "all";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") || 1);
  
  const [localFrom, setLocalFrom] = useState(from);
  const [localTo, setLocalTo] = useState(to);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(total / itemsPerPage);

  const updateFilters = (updates) => {
    const sp = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "all") sp.delete(key);
      else sp.set(key, value);
    });

    sp.set("page", "1");

    router.push(`/tickets?${sp.toString()}`);
    // router.refresh();
  };

  const handlePageChange = (p) => {
    const sp = new URLSearchParams(searchParams.toString());
    sp.set("page", p);

    router.push(`/tickets?${sp.toString()}`);
    // router.refresh();
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, total);


  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    if (page > 3) pages.push("ellipsis");

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) pages.push("ellipsis");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };
  useEffect(() => {
  const timer = setTimeout(() => {
    updateFilters({
      from: localFrom,
      to: localTo,
    });
  }, 500);

  return () => clearTimeout(timer);
}, [localFrom, localTo]);

  return (
    <>
      <TicketControls
        from={localFrom}
        setFrom={setLocalFrom}
        to={localTo}
        setTo={setLocalTo}
        // from={from}
        // setFrom={(v) => updateFilters({ from: v })}
        // to={to}
        // setTo={(v) => updateFilters({ to: v })}
        transport={transport}
        setTransport={(v) => updateFilters({ transport: v })}
        sort={sort}
        setSort={(v) => updateFilters({ sort: v })}
      />

      {tickets?.length > 0 ? (
        <>
          <AllTicketPage tickets={tickets} />

          {/* PAGINATION  */}
          <Pagination className="w-full">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {total} results
            </Pagination.Summary>

            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => handlePageChange(page - 1)}
                >
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>

              {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`e-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === page}
                      onPress={() => handlePageChange(p)}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                )
              )}

              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPages}
                  onPress={() => handlePageChange(page + 1)}
                >
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default TicketContainer;