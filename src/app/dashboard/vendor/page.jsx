import ProfileCard from '@/components/dashboard/ProfileCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const VendorDashboardPage = async() => {
    const session = await auth.api.getSession({
            headers : await headers()
        })
        const user = session?.user;
        // console.log(user);
    
      return <ProfileCard user={user} />;
};

export default VendorDashboardPage;