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
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Week ',
        data: [20,30,45,27,4,40,54,33,3,32,77,40],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.2)', // Transparent gradient fill
        borderWidth: 3,
        tension: 0.4, // Smoother curve
        pointRadius: 0, // No point markers by default
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#F59E0B',
        fill:true,
      },
      {
        label: 'Last Week ',
        data: [0,40,75,28,1,20,47,20,9,50,70,49],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)', // Transparent gradient fill
        borderWidth: 3,
        tension: 0.4, // Smoother curve
        pointRadius: 0, // No point markers by default
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#EF4444',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end', // Aligns legend to the right
        labels: {
          usePointStyle: true, // Uses small round symbol instead of box
          pointStyle: 'circle',
          color: '#686868', // Gray color for labels
          font: {
            size: 10,
           
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#FFFFFF',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        titleFont: {
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,

          color: 'rgba(209, 213, 219, 0.5)', // Light gray grid lines
        },
        ticks: {
          color: '#6B7280', // Gray color for x-axis labels
        },
      },
      y: {
        grid: {
          display: false,
         
          color: 'rgba(209, 213, 219, 0.5)', // Light gray grid lines
        },
        ticks: {
          color: '#6B7280', // Gray color for y-axis labels
          stepSize: 25, // Display only at intervals of 25
          callback: (value) => (value % 25 === 0 ? value : null), // Displays only specified tick values
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="w-full h-[25rem] md:h-[25rem] lg:h-[20rem] p-4 bg-white shadow-md rounded-xl ">
      <h2 className=" text-lg sm:text-xl  text-blue-900 font-bold text-left mb-4">Performance</h2>
      <Line data={data} options={options} />
      
    </div>
  );
};

export default PerformanceChart;
