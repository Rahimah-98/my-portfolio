import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative text-white bottom-0 w-full -mb-50'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black' />

      <div className='relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-3'>Rahimah Ansari</h3>
          <p className='text-gray-300 text-sm leading-relaxed max-w-md'>
            Frontend developer building modern and high-performance web
            experiences.
          </p>
        </div>

        <div className=' items-end flex flex-col'>
          <h4 className='font-semibold mb-6 text-xl'>Social</h4>
          <div className='md:flex flex-row gap-4 items-center justify-end'>
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href='#'
                className='p-2 bg-black border text-amber-400 shadow rounded hover:rounded-full'>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='relative z-10 text-center border-t border-amber-400/20 py-6 text-sm text-gray-400'>
        © {new Date().getFullYear()} Developed with 💛 by Rahimah Ansari
      </div>
    </footer>
  );
}
