import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  ogType?: string;
  ogImgUrl?: string;
}

const Seo = ({
  title,
  description,
  ogType = 'website',
  ogImgUrl = '/squared_logo.png',
}: SeoProps): JSX.Element => {
  return (
    <Head>
      {/*
      Fundamental head elements important for SEO.
  */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />

      {/*
      Open graph meta tags.
  */}
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content={ogType} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImgUrl} />
    </Head>
  );
};

export default Seo;
