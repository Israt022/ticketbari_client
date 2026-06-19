const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;


export const getTickets = async() => {
    const res = await fetch(`${baseUrl}/vendor/tickets`);
    const data = await res.json();

    return data;
}