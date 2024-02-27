import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';
import { LogIn } from 'lucide-react';

import { project_section, section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Tags } from '@/components/Tags';
import PortfolioDataLayer from '@/app/es/[slug]/data_layer';

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
        basePath='/es'
        homeButton='Inicio'
        aboutUsButton='Sobre Nosotros'
        portfolioButton='Portafolio'
        contactButton='Contáctenos'
      />
      <main
        className={cn(
          'flex !max-w-[1052px] flex-col !px-3 pb-32 pt-28 md:!px-8 md:pt-40',
          section,
        )}
      >
        <ProjectHeader
          title={String(project.title)}
          description={String(project.description?.es)}
          executed_at={String(project.executedAt?.es)}
          read_time={String(project.read_time?.es)}
          link={project.link}
        />
        <PortfolioDataLayer project={project} />
        <Tags tagList={project.tags as string[]} />
      </main>
      <Footer
        basePath='/es'
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
      slug: project.slug?.current,
    };
  });
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res = await getSpecificProject({ slug });
  const project = res.allProject[0];

  return {
    title: `${project.title} | MigaczBrothers`,
    description: `Lea sobre la ejecución del proyecto ${project.title} y las tecnologías utilizadas.`,
    twitter: {
      images: ['https://migaczbrothers.com/meta_image_logoo.png'],
      title: `${project.title} | MigaczBrothers`,
      card: 'summary',
      description: `Lea sobre la ejecución del proyecto ${project.title} y las tecnologías utilizadas.`,
    },
    openGraph: {
      images: ['https://migaczbrothers.com/meta_image_logo.png'],
      title: `${project.title} | MigaczBrothers`,
      url: `https://migaczbrothers.com/es/${project.slug}`,
      description: `Lea sobre la ejecución del proyecto ${project.title} y las tecnologías utilizadas.`,
    },
  };
}
