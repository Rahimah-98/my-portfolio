import Image from 'next/image';

export default function ProjectCard({ title, desc, image }) {
  return (
    <div className='grid md:grid-cols-2 gap-12 items-center'>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className='rounded-xl shadow'
      />

      <div>
        <h3 className='text-2xl font-bold text-gray-600'>{title}</h3>
        <p className='mt-4 text-gray-600'>{desc}</p>

        <button className='mt-6 bg-amber-400 text-white px-6 py-2 rounded'>
          CASE STUDY
        </button>
      </div>
    </div>
  );
}
