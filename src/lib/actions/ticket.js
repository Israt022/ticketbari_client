'use server';

import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// get ticket by id
export const getTicketsById = async(id) =>{
    const token = await getTokenServer();
console.log(token);
    const res = await fetch(`${baseUrl}/tickets/${id}`,{
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}


// add ticket
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

// UPDATE ticket
export const updateTicket = async (id, updateData) => {
    const token = await getTokenServer();
    // console.log("Token ",token);
    const res = await fetch(`${baseUrl}/vendor/my/tickets/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
    });

    const data = await res.json();
    return data;
};

// delete ticket
export const deleteTicket = async(ticketId) =>{
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}/vendor/my/tickets/${ticketId}`,{
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
}

// Approve ticket 
export const approveTicket = async (id) => {
    const token = await getTokenServer();
    // console.log("Token ",token);
    const res = await fetch(`${baseUrl}/admin/tickets/approve/${id}`, {
        method: "PATCH",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();
    return data;
};

// Reject ticket
export const rejectTicket = async(ticketId) =>{
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}/admin/tickets/reject/${ticketId}`,{
        method : 'PATCH',
        headers : {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
}

// advertise ticket 
export const toggleAdvertise = async(id)=>{
  const token = await getTokenServer();

  const res = await fetch(
    `${baseUrl}/admin/tickets/advertise/${id}`,
    {
      method: "PATCH",
      headers:{
        authorization:`Bearer ${token}`
      }
    }
  );

  return res.json();
}

export const getRevenueOverview = async () => {
    const token = await getTokenServer();

    const res = await fetch(
        `${baseUrl}/vendor/revenue-overview`,
        {
        headers: {
            authorization: `Bearer ${token}`,
        },
        }
    );

    return await res.json();
};