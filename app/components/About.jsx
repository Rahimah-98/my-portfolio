import Skills from './Skills';

export default function About() {
  return (
    <section className='py-28 px-6 max-w-6xl mx-auto text-gray-600'>
      <h2 className='text-center text-3xl font-bold mb-16'>ABOUT ME</h2>

      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <h3 className='font-semibold text-xl mb-4'>Get to know me!</h3>
          <p className='text-gray-600 leading-relaxed'>
            I&apos;m a frontend developer focused on building responsive web
            applications. I enjoy turning designs into real products and
            improving performance and UX.
          </p>

          <button className='mt-6 bg-amber-400 text-white px-6 py-2 rounded'>
            CONTACT
          </button>
        </div>

        <Skills />
      </div>
    </section>
  );
}
