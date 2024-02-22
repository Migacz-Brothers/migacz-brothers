import imageUrlBuilder from '@sanity/image-url';

const urlBuilder = imageUrlBuilder({
  projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
});

export default urlBuilder;
