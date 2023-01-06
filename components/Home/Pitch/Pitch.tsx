import { PitchArticle } from '.';

import SeoImage from '../../../public/Pitch/Seo.png';
import DesignAndCopyImage from '../../../public/Pitch/DesignAndCopy.png';
import PaymentMethods from '../../../public/Pitch/PaymentMethods.png';
import Maintenance from '../../../public/Pitch/Maintenance.png';
import CustomSystems from '../../../public/Pitch/CustomSystems.png';

const PitchList = [
  {
    title: 'AI-Driven copywrite & design',
    description:
      'Unleash the full potential of your brand with AI-powered creative content. Our advanced AI tools allow us to deliver unparalleled user experiences and copywriting that will elevate your brand to new heights.',
    image: DesignAndCopyImage,
  },
  {
    title: 'SEO',
    description:
      'Boost your online presence with our SEO services. We can generate traffic and leads by creating marketing campaigns on multiple platforms, and making sure your website is ready for it by improving its performance, accessibility and SEO.',
    image: SeoImage,
  },
  {
    title: 'Flexible payment methods',
    description:
      'We accept credit cards, wire transfers, and crypto. And we can implement these payment methods on your company.',
    image: PaymentMethods,
  },
  {
    title: 'Maintenance',
    description:
      "Whether you need new designs, minor interface adjustments, a new system, or additional pages, we've got you covered. Our commitment to our clients is unwavering, and we never drop a project.",
    image: Maintenance,
  },
  {
    title: 'Custom systems',
    description:
      'Using NodeJS, our experienced engineers can develop you unique and reliable systems. If you need an API, chatbot, system integration, CMS, we’ve got you covered.',
    image: CustomSystems,
  },
];

const PitchComponent = (): JSX.Element => {
  return (
    <section>
      {PitchList.map(({ title, description, image }, i) => (
        <PitchArticle
          title={title}
          description={description}
          image={image}
          key={`pitch_${i}`}
          reversed={Boolean(i % 2)}
        />
      ))}
    </section>
  );
};

export default PitchComponent;
