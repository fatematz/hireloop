// "use client"; 

// import React from 'react';
// import { useSession } from "@/lib/auth-client"; 

// const RecruiterDashboardHomePage = () => {
//     const { data: session, isPending } = useSession();

//     if (isPending) {
//         return <div className="text-white p-8">Loading...</div>;
//     }

//     // if (!session) {
//     //     return <div className="text-white p-8">Please log in to access the dashboard.</div>;
//     // }

//     const user = session?.user;
//     console.log("This is session" ,session)

//     return (
//         <div className="text-white p-8 bg-slate-900 min-h-screen">
//             <h2>I am a Recruiter</h2>
            
//             <div className="mt-4 p-4 border border-gray-700 rounded bg-slate-800 max-w-md">
//                 <h3 className="text-lg font-semibold mb-2">User Profile</h3>
//                 <p><strong>Name:</strong> {user?.name}</p>
//                 <p><strong>Email:</strong> {user?.email}</p>
                
//                 <p><strong>Role:</strong> <span className="capitalize text-indigo-400">{user?.role}</span></p>
//             </div>
//         </div>
//     );
// };

// export default RecruiterDashboardHomePage;





"use client"; 

import React from 'react';
import { useSession } from "@/lib/auth-client"; 
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentApplication from '@/components/dashboard/RecentApplication';

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div className="text-white p-8">Loading...</div>;
    }

    const user = session?.user;
    console.log("This is session" ,session);

    return (
        <div className="text-white p-8 bg-slate-900 min-h-screen flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-semibold">I am a Recruiter</h2>
            </div>
            
            <DashboardStats/>
            <RecentApplication/>

            {/* <div className="mt-4 p-4 border border-gray-700 rounded bg-slate-800 max-w-md">
                <h3 className="text-lg font-semibold mb-2">User Profile</h3>
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> <span className="capitalize text-indigo-400">{user?.role}</span></p>
            </div> */}
        </div>
    );
};

export default RecruiterDashboardHomePage;