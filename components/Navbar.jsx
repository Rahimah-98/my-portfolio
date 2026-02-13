'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4 md:px-12'>
        {/* Logo */}
        <Link
          href='#'
          className={`flex items-center gap-3 transition-opacity duration-200
            ${
              isOpen
                ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'
                : ''
            }
          `}>
          <Image
            src='/yellow-pr.png'
            alt='Logo'
            width={42}
            height={42}
            className='rounded-full md:w-12.5 md:h-12.5'
            priority
          />
          <span className='text-sm font-semibold text-gray-700 md:text-lg transition duration-200 hover:text-amber-400 hover:-translate-y-0.5'>
            Rahimah Ansari
          </span>
        </Link>

        {/* Nav Links */}
        <div
          className={`
          absolute left-0 top-full w-full flex-col bg-white shadow-md
          md:static md:flex md:w-auto md:flex-row md:bg-transparent md:shadow-none md:gap-8
          ${isOpen ? 'flex' : 'hidden'}
        `}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className='
                w-full border-b border-gray-200 py-5 text-center
                text-sm font-bold tracking-wider uppercase text-gray-700
                transition duration-200 hover:text-amber-400
                md:w-auto md:border-none md:py-0 hover:-translate-y-0.5 
              '>
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label='Toggle menu'
          className='md:hidden'>
          <Image
            src={isOpen ? '/svg/ham-menu-close.svg' : '/svg/ham-menu.svg'}
            alt='menu icon'
            width={22}
            height={22}
            className='block'
          />
        </button>
      </div>
    </nav>
  );
}
