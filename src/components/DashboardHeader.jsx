import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const DashboardHeader = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 ">
      <h1 className="text-lg sm:text-xl font-bold text-blue-900">Dashboard</h1>

      <div className="relative mt-2 sm:mt-0">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-900" />
        </span>
        <input
          type="text"
          placeholder="Search here..."
          className="pl-9 sm:pl-10 py-1 sm:py-2 rounded-3xl border outline-none w-full sm:w-auto"
        />
      </div>
    </header>
  );
}

export default DashboardHeader;
