import { getTokenServer } from "../getTokenServer";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;


export const getTickets = async() => {
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

