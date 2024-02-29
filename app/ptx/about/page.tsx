import type { Metadata } from 'next';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AboutUsHero from '@/app/[lang]/about/AboutUsHero';
import Team from '@/app/[lang]/about/Team';
import Tldr from '@/app/[lang]/about/Tldr';
import Values from '@/app/[lang]/about/Values';

export default function AboutUs() {
  return (
    <div>
      <Navbar
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactButton='Contate-nos'
      />
      <main>
        <AboutUsHero title='Sobre nós' />
        <Tldr
          title='O Resumo'
          paragraph='Sabemos que você é uma pessoa ocupada, então vamos direto ao ponto. Somos uma cooperativa de designers e desenvolvedores de software que se uniram para criar produtos de alta qualidade que, de outra forma, poderiam ser impraticáveis. Nossa equipe é global, com o escritório principal localizado no Sul do Brasil.'
          paragraph_2='Se você quiser saber mais, basta continuar rolando (a página).'
        />
        <Values
          title='Os Valores'
          subTitle_1='Seja direto'
          paragraph_1='Acreditamos que o melhor e mais autêntico trabalho acontece quando todos têm a liberdade de falar sobre qualquer coisa a qualquer momento.'
          subTitle_2='Nunca abandonamos um cliente'
          paragraph_2='Nós criamos tudo pensando na manutenção de longo prazo. Uma vez que você se torna nosso cliente, assumimos o compromisso de nunca te deixar na mão'
          subTitle_3='Não tenha medo do desconhecido'
          paragraph_3='Tudo muda, e isso acontece mais rapidamente nesta indústria. Aceitamos projetos mesmo que não tenhamos certeza de como realizar algumas partes deles.'
          subTitle_4='Seja criterioso'
          paragraph_4='Cada produto que criamos precisa ser aprovado pela nossa equipe. Queremos ser reconhecidos pela nossa qualidade, e esse é o nosso principal objetivo.'
        />
        <Team title='A Equipe' />
      </main>
      <Footer
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Sobre nós | MigaczBrothers',
  description:
    'Somos uma cooperativa de designers e desenvolvedores de software que se uniram para criar produtos de alta qualidade que, de outra forma, poderiam ser impraticáveis. Nossa equipe é global, com o escritório principal localizado no Sul do Brasil.',
  twitter: {
    images: ['https://migaczbrothers.com/meta_image_logoo.png'],
    title: 'Sobre nós | MigaczBrothers',
    card: 'summary',
    description:
      'Somos uma cooperativa de designers e desenvolvedores de software que se uniram para criar produtos de alta qualidade que, de outra forma, poderiam ser impraticáveis. Nossa equipe é global, com o escritório principal localizado no Sul do Brasil.',
  },
  openGraph: {
    images: ['https://migaczbrothers.com/meta_image_logo.png'],
    title: 'Sobre nós | MigaczBrothers',
    url: 'https://migaczbrothers.com/pt/about',
    description:
      'Somos uma cooperativa de designers e desenvolvedores de software que se uniram para criar produtos de alta qualidade que, de outra forma, poderiam ser impraticáveis. Nossa equipe é global, com o escritório principal localizado no Sul do Brasil.',
  },
};
