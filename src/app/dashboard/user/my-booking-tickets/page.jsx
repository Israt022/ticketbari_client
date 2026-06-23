import BookingCard from '@/components/dashboard/user/BookingCard';
import { getMyBookingTicket } from '@/lib/actions/booking';
import React from 'react';
import { TbBrandBooking } from 'react-icons/tb';

const MyBookingPage = async() => {
    const bookings = await getMyBookingTicket();
    const isEmpty = !bookings || bookings.length === 0;

    // console.log(bookings,"Booking lists");
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-1 items-center'>
                <TbBrandBooking
                className='text-violet-500' 
                size={28} />
                <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600  text-transparent bg-clip-text">
                    My Booking Tickets
                </h1>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className=''>Total Booking Ticket 
                    <span className='font-bold text-violet-500'>
                    ( {bookings.length || 0} ) :</span> 
                </h3>
                {/* EMPTY STATE */}
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center py-20 border rounded-2xl bg-gray-50 dark:bg-zinc-900">
                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                            No bookings found
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            You haven’t booked any tickets yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        {bookings?.map((b) => (
                            <BookingCard key={b._id} booking={b} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookingPage;