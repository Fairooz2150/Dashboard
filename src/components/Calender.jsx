import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

// Utility function to generate days of the month
const generateCalendarDays = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const calendarDays = [];

  // Add empty days for the first week if the month does not start on Sunday
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return calendarDays;
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(2); // March (0-indexed)
  const [currentYear, setCurrentYear] = useState(2021);

  // Example highlighted days
  const highlightedDays = {
    purple: [8],
    orange: [23],
    yellow: [20],
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = generateCalendarDays(currentYear, currentMonth);

  return (
    <div className=" mt-10 p-4  bg-white shadow-md rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg sm:text-xl  text-blue-900 font-bold text-left">Calendar</h2>
        <div className="text-gray-600 text-sm flex">March 2021 <FaCaretDown className='mt-1'/> </div>
      </div>
      <div className="grid grid-cols-7 text-center mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-gray-500 font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="h-10"></div>; // Empty placeholder for non-day cells
          }

          let bgColor = '';
          if (highlightedDays.purple.includes(day)) {
            bgColor = 'bg-purple-800 text-white ';
          } else if (highlightedDays.orange.includes(day)) {
            bgColor = 'bg-orange-600 text-white';
          } else if (highlightedDays.yellow.includes(day)) {
            bgColor = 'bg-yellow-500 text-white';
          } else {
            bgColor = 'text-gray-600';
          }

          return (
            <div
              key={index}
              className={`h-10 flex items-center justify-center rounded-full ${bgColor}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
