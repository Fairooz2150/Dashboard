import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Finance = () => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'This Week',
            data: [70, 50, 30, 45, 60, 20, 80],
            backgroundColor: '#FFB946',
          },
          {
            label: 'Last Week',
            data: [60, 65, 40, 55, 35, 70, 65],
            backgroundColor: '#FF5C5C',
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#374151', // Tailwind gray-700 color for better contrast
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return ` ${tooltipItem.raw} Income`;
              },
            },
            backgroundColor: '#6B46C1', // Tailwind purple-600 color
            titleColor: '#FFFFFF',
            bodyColor: '#FFFFFF',
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
            },
            ticks: {
              color: '#374151', // Tailwind gray-700 color
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: '#374151', // Tailwind gray-700 color
            },
            grid: {
              color: '#E5E7EB', // Tailwind gray-200 color for grid lines
            },
          },
        },
      };
    
  return (
    <div className=" mt-10 p-4 bg-white shadow-md rounded-xl">
    <div className="flex justify-between items-center mb-4">
      <h2 className=" text-lg sm:text-xl  text-blue-900 font-bold ">Finance</h2>
      <div className="flex space-x-4">
        <div className="flex items-center text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></span> This Week
        </div>
        <div className="flex items-center text-sm">
          <span className="w-2 h-2 rounded-full bg-red-400 mr-1"></span> Last Week
        </div>
      </div>
    </div>
    <div className="relative h-64">
      <Bar data={data} options={options} />
    </div>
    
  </div>
);
};



export default Finance;
