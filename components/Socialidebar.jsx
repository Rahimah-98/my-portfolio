import { Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SocialSidebar() {
  return (
    <div className='hidden md:flex absolute left-4 top-70 z-40 flex-col gap-4'>
      {[Linkedin, Github, Instagram].map((Icon, i) => (
        <Link
          key={i}
          href='/'
          className='p-2 bg-gray-600 shadow-sm rounded transition duration-300 hover:bg-amber-400 hover:rotate-180 hover:text-white hover:-translate-y-0.5'>
          <Icon size={18} />
        </Link>
      ))}
    </div>
  );
}
