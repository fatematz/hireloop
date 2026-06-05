"use client";

import React from 'react';

// Props হিসেবে icon, title value নেওয়া হচ্ছে
const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="bg-[#121212] border border-gray-800 p-6 rounded-xl flex flex-col gap-4 w-full">
      <div className="bg-gray-800/50 text-gray-400 p-2.5 rounded-lg w-fit flex items-center justify-center">
        <Icon width="20" height="20" />
      </div>
      
      {/* টেক্সট ও নাম্বার */}
      <div className="flex flex-col gap-1">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <span className="text-white text-3xl font-bold tracking-tight">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;