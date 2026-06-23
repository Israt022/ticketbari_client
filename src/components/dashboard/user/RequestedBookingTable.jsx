"use client";

import {
  Table,
  Button,
} from "@heroui/react";

// import { acceptBooking, rejectBooking } from "@/lib/actions/booking";
import toast from "react-hot-toast";

const RequestedBookingTable = ({ requests }) => {

  const handleAccept = async (id) => {
    // const res = await acceptBooking(id);

    // if (!res?.acknowledged) {
    //   toast.error(res?.message || "Failed to accept");
    //   return;
    // }
    console.log(id);

    toast.success("Booking accepted");
  };

  const handleReject = async (id) => {
    // const res = await rejectBooking(id);

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
            <Table.Column>User</Table.Column>
            <Table.Column>Ticket</Table.Column>
            <Table.Column>Quantity</Table.Column>
            <Table.Column>Total Price</Table.Column>
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
                  <div className="flex gap-2">

                    <Button
                      size="sm"
                      className="bg-green-500 text-white"
                      onPress={() => handleAccept(req._id)}
                    >
                      Accept
                    </Button>

                    <Button
                      size="sm"
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