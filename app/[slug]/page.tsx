import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';
import { LogIn } from 'lucide-react';

import { h1, section } from '@/components/design-system';
import Navbar from '@/components/Navbar/Navbar';
import PortfolioDataLayer from '@/app/[slug]/data_layer';

export default async function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res = await getSpecificProject({ slug });
  const project = res.allProject[0];

  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <main className={cn('!max-w-[819px] pt-28 md:pt-40', section)}>
        <div className='font-header'>
          <h1 className='text-5xl font-semibold'>{project.title?.pt}</h1>
          <p className='text-4xl'>{project.description?.pt}</p>
          <p className='flex gap-3 font-light'>
            <span>{project.executedAt?.pt}</span>•
            <span>{project.read_time?.pt}</span>
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

export async function generateStaticParams() {
  const { allProject } = await getAllProjects();

  if (!allProject) return [];

  return allProject.map((project) => {
    return {
      slug: project.slug?.pt?.current,
    };
  });
}

export const dynamicParams = false;
export const revalidate = false;
