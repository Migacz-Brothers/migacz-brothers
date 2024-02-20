import { createClient } from '@sanity/client';

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'a395zzsr',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getProejects() {
  const posts = await client.fetch('*[_type == "project"]');
  return posts;
}

export async function getSpecificProeject({ slug }: { slug: string }) {
  const post = await client.fetch(
    `*[_type == "project" && slug.pt.current == "${slug}"]`,
  );

  return post;
}
