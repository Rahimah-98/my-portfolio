import Skills from './Skills';

export default function About() {
  return (
    <section className='py-28 px-6 max-w-6xl mx-auto text-gray-700'>
      <h2 className='text-center text-3xl font-bold mb-16'>ABOUT ME</h2>

      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <h3 className='font-semibold text-xl mb-10'>Get to know me!</h3>
          <p className='text-gray-700 leading-relaxed'>
            I&apos;m a frontend developer focused on building responsive web
            applications. I enjoy turning designs into real products and
            improving performance and UX. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempora unde eveniet ducimus quas
            veniam esse corporis cum, assumenda voluptatum. Minima! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quis ipsum architecto
            dicta, nesciunt nostrum commodi molestiae excepturi nulla cupiditate
            fugit!
          </p>

          <button className='mt-10 btn'>CONTACT</button>
        </div>

        <Skills />
      </div>
    </section>
  );
}
