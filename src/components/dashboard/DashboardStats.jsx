import React from 'react';
import StatCard from './StatCard';
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons'; 

const DashboardStats = () => {
  const statsData = [
    { id: 1, title: "Total Job Posts", value: "48", icon: Briefcase },
    { id: 2, title: "Total Applicants", value: "1,284", icon: Persons },
    { id: 3, title: "Active Jobs", value: "18", icon: Thunderbolt },
    { id: 4, title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {statsData.map((stat) => (
        <StatCard 
          key={stat.id}
          icon={stat.icon} 
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
};

export default DashboardStats;