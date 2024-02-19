import Link from 'next/link';
import cn from 'clsx';
import { LogIn } from 'lucide-react';

import { getProejects, getSpecificProeject } from '@/lib/sanity';
import { section } from '@/components/design-system';
import Navbar from '@/components/Navbar/Navbar';
import PortfolioDataLayer from '@/app/[slug]/data_layer';

export default async function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = (await getSpecificProeject({ slug }))[0];

  if (!project) {
    return null;
  }

  console.log(project);

  return (
    <>
      <Navbar />
      <main className={cn('!max-w-[819px] pt-28 md:pt-40', section)}>
        <div className='font-header'>
          <h1 className='text-5xl font-semibold'>{project.title}</h1>
          <p className='text-4xl'>{project.description}</p>
          <p className='flex gap-3 font-light'>
            <span>{project.executedAt}</span>•<span>{project.read_time}</span>
          </p>
          <Link
            href='www.google.com'
            className='inline-flex gap-2 rounded-md bg-[#ffffff] px-3 py-2 font-medium text-cta'
          >
            Acesse a página <LogIn strokeWidth={1.5} />
          </Link>
        </div>
        <PortfolioDataLayer />
      </main>
    </>
  );
}

// app/[...slug]/page.js

// export async function generateStaticParams() {
//   const projects = await getProejects();
//   console.log('projects', projects);

//   if (!projects) return [];

//   return projects.map((project) => {
//     return {
//       slug: project?.node?._sys.filename,
//     };
//   });
// }
