export default function Contact() {
  return (
    <section className='py-28 px-6 max-w-3xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-12 text-gray-600'>CONTACT</h2>

      <form className='bg-white shadow-lg p-8 rounded-xl space-y-4'>
        <input className='w-full border p-3 rounded' placeholder='Name' />
        <input className='w-full border p-3 rounded' placeholder='Email' />
        <textarea
          className='w-full border p-3 rounded h-32'
          placeholder='Message'
        />

        <button className='bg-amber-400 text-white px-8 py-3 rounded'>
          SUBMIT
        </button>
      </form>
    </section>
  );
}
