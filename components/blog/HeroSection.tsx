"use client"
import React from 'react';
import { useState } from 'react';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="relative sm:overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Welcome to Our</span>
                <span className="block text-blue-600">Blog</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Discover the latest insights, tutorials, and updates from our team. We share our knowledge
                and experiences to help you stay ahead in the digital world.
              </p>
              <div className="mt-8">
                <form onSubmit={handleSearch} className="sm:mx-auto sm:max-w-xl lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="search" className="sr-only">
                        Search articles
                      </label>
                      <input
                        id="search"
                        type="text"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 text-base placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-blue-600 py-3 px-4 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;