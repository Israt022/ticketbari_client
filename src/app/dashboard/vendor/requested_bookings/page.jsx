import RequestedBookingTable from '@/components/dashboard/user/RequestedBookingTable';
import { getBookingRequests } from '@/lib/actions/booking';
import React from 'react';
import { MdRequestPage } from 'react-icons/md';

const RequestedBookingPage = async() => {
    const bookingRequest = await getBookingRequests();
    const isEmpty = !bookingRequest || bookingRequest.length === 0;

    // console.log(bookingRequest,"Requests");
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-1 items-center'>
                <MdRequestPage
                className='text-violet-500' 
                size={28} />
                <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600  text-transparent bg-clip-text">
                    Request Booking Tickets
                </h1>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className=''>Total Request Booking Ticket 
                    <span className='font-bold text-violet-500'>
                    ( {bookingRequest.length || 0} ) :</span> 
                </h3>
                {/* EMPTY STATE */}
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center py-20 border rounded-2xl bg-gray-50 dark:bg-zinc-900">
                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                            No bookings Request Found
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            No one haven’t booked any of your tickets yet.
                        </p>
                    </div>
                ) : (
                    <RequestedBookingTable requests={bookingRequest} />
                )}
            </div>
        </div>
    )
};

export default RequestedBookingPage;