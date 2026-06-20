import { getAdminTickets } from '@/lib/api/ticket';
import { Ticket } from 'lucide-react';
import ManageTicketTable from './ManageTicketTable';

const ManageTicketPage = async() => {
    const tickets = await getAdminTickets();

    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-1 items-center'>
                <Ticket 
                className='text-violet-500' 
                size={28} />
                <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600  text-transparent bg-clip-text">
                    Manage Ticket
                </h1>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className=''>Total Ticket <span className='font-bold text-violet-500'>( {tickets.length} ) :</span> </h3>
                <ManageTicketTable tickets={tickets} />
            </div>
        </div>
    );
};

export default ManageTicketPage;