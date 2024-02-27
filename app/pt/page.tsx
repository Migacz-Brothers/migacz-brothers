import type { Metadata } from 'next';

import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Navbar
        home
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactButton='Contate-nos'
      />
      <main>
        <Hero
          alt='Gif com multiplas imagens de projetos selectionados'
          title={
            <>
              Ajudando empresas a criar produtos{' '}
              <strong className='gradient-bold'>digitais únicos</strong>.
            </>
          }
          paragraph={
            <>
              Tenha acesso a designers de alta qualidade, desenvolvedores
              frontend e backend, especialistas em branding e muito mais em um{' '}
              <strong className='font-medium underline'>único lugar</strong>
            </>
          }
          textButton='Contacte-nos em'
        />
        <AboutUs
          basePath='/pt'
          title='Sobre nós'
          subTitle='Design & Código'
          paragraph='Somos uma pequena empresa cooperativa do Sul do Brasil com uma equipe internacional de profissionais que uniram forças para criar produtos exclusivos para a web.'
          text='Ou leia mais'
        />
        <Portfolio
          title='Nossa vitrine de projetos'
          basePath='/pt'
          title_1={
            <>
              <strong className='gradient-bold'>DietIt!</strong> Uma plataforma
              feita para nutricionistas.
            </>
          }
          title_2={
            <>
              <strong className='gradient-bold'>Dwight Capital</strong> Sistema
              de página de comunicados de imprensa.
            </>
          }
          title_3={
            <>
              <strong className='gradient-bold'>Cordoce Stores</strong> Projeto
              de branding.
            </>
          }
          title_4={
            <>
              <strong className='gradient-bold'>Knox Abstract</strong> Website.
            </>
          }
          title_5={
            <>
              <strong className='gradient-bold'>1up Systems</strong> Website.
            </>
          }
        />
        <ContactUs
          title='Quer conversar? Nos envie uma mensagem!'
          paragraph='Nossa equipe está empolgada para se conectar com você. Entre em contato para discutir suas necessidades de software hoje!'
          textButton='Conta-te nos em'
        />
      </main>
      <Footer
        home
        basePath='/pt'
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Interfaces e Software Excepcionalmente Projetados | MigaczBrothers',
  description:
    'Descubra a arte do design excepcional e desenvolvimento de software com a MigaczBrothers. Especializamo-nos em criar experiências de usuário notáveis para transformar sua visão em realidade.',
  twitter: {
    images: ['https://migaczbrothers.com/meta_image_logoo.png'],
    title: 'Interfaces e Software Excepcionalmente Projetados | MigaczBrothers',
    card: 'summary',
    description:
      'Descubra a arte do design excepcional e desenvolvimento de software com a MigaczBrothers. Especializamo-nos em criar experiências de usuário notáveis para transformar sua visão em realidade.',
  },
  openGraph: {
    images: ['https://migaczbrothers.com/meta_image_logo.png'],
    title: 'Interfaces e Software Excepcionalmente Projetados | MigaczBrothers',
    url: 'https://migaczbrothers.com/pt',
    description:
      'Descubra a arte do design excepcional e desenvolvimento de software com a MigaczBrothers. Especializamo-nos em criar experiências de usuário notáveis para transformar sua visão em realidade.',
  },
};
