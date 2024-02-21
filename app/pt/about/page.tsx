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
        home
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactButton='Contate-nos'
      />
      <main>
        <AboutUsHero title={'Sobre nós'} />
        <Tldr />
        <Values />
        <Team />
      </main>
      <Footer
        home
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </div>
  );
}
