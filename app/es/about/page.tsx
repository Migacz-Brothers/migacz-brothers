import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AboutUsHero from '@/app/about/AboutUsHero';
import Team from '@/app/about/Team';
import Tldr from '@/app/about/Tldr';
import Values from '@/app/about/Values';

export default function AboutUs() {
  return (
    <div className='light-noise-background'>
      <Navbar
        basePath='/es'
        homeButton='Inicio'
        aboutUsButton='Sobre Nosotros'
        portfolioButton='Portafolio'
        contactButton='Contáctenos'
      />
      <main>
        <AboutUsHero title='Sobre nosotros' />
        <Tldr
          title='El Resumen'
          paragraph='Sabemos que eres una persona ocupada, así que vamos directo al grano. Somos una cooperativa de diseñadores y desarrolladores de software que se han unido para crear productos de alta calidad que, de otra manera, podrían ser impracticables. Nuestro equipo es global, con la oficina principal ubicada en el Sur de Brasil'
          paragraph_2='Si quieres saber más, sigue desplazándote (la página).'
        />
        <Values
          title='Los valores'
          subTitle_1='Sé directo'
          paragraph_1='Creemos que el mejor y más auténtico trabajo ocurre cuando todos tienen la libertad de hablar sobre cualquier cosa en cualquier momento.'
          subTitle_2='Nunca abandonamos a un cliente.'
          paragraph_2='Creamos todo pensando en el mantenimiento a largo plazo. Una vez que te conviertes en nuestro cliente, asumimos el compromiso de nunca dejarte en la estacada.'
          subTitle_3='No tengas miedo a lo desconocido'
          paragraph_3='Todo cambia, y esto sucede más rápidamente en esta industria. Aceptamos proyectos incluso si no estamos seguros de cómo llevar a cabo algunas partes de ellos.'
          subTitle_4='Sea criterioso'
          paragraph_4='Cada producto que creamos necesita ser aprobado por nuestro equipo. Queremos ser reconocidos por nuestra calidad, y ese es nuestro objetivo principal.'
        />
        <Team title='El Equipo' />
      </main>
      <Footer
        basePath='/es'
        homeButton='Inicio'
        aboutUsButton='Sobre nosotros'
        portfolioButton='Portafolio'
        contactUsButton='Contáctenos'
      />
    </div>
  );
}
