"use client";

import { acceptBookingRequests, rejectBookingRequests } from "@/lib/actions/booking";
import {
  Table,
  Button,
} from "@heroui/react";

// import { acceptBooking, rejectBooking } from "@/lib/actions/booking";
import toast from "react-hot-toast";

const RequestedBookingTable = ({ requests }) => {

  const handleAccept = async (id) => {
    const res = await acceptBookingRequests(id);

    // if (!res?.acknowledged) {
    //   toast.error(res?.message || "Failed to accept");
    //   return;
    // }
    console.log(res);

    toast.success("Booking accepted");
  };

  const handleReject = async (id) => {
    const res = await rejectBookingRequests(id);

    // if (!res?.acknowledged) {
    //   toast.error(res?.message || "Failed to reject");
    //   return;
    // }
    console.log(id);
    toast.success("Booking rejected");
  };

  return (
    <Table aria-label="Requested bookings table">
      <Table.ScrollContainer>
        <Table.Content>

          <Table.Header>
            <Table.Column isRowHeader>User</Table.Column>
            <Table.Column>Ticket</Table.Column>
            <Table.Column>Quantity</Table.Column>
            <Table.Column>Total Price</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {requests?.map((req) => (
              <Table.Row key={req._id}>

                <Table.Cell>
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {req.userName}
                    </span>
                    <span className="text-xs text-gray-500">
                      {req.userEmail}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  {req.ticketTitle || "N/A"}
                </Table.Cell>

                <Table.Cell>
                  {req.quantity}
                </Table.Cell>

                <Table.Cell>
                  ৳ {req.totalPrice}
                </Table.Cell>
                <Table.Cell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      req.status === "accepted"
                        ? "bg-green-100 text-green-600"
                        : req.status === "rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {req.status}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex gap-2">

                    <Button
                      size="sm"
                      isDisabled={
                        req.status === "accepted" ||
                        req.status === "rejected"
                      }
                      className="bg-green-500 text-white"
                      onPress={() => handleAccept(req._id)}
                    >
                      Accept
                    </Button>

                    <Button
                      size="sm"
                      isDisabled={
                        req.status === "accepted" ||
                        req.status === "rejected"
                      }
                      className="bg-red-500 text-white"
                      onPress={() => handleReject(req._id)}
                    >
                      Reject
                    </Button>

                  </div>
                </Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>

        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default RequestedBookingTable;