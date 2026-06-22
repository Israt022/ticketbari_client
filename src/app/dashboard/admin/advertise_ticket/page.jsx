import { getTickets } from '@/lib/api/ticket';
import React from 'react';
import { AiOutlineBorderVerticle } from 'react-icons/ai';
import { RiAdvertisementLine } from 'react-icons/ri';
import AdvertiseTicketTable from './AdvertiseTicketTable';

const AdvertiseTicketPage = async() => {
    const tickets = await getTickets();
    // console.log(tickets);
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-1 items-center'>
                <RiAdvertisementLine 
                className='text-violet-500' 
                size={28} />
                <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600  text-transparent bg-clip-text">
                    Advertise Ticket
                </h1>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className=''>Total Ticket <span className='font-bold text-violet-500'>
                    ( {tickets.length} ) :
                    </span> 
                    </h3>
                <AdvertiseTicketTable tickets={tickets} />
            </div>
        </div>
    );
};

export default AdvertiseTicketPage;