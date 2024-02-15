import client from '@/tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import Navbar from '@/components/Navbar/Navbar';
import PortfolioDataLayer from '@/app/portfolio/[slug]/data_layer';

export default async function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const res = await client.queries.projects({
    relativePath: `/${slug}.mdx`,
  });

  return (
    <>
      <Navbar />
      <main className='pt-28 md:pt-40'>
        <PortfolioDataLayer
          variables={res.variables}
          data_={res.data}
          query={res.query}
        />
        <p>SKIBIDI PAPA</p>
        <p>SLUG {slug}</p>
      </main>
    </>
  );
}

// app/[...slug]/page.js

export async function generateStaticParams() {
  const projects = (await client.queries.projectsConnection()).data
    .projectsConnection.edges;

  if (!projects) return [];

  return projects.map((project) => {
    return {
      slug: project?.node?._sys.filename,
    };
  });
}
