import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Dopefolio',
    desc: 'Open source portfolio template.',
    image: '/projects/1.png',
  },
  {
    title: 'Wilsonport',
    desc: 'Transport logistics platform.',
    image: '/projects/2.png',
  },
];

export default function Projects() {
  return (
    <section className='bg-gray-50 py-28 px-6'>
      <h2 className='text-center text-3xl font-bold mb-20 text-gray-600'>
        PROJECTS
      </h2>

      <div className='max-w-6xl mx-auto space-y-28'>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
