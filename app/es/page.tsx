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
        basePath='es'
        homeButton='Inicio'
        aboutUsButton='Sobre Nosotros'
        portfolioButton='Portafolio'
        contactButton='Contáctenos'
      />
      <main>
        <Hero
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
        basePath='es'
        homeButton='Inicio'
        aboutUsButton='Sobre nosotros'
        portfolioButton='Portafolio'
        contactUsButton='Contáctenos'
      />
    </>
  );
}
