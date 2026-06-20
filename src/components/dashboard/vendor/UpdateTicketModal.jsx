"use client";

import { updateTicket } from "@/lib/actions/ticket";
import { imgUpload } from "@/lib/imageUpload";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import Image from "next/image";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

const UpdateTicketModal = ({ isRejected, ticket }) => {
  const {
    _id,
    ticketTitle,
    fromLocation,
    toLocation,
    transportType,
    pricePerUnit,
    ticketQuantity,
    departureDateTime,
    image,
    userName,
    userMail,
  } = ticket;

  const handleAddTicket = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image");
    const ticketData = Object.fromEntries(formData.entries());
    // const image = await imgUpload(ticketData?.image);
    let imageUrl = image; // old image fallback

    if (file && file.size > 0) {
    const uploaded = await imgUpload(file);
    imageUrl = uploaded.url;
    }
    console.log(file);
    const ticket = {
        ...ticketData,
        image : imageUrl,
    }
    const id = _id;

    const result = await updateTicket(id,ticket);
    if(!result){
        toast.error('Try again!');
        return;
    }
    if(result){
        toast.success('Ticket added successfully!');
    }
    console.log(id,"ticket id");

    console.log("UPDATED TICKET DATA ", ticketData);
    console.log("UPDATED TICKET RESULT ", result);
  };

  return (
    <div>
      <Modal>
        <Button
          variant="outline"
          className="border w-full border-green-500 hover:bg-green-600 hover:text-white text-green-500 font-semibold py-2 rounded-lg transition"
        >
          <BiEdit /> Update
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-3xl">

              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-green-100 text-green-600">
                  <BiEdit className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Ticket</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <Surface>
                  <form onSubmit={handleAddTicket} className="p-6 space-y-6">

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                      {/* Ticket Title */}
                      <TextField defaultValue={ticketTitle} name="ticketTitle" isRequired>
                        <Label>Ticket Title</Label>
                        <Input />
                        <FieldError />
                      </TextField>

                      {/* From */}
                      <TextField defaultValue={fromLocation} name="fromLocation" isRequired>
                        <Label>From Location</Label>
                        <Input />
                      </TextField>

                      {/* To */}
                      <TextField defaultValue={toLocation} name="toLocation" isRequired>
                        <Label>To Location</Label>
                        <Input />
                      </TextField>

                      {/* Transport */}
                      <TextField defaultValue={transportType} name="transportType" isRequired>
                        <Label>Transport Type</Label>
                        <Input />
                      </TextField>

                      {/* Price */}
                      <TextField defaultValue={pricePerUnit} name="pricePerUnit" isRequired>
                        <Label>Price Per Unit</Label>
                        <Input type="number" />
                      </TextField>

                      {/* Quantity */}
                      <TextField defaultValue={ticketQuantity} name="ticketQuantity" isRequired>
                        <Label>Ticket Quantity</Label>
                        <Input type="number" />
                      </TextField>

                      {/* Departure */}
                      <TextField defaultValue={departureDateTime} name="departureDateTime" isRequired>
                        <Label>Departure Date & Time</Label>
                        <Input type="datetime-local" />
                      </TextField>

                      {/* Image */}
                      {/* <div className="md:col-span-2">
                        <TextField defaultValue={image} name="image" isRequired>
                          <Label>Image URL</Label>
                          <Input />
                          <FieldError />
                        </TextField>
                      </div> */}
                        {/* Image Upload */}
                        <div className="md:col-span-2">
                        <Label>Image Upload</Label>

                        <Input
                            type="file"
                            accept="image/*"
                            name="image"
                            // onChange={(e) =>
                            // setForm((prev) => ({
                            //     ...prev,
                            //     image: e.target.files[0],
                            // }))
                            // }
                        />

                        {/* preview */}
                        {image && typeof image === "string" && (
                            <Image
                                width={50}
                                height={50}
                            src={image || '/travelDefault.jpg'}
                            alt="preview"
                            className="w-full h-40 object-cover mt-2 rounded-lg"
                            />
                        )}
                        </div>
                                            {/* Vendor Info (read only) */}
                      <TextField defaultValue={userName} name="userName">
                        <Label>Vendor Name</Label>
                        <Input readOnly />
                      </TextField>

                      <TextField defaultValue={userMail} name="userMail">
                        <Label>Vendor Email</Label>
                        <Input readOnly />
                      </TextField>

                      {/* Status */}
                      <TextField defaultValue={ticket.status} name="status">
                        <Label>Status</Label>
                        <Input readOnly />
                      </TextField>

                    </div>

                    {/* FOOTER */}
                    <div className="flex justify-end gap-3 pt-4">
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button
                        slot="close"
                        type="submit"
                        className="bg-green-600 text-white"
                      >
                        Update Ticket
                      </Button>
                    </div>

                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateTicketModal;