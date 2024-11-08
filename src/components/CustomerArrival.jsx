import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { IoMdSettings } from "react-icons/io";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CustomerArrival = () => {
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1), // Days 1 to 31
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 500) + 50), // Random data
        borderColor: 'rgba(99, 102, 241, 1)', // Tailwind blue-500 color
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#ffffff',
        tension: 0.1, // Smooth curve
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 500) + 50), // Random data
        borderColor: 'rgba(75, 85, 99, 1)', // Tailwind gray-700 color
        backgroundColor: 'rgba(75, 85, 99, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 85, 99, 1)',
        pointBorderColor: '#ffffff',
        tension: 0.1,
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
          color: '#1F2937', // Tailwind gray-800 for better contrast
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: '#E5E7EB',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#D1D5DB', // Tailwind gray-300 color for grid lines
        },
        ticks: {
          color: '#6B7280', // Tailwind gray-500 for labels
        },
      },
      y: {
        grid: {
          color: '#D1D5DB',
        },
        ticks: {
          color: '#6B7280',
        },
        suggestedMin: 0,
        suggestedMax: 600,
      },
    },
  };

  return (
    <div className="p-10 bg-white shadow-xl rounded-xl h-[280px] md:h-[350px] lg:h-[400px] relative">
      <h2 className="text-lg sm:text-xl text-blue-900 font-bold mb-2">Customer Arrival</h2>
      <IoMdSettings className="absolute top-4 right-4 text-black-600 hover:text-blue-600 cursor-pointer" />
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomerArrival;
