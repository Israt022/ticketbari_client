import { getUsersList } from '@/lib/api/users';
import { User } from 'lucide-react';
import React from 'react';
import ManageUserTable from './ManageUserTable';

const ManageUserPage = async() => {
    const data = await getUsersList();
    const users = data?.users || [];

    // console.log('User list', users);
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-1 items-center'>
                <User
                className='text-violet-500' 
                size={28} />
                <h1 className="font-bold text-xl bg-gradient-to-r dark:from-white from-black via-purple-600 to-blue-600  text-transparent bg-clip-text">
                    Manage Users
                </h1>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className=''>Total Users <span className='font-bold text-violet-500'>( {users.length} ) :</span> </h3>
                <ManageUserTable users={users} />
            </div>
        </div>
    );
};

export default ManageUserPage;