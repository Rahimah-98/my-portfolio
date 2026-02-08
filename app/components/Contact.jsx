export default function Contact() {
  return (
    <section className='py-28 px-6 max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-12 text-gray-600 border-b-2 border-amber-400 pb-3 inline-block'>
        CONTACT
      </h2>

      <form className='bg-white shadow-lg p-16 rounded space-y-8 max-w-4xl'>
        <label
          htmlFor='message'
          className='text-gray-400 flex items-start mb-3 ml-2'>
          Name
        </label>
        <input
          type='text'
          placeholder='Enter your name'
          className='
            w-full
            px-6 py-4
            text-md
            bg-gray-5
            rounded
            transition-all duration-300
            focus:outline-none
            focus:ring-1 focus:ring-gray-300
            placeholder:text-gray-300 bg-gray-50
          '
        />
        <label
          htmlFor='message'
          className='text-gray-400 flex items-start mb-3 ml-2'>
          Email
        </label>
        <input
          type='email'
          placeholder='Enter your email'
          className='
              w-full
              px-6 py-4
              text-md
              rounded
              transition-all duration-300
              focus:outline-none
              focus:ring-1 focus:ring-gray-300
              placeholder:text-gray-300 bg-gray-50
            '
        />
        <label
          htmlFor='message'
          className='text-gray-400 flex items-start mb-3 ml-2'>
          Message
        </label>
        <textarea
          id='message'
          placeholder='Enter your message'
          className='
            w-full
            px-6 py-4
            text-md
            bg-gray-5
            rounded
            h-48
            transition-all duration-300
            focus:outline-none
            focus:ring-1 focus:ring-gray-300
            placeholder:text-gray-300 bg-gray-50
            '
        />
        <button className='btn'>SUBMIT</button>
      </form>
    </section>
  );
}
