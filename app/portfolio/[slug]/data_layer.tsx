'use client';

import { Exact, ProjectsQuery } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface PortfolioDataLayerProps {
  variables: Exact<{
    relativePath: string;
  }>;
  data_: ProjectsQuery;
  query: string;
}

export default function PortfolioDataLayer({
  variables,
  data_,
  query,
}: PortfolioDataLayerProps) {
  const {
    data: { projects: data },
  } = useTina({
    variables: variables,
    data: data_,
    query: query,
  });

  return (
    <>
      <h1>titulo {data.title}</h1>
      <TinaMarkdown content={data.body} />
      <p>{data.date}</p>
    </>
  );
}
