import { Linkedin, Github, Instagram } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <div className='fixed left-6 top-1/2 -translate-y-1/2 md:flex flex-col gap-4'>
      {[Linkedin, Github, Instagram].map((Icon, i) => (
        <a
          key={i}
          href='#'
          className='p-2 bg-white text-amber-400 shadow rounded hover:rounded-full'>
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
