import AddTicketForm from '@/components/dashboard/vendor/AddTicketForm';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const AddTicketPage = async() => {
    const user = await getUserSession();
    // console.log(user);
    return (
        <div>
            <AddTicketForm user={user} />
        </div>
    );
};

export default AddTicketPage;