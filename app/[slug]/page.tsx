import { getProejects, getSpecificProeject } from '@/lib/sanity';
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

  return (
    <>
      <Navbar />
      <main className='pt-28 md:pt-40'>
        <PortfolioDataLayer />
        <p>SKIBIDI PAPA</p>
        <p>SLUG {slug}</p>
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
