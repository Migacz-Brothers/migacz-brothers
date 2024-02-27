import { notFound } from 'next/navigation';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';

import { section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ProjectContent from '@/components/ProjectContent';
import ProjectHeader from '@/components/ProjectHeader';
import { Tags } from '@/components/Tags';

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
          title={String(project.title)}
          description={String(project.description?.pt)}
          executed_at={String(project.executedAt?.pt)}
          read_time={String(project.read_time?.pt)}
          link={project.link}
        />
        <ProjectContent project={project} lang='pt' />
        <Tags tagList={project.tags as string[]} />
      </main>
      <Footer
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </>
  );
}

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
    description: `Leia sobre a execução do projeto ${project.title} e as tecnologias utilizadas.`,
    twitter: {
      images: ['https://migaczbrothers.com/meta_image_logoo.png'],
      title: `${project.title} | MigaczBrothers`,
      card: 'summary',
      description: `Leia sobre a execução do projeto ${project.title} e as tecnologias utilizadas.`,
    },
    openGraph: {
      images: ['https://migaczbrothers.com/meta_image_logo.png'],
      title: `${project.title} | MigaczBrothers`,
      url: `https://migaczbrothers.com/pt/${project.slug}`,
      description: `Leia sobre a execução do projeto ${project.title} e as tecnologias utilizadas.`,
    },
  };
}
