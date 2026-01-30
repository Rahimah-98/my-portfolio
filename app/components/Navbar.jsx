import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-white shadow-sm z-50'>
      <div className='max-w-8xl mx-auto px-9 py-3 flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <Image
            src='/yellow-pr.png'
            alt='profile image'
            width={40}
            height={40}
            className='rounded-full object-cover'
          />
          <span className='font-semibold text-xl text-gray-600 hover:text-amber-400'>
            Rahimah Ansari
          </span>
        </div>

        <ul className='hidden md:flex gap-8 text-md font-semibold'>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li
              key={item}
              className='text-gray-600 hover:text-amber-400 cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
