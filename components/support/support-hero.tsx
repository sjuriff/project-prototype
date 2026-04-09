'use client'
import { Search } from 'lucide-react';
import { useState } from 'react';
import { HeartHandshake } from 'lucide-react';

export default function SupportHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-secondary text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className='relative w-fit mx-auto '>
          <div className='absolute z-0 -top-8 md:-top-10 -right-8 items-center flex justify-center gap-3 p-4 bg-primary rounded-full'>
            <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-primary-text" />
          </div>
          <h1 className=" text-primary-text relative z-10 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-4xl md:text-5xl font-heading">Support </h1>

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
            className="w-full px-6 py-4 pr-12 rounded-full bg-surface text-secondary-text border border-tertiary placeholder:text-secondary-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-heading" />
        </div>
      </div>
    </div>
  );
}