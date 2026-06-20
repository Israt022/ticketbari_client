"use client";

import { approveTicket, rejectTicket } from "@/lib/actions/ticket";
import { Table, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ManageTicketTable = ({tickets}) => {
    const router = useRouter();

    const handleApprove = async(id) => {
        const result = await approveTicket(id);
        if(!result){
            toast.error('Something went wrong!');
            return;
        }
        if(result.modifiedCount){
            toast.success('Approve')
            router.refresh();
        }
    }
    const handleReject = async(id) =>{
        const result = await rejectTicket(id);
        if(!result){
            toast.error('Something went wrong!');
            return;
        }
        if(result.modifiedCount){
            toast.success('Reject ticket')
            router.refresh();
        }
    }
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                <Table.Content aria-label="Manage Tickets Table">
                    <Table.Header>
                    <Table.Column isRowHeader>Title</Table.Column>
                    <Table.Column>From</Table.Column>
                    <Table.Column>To</Table.Column>
                    <Table.Column>Transport</Table.Column>
                    <Table.Column>Price</Table.Column>
                    <Table.Column>Quantity</Table.Column>
                    <Table.Column>Status</Table.Column>
                    <Table.Column>Vendor</Table.Column>
                    <Table.Column>Actions</Table.Column>
                    </Table.Header>

                    <Table.Body>
                    {tickets.map((ticket) => (
                        <Table.Row key={ticket._id}>
                        <Table.Cell>{ticket.ticketTitle}</Table.Cell>
                        <Table.Cell>{ticket.fromLocation}</Table.Cell>
                        <Table.Cell>{ticket.toLocation}</Table.Cell>
                        <Table.Cell>{ticket.transportType}</Table.Cell>
                        <Table.Cell>${ticket.pricePerUnit}</Table.Cell>
                        <Table.Cell>{ticket.ticketQuantity}</Table.Cell>

                        <Table.Cell>
                            <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                                ticket.status === "approved"
                                ? "bg-green-100 text-green-600"
                                : ticket.status === "rejected"
                                ? "bg-red-100 text-red-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                            >
                            {ticket.status || "pending"}
                            </span>
                        </Table.Cell>

                        <Table.Cell>{ticket.userName}</Table.Cell>

                        <Table.Cell>
                            <div className="flex gap-2">
                            <Button
                                size="sm"
                                color="success"
                                isDisabled={ticket.status === "approved"}
                                className={'bg-green-500'}
                                onClick={() => handleApprove(ticket._id)}
                            >
                                Approve
                            </Button>

                            <Button
                                size="sm"
                                color="danger"
                                isDisabled={ticket.status === "rejected"}
                                className={'bg-red-500'}
                                onClick={() => handleReject(ticket._id)}
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
        </div>
    );
};

export default ManageTicketTable;