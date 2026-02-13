export default function Hero() {
  return (
    <section
      id='/'
      className='relative min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center px-6'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-gray-50/90' />
      <h1>Hello From Debuging.</h1>

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto'>
        <h1 className='text-2xl md:text-6xl font-extrabold uppercase text-gray-700 mb-12'>
          Hi, I&apos;m Rahimah Ansari
        </h1>

        <p className='max-w-xl mx-auto text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          tenetur aliquam consequuntur ex eaque recusandae maxime. Velit
          quisquam atque ad.
        </p>

        <a
          href='#projects'
          className='inline-block mt-10 shadow-lg bg-amber-400 text-white px-20 py-4 hover:-translate-y-0.5 rounded font-bold text-2xl duration-300 transition-all'>
          Projects
        </a>
      </div>
    </section>
  );
}
