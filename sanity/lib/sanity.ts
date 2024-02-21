import { getSdk } from '@/generated';
import { GraphQLClient } from 'graphql-request';

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const sdk = getSdk(
  new GraphQLClient(
    `https://a395zzsr.api.sanity.io/v2023-08-01/graphql/production/default`,
  ),
);

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getProejects() {
//   const posts = await client.fetch('*[_type == "project"]');
//   return posts;
// }

export async function getSpecificProject({ slug }: { slug: string }) {
  const post = await sdk.ProjectBySlug({ slug });

  return post;
}
