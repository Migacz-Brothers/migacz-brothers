import { notFound } from 'next/navigation';
import { Locale } from '@/i18n.config';
import meta_image_logo from '@/public/meta_image_logo.png';
import { getAllProjects, getSpecificProject } from '@/sanity/lib/sanity';
import cn from 'clsx';

import { getDictionary } from '@/lib/dictionary';
import { section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ProjectContent from '@/components/ProjectContent';
import ProjectHeader from '@/components/ProjectHeader';
import { Tags } from '@/components/Tags';

export default async function ProjectPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const res = await getSpecificProject({ slug });
  const project = res.allProject[0];

  if (!project) return notFound();

  const { navigation } = await getDictionary(lang);

  return (
    <>
      <Navbar
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
      <main
        className={cn(
          'flex !max-w-[1052px] flex-col !px-3 pb-32 pt-28 md:!px-8 md:pt-40',
          section,
        )}
      >
        <ProjectHeader
          title={String(project.title)}
          description={String(project.description?.[lang])}
          executed_at={String(project.executedAt?.[lang])}
          read_time={String(project.read_time?.[lang])}
          link={project.link}
          lang={lang}
        />
        <ProjectContent project={project} lang={lang} />
        <Tags tagList={project.tags as string[]} />
      </main>
      <Footer
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
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
    description: `Read about the ${project.title} project execution and the technologies used.`,
    twitter: {
      images: [meta_image_logo.src],
      title: `${project.title} | MigaczBrothers`,
      card: 'summary',
      description: `Read about the ${project.title} project execution and the technologies used.`,
    },
    openGraph: {
      images: [meta_image_logo.src],
      title: `${project.title} | MigaczBrothers`,
      url: `https://migaczbrothers.com/${project.slug}`,
      description: `Read about the ${project.title} project execution and the technologies used.`,
    },
  };
}
