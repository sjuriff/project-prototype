'use client'
import { Search } from 'lucide-react';
import { useState } from 'react';
import { HeartHandshake } from 'lucide-react';

export default function SupportHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-secondary text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className='flex flex-col items-center gap-2 mb-3 justify-center'>
          <div className='bg-primary p-4 rounded-full'>
            <HeartHandshake className="w-6 h-6 text-primary-text" />
          </div>
          <h1 className=" text-secondary-text text-3xl font-heading">Support </h1>

        </div>
        <p className="mb-10 text-secondary-text">
          Her finner du svar og får hjelp
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Hva kan vi hjelpe deg med?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-lg bg-white text-[#1d1d1d] placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f9f871]"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a]" />
        </div>
      </div>
    </div>
  );
}