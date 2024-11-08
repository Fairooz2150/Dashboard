import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const data = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        label: 'User Statistics',
        data: [50, 50], 
        backgroundColor: [
          'rgba(96, 61, 255, 1)', // Active Users color (deep purple)
          'rgba(96, 61, 255, 0.2)', // Inactive Users color (lighter purple)
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#6B7280', // Tailwind gray-500 for label color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#1F2937', // Tailwind gray-800 for title color
        bodyColor: '#1F2937',
        borderColor: '#D1D5DB',
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="p-6 mt-10 bg-white shadow-lg rounded-xl h-[300px] md:h-[400px] lg:h-[450px]">
      <h3 className="text-lg sm:text-xl  text-blue-900 font-bold mb-4">Statistics</h3>
      <div className="h-[80%] ">
        <Doughnut data={data} options={options} className='' />
      </div>
    </div>
  );
};

export default Statistics;
