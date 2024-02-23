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
              Ayudando a las empresas a crear{' '}
              <strong className='gradient-bold'>productos digitales</strong>.
            </>
          }
          paragraph={
            <>
              Accede a diseñadores de alta calidad, desarrolladores frontend y
              backend, especialistas en branding y mucho más en un{' '}
              <strong className='font-medium underline'>único lugar</strong>
            </>
          }
          textButton='Contáctenos en'
        />
        <AboutUs
          basePath='/es'
          title='Sobre nosotros'
          subTitle='Diseño & Código'
          paragraph='Somos una pequeña empresa cooperativa del Sur de Brasil con un equipo internacional de profesionales que han unido fuerzas para crear productos exclusivos para la web.'
          text='o lee más'
        />
        <Portfolio
          title='Nuestra exhibición de proyectos'
          title_1={
            <>
              <strong className='gradient-bold'>DietIt!</strong> Una plataforma
              diseñada para nutricionistas
            </>
          }
          title_2={
            <>
              <strong className='gradient-bold'>Dwight Capital</strong> Sistema
              de página de comunicados de prensa
            </>
          }
          title_3={
            <>
              <strong className='gradient-bold'>Cordoce Stores</strong> Proyecto
              de branding
            </>
          }
          title_4={
            <>
              <strong className='gradient-bold'>Knox Abstract</strong> Página
              web
            </>
          }
          title_5={
            <>
              <strong className='gradient-bold'>1up Systems</strong> Página web
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
