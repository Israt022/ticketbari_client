"use client";

import { deleteTicket } from "@/lib/actions/ticket";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";


const DeleteTicket = ({ticketId}) => {
    console.log(ticketId,"ID ticket");

    const handleDeletePet = async()=>{
        const result = await deleteTicket(ticketId)
        
        if (result?.deletedCount > 0) {
            toast.success("Ticket deleted successfully");
        } else {
            toast.error("Delete failed");
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="outlet" className="border border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-2 rounded-lg transition w-full">Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                        <AlertDialog.Icon status="danger" />
                        <AlertDialog.Heading>Delete pet permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                        <Button slot="close" variant="tertiary">
                            Cancel
                        </Button>
                        <Button onClick={handleDeletePet} slot="close" variant="danger">
                            Delete Ticket
                        </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteTicket;
