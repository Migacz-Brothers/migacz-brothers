import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';
import { LogIn } from 'lucide-react';

import { project_section, section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Tags } from '@/components/Tags';
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
      <main
        className={cn(
          'flex !max-w-[1052px] flex-col !px-3 pb-32 pt-28 md:!px-8 md:pt-40',
          section,
        )}
      >
        <ProjectHeader
          title={String(project.title?.pt)}
          description={String(project.description?.pt)}
          executed_at={String(project.executedAt?.pt)}
          read_time={String(project.read_time?.pt)}
        />
        <PortfolioDataLayer project={project} />
        <Tags tagList={project.tags as string[]} />
      </main>
      <Footer />
    </>
  );
}

interface ProjectHeaderProps {
  title: string;
  description: string;
  executed_at: string;
  read_time: string;
}

const ProjectHeader = ({
  title,
  description,
  executed_at,
  read_time,
}: ProjectHeaderProps) => {
  return (
    <div className={cn(project_section, 'mb-8 font-header')}>
      <h1 className='text-5xl font-semibold'>{title}</h1>
      <p className='text-4xl'>{description}</p>
      <p className='mb-4 flex gap-3 font-light'>
        <span>{executed_at}</span>•<span>{read_time}</span>
      </p>
      <Link
        href='www.google.com'
        className='inline-flex gap-2 rounded-md bg-[#ffffff] px-3 py-2 font-medium text-cta'
      >
        Acesse a página <LogIn strokeWidth={1.5} />
      </Link>
    </div>
  );
};

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
