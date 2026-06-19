"use client";

import React, { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Select,
  ListBox,
  Checkbox,
  Button,
} from "@heroui/react";
import ShareButton from "@/components/shared/ShareButton";
import { imgUpload } from "@/lib/imageUpload";
import { addTicket } from "@/lib/actions/ticket";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddTicketForm({ user }) {
  // inside component
    const [perks, setPerks] = useState([]);
    const router = useRouter();
    const handlePerkToggle = (value) => {
      setPerks((prev) =>
          prev.includes(value)
          ? prev.filter((p) => p !== value)
          : [...prev, value]
      );
    };
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());
        const image = await imgUpload(data?.image);

        const ticket = {
            ...data,
            perks, 
            image : image.url,
            status: "pending",
        }

        const result = await addTicket(ticket);
        if(!result){
            toast.error('Try again!');
            return;
        }
        if(result){
            toast.success('Ticket added successfully!');
            router.push('/dashboard/vendor/my-added-ticket')
        }
    };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white py-6 md:py-10 px-3 md:px-4">

      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0b0b0c] border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6">

        {/* HEADER */}
        <div className="mb-6 border-b border-gray-200 dark:border-zinc-800 pb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Add Ticket</h1>

          <p className="text-sm opacity-70">
            Status: <b className="font-bold text-orange-500">Pending</b>
          </p>

          <p className="text-sm mt-2 opacity-80">
            Vendor: <b>{user?.name}</b> ({user?.email})
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="space-y-6">

          {/* STATUS */}
          <input type="hidden" name="status" value="pending" />

          {/* TICKET TITLE */}
          <TextField name="ticketTitle" isRequired>
            <Label>Ticket Title</Label>
            <Input />
            <FieldError />
          </TextField>

          {/* FROM + TO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextField name="fromLocation" isRequired>
              <Label>From (Location)</Label>
              <Input />
            </TextField>

            <TextField name="toLocation" isRequired>
              <Label>To (Location)</Label>
              <Input />
            </TextField>
          </div>

          {/* TRANSPORT */}
          <Select name="transportType" isRequired>
            <Label>Select transport type</Label>
            <Select.Trigger>
              <Select.Value placeholder="Select transport type" />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="bus">Bus</ListBox.Item>
                <ListBox.Item id="train">Train</ListBox.Item>
                <ListBox.Item id="air">Plane</ListBox.Item>
                <ListBox.Item id="launch">Launch</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* PRICE + QTY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextField name="pricePerUnit" isRequired>
              <Label>Price (Per Unit)</Label>
              <Input type="number" />
            </TextField>

            <TextField name="ticketQuantity" isRequired>
              <Label>Ticket Quantity</Label>
              <Input type="number" />
            </TextField>
          </div>

          {/* DATE TIME */}
          <TextField name="departureDateTime" isRequired>
            <Label>Departure Date & Time</Label>
            <Input type="datetime-local" />
          </TextField>

          {/* PERKS */}
            <div>
                <Label>Perks</Label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">

                    {[
                    "AC",
                    "Breakfast",
                    "WiFi",
                    "Water",
                    "Snacks",
                    "Charging Port",
                    "Sleeper Seat",
                    "Toilet",
                    ].map((perk) => (
                    <label
                        key={perk}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 cursor-pointer
                        hover:bg-gray-100 dark:hover:bg-zinc-800 transition`}
                    >
                        <input
                        type="checkbox"
                        checked={perks.includes(perk)}
                        onChange={() => handlePerkToggle(perk)}
                        className="accent-black dark:accent-white"
                        />

                        <span className="text-sm">{perk}</span>
                    </label>
                    ))}

                </div>

                {/* preview */}
                <p className="text-xs mt-2 opacity-60">
                    Selected: {perks.length ? perks.join(", ") : "None"}
                </p>
            </div>

          {/* IMAGE */}
          <div className="w-full">
            <Label>Image Upload</Label>
            <Input
                type="file"
                name="image"
                accept="image/*"
                className="w-full"
            />
            </div>
            {/* Vendor name & email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* VENDOR */}
            <TextField>
                <Label>Vendor Name</Label>
                <Input value={user?.name || 'user'} readOnly />
            </TextField>

            <TextField>
                <Label>Vendor Email</Label>
                <Input value={user?.email || '...'} readOnly />
            </TextField>
          </div>

          {/* SUBMIT */}
          <div className="w-full mx-auto">
            <Button type="submit" className={'w-full bg-gradient-to-r from-black/15 dark:from-white via-purple-400 to-blue-400'}>
              Add Ticket
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}