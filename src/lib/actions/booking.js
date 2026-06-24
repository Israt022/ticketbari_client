'use server';

import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// add ticket
export const bookingTicket = async(bookingData) => {
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization : `Bearer ${token}`
        },
        body: JSON.stringify(bookingData),
    });
    
    const data = await res.json();
    return data;
}

export const getMyBookingTicket = async() =>{
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/user/bookings`,{
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}

// get vendor booking request
export const getBookingRequests= async() =>{
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/vendor/bookings`,{
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}
// accept vendor booking request
export const acceptBookingRequests= async(id) =>{
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/vendor/bookings/accept/${id}`,{
        method : 'PATCH',
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}
// accept vendor booking request
export const rejectBookingRequests= async(id) =>{
    const token = await getTokenServer();

    const res = await fetch(`${baseUrl}/vendor/bookings/reject/${id}`,{
        method : 'PATCH',
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}

