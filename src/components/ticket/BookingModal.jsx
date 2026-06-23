"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Modal,
  Button,
} from "@heroui/react";
import { bookingTicket } from "@/lib/actions/booking";
import toast from "react-hot-toast";

const BookingModal = ({
  ticket,
  isOpen,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < ticket.ticketQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice =
    quantity * ticket.pricePerUnit;

  const handleBooking = async () => {
    const bookingData = {
        ticketId: ticket._id,
        quantity,
        totalPrice,
        unitPrice: ticket.pricePerUnit,
    };

    const result = await bookingTicket(bookingData);
    
    if(!result){
        toast.error(result?.message || "Booking failed. Try again!");
        return;
    }
    if(result){
        toast.success('Booking successful')
    }
    console.log('Result of booking', result);

    };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="2xl"
    >
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>

            <Modal.Header>
              <Modal.Heading>
                Book Ticket
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>

              <div className="space-y-5">

                <div className="relative h-56 rounded-xl overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src={
                      ticket.image ||
                      "/travelDefault.jpg"
                    }
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {ticket.ticketTitle}
                  </h3>

                  <p>
                    {ticket.fromLocation}
                    {" → "}
                    {ticket.toLocation}
                  </p>
                </div>

                <div className="flex justify-between">
                  <span>
                    Available:
                    {" "}
                    {ticket.ticketQuantity}
                  </span>

                  <span>
                    ৳ {ticket.pricePerUnit}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-5">

                  <Button
                    variant="bordered"
                    onPress={decrease}
                  >
                    -
                  </Button>

                  <span className="font-bold text-xl">
                    {quantity}
                  </span>

                  <Button
                    variant="bordered"
                    onPress={increase}
                  >
                    +
                  </Button>

                </div>

                <div className="text-center font-bold text-xl">
                  Total: ৳ {totalPrice}
                </div>

              </div>

            </Modal.Body>

            <Modal.Footer>

              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Cancel
              </Button>

              <Button
                color="primary"
                onPress={handleBooking}
              >
                Book Now
              </Button>

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;