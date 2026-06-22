import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// get all ticket 
export const getTickets = async() => {
    const res = await fetch(`${baseUrl}/tickets` 
    );
    const data = await res.json();

    return data;
}



// get advertise all ticket 
export const getAdvertiseTickets = async() => {
    const res = await fetch(`${baseUrl}/advertise/tickets` 
    );
    const data = await res.json();

    return data;
}


// get vendor ticket
export const getVendorTickets = async() => {
    const token = await getTokenServer();
    // console.log(token);
    const res = await fetch(`${baseUrl}/vendor/my/tickets`,{
        headers: {
            'Content-Type': 'application/json',
            authorization : `Bearer ${token}`
        },
    }   
    );
    const data = await res.json();

    return data;
}

// get admin ticket
export const getAdminTickets = async() => {
    const token = await getTokenServer();
    // console.log(token);
    const res = await fetch(`${baseUrl}/admin/tickets`,{
        headers: {
            'Content-Type': 'application/json',
            authorization : `Bearer ${token}`
        },
    }   
    );
    const data = await res.json();

    return data;
}

