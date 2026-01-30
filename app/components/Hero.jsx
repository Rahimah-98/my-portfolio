export default function Hero() {
  return (
    <section
      className='relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center'
      style={{
        backgroundImage: "url('/cover.jpg')",
      }}>
      {/* Overlay */}
      <div className='absolute inset-0 bg-gray-50' />

      {/* Content */}
      <div className='relative z-10'>
        <h1 className='text-5xl font-extrabold tracking-tight text-gray-300'>
          HEY, I&apos;M <span className='text-gray-600'>Rahimah Ansari</span>
        </h1>

        <p className='mt-6 max-w-xl text-gray-600'>
          A result-oriented web developer building and managing websites and web
          applications that lead to the success of the overall product.
        </p>

        <button className='mt-8 bg-amber-400 text-white px-24 py-4 rounded-lg font-bold hover:bg-amber-500 transition'>
          PROJECTS
        </button>
      </div>
    </section>
  );
}
