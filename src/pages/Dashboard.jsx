import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Calender from '../components/Calender';
import PerformanceChart from '../components/PerformanceChart';
import SummaryCards from '../components/SummaryCard';
import Finance from '../components/Finance';
import CustomerArrival from '../components/CustomerArrival';
import Statistics from '../components/Statistics';

const Dashboard = () => {
  return (
    <div className="p-12 bg-blue-50 min-h-screen">
      <DashboardHeader />
      <SummaryCards />

      <div className="grid grid-cols-1 gap-4 mt-4">
        <PerformanceChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-6">
        <Calender />
        <Finance />
      </div>

      <div className="grid grid-cols-1 gap-4 mt-9">
        <CustomerArrival/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-6">
        <Statistics/>
        
      </div>

    </div>
  );
};

export default Dashboard;
