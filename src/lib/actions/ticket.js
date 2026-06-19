'use server';

import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addTicket = async(ticket) => {
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/vendor/tickets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization : `Bearer ${token}`
        },
        body: JSON.stringify(ticket),
    });
    
    const data = await res.json();
    return data;
}