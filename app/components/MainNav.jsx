import Link from 'next/link';
import React from 'react';

export default function MainNav() {
  return (
    <div className='hidden md:flex'>
      <Link
        href='/projects'
        className='px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
        Projects
      </Link>
      <Link
        href='/about'
        className='px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
        About
      </Link>
      <Link
        href='/contact'
        className='px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300'>
        Contact
      </Link>
    </div>
  );
}
