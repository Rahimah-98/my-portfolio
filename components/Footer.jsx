import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative text-white w-full -mb-50'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black' />

      <div className='relative max-w-7xl mx-auto px-2 py-20 grid md:grid-cols-2 gap-136'>
        <div>
          <h3 className='text-2xl font-bold mb-3 text-amber-400'>
            Rahimah Ansari
          </h3>
          <p className='text-gray-300 text-sm leading-relaxed max-w-md'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            fugit odio exercitationem nemo sed ut?
          </p>
        </div>

        <div className=' items-start flex flex-col'>
          <h4 className='font-semibold mb-6 text-2xl'>Social</h4>
          <div className='md:flex flex-row gap-4 items-center justify-end'>
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href='#'
                className='p-2 bg-black border text-amber-400 rounded hover:-translate-y-0.5 duration-200'>
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='relative z-10 text-center border-t border-amber-400/20 py-6 text-xs text-gray-400'>
        © {new Date().getFullYear()} Developed with 💛 by Rahimah Ansari
      </div>
    </footer>
  );
}
