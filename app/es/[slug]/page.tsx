import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';
import { LogIn } from 'lucide-react';

import { project_section, section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Tags } from '@/components/Tags';
import PortfolioDataLayer from '@/app/pt/[slug]/data_layer';

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
      <Navbar
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactButton='Contate-nos'
      />
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
          link={project.link}
        />
        <PortfolioDataLayer project={project} />
        <Tags tagList={project.tags as string[]} />
      </main>
      <Footer
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </>
  );
}

interface ProjectHeaderProps {
  title: string;
  description: string;
  executed_at: string;
  read_time: string;
  link?: string | null;
}

const ProjectHeader = ({
  title,
  description,
  executed_at,
  read_time,
  link,
}: ProjectHeaderProps) => {
  return (
    <div className={cn(project_section, 'mb-8')}>
      <h1 className='font-header text-3xl font-semibold leading-header md:text-5xl'>
        {title}
      </h1>
      <p className='font-header text-lg leading-header md:text-4xl'>
        {description}
      </p>
      <p className='flex gap-3 text-sm font-light md:text-base'>
        <span>{executed_at}</span>•<span>{read_time}</span>
      </p>
      {link ? (
        <Link
          href={link}
          className='mt-2 inline-flex gap-2 rounded-md bg-[#ffffff] px-3 py-2 font-body text-sm font-medium text-cta md:text-base'
          target='_blank'
          rel='noopener noreferrer'
        >
          Acesse a página <LogIn strokeWidth={1.5} />
        </Link>
      ) : null}
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
