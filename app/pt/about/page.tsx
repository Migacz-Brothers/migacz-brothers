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
          subTitle_2='Não abandone clientes'
          paragraph_2='Nós criamos tudo pensando na manutenção de longo prazo. Uma vez que você se torna nosso cliente, assumimos o compromisso de nunca te deixar n mão'
          subTitle_3='Não tenha medo do desconhecido'
          paragraph_3='Tudo muda, e isso acontece mais rapidamente nesta indústria. Aceitamos projetos mesmo que não tenhamos certeza de como realizar algumas partes deles.'
          subTitle_4='Temos altos padrões'
          paragraph_4='Cada produto que criamos precisa ser aprovado pela nossa equipe. Queremos ser reconhecidos pela nossa qualidade, e esse é o nosso principal objetivo.'
        />
        <Team title='A Equipe' />
      </main>
      <Footer
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactUsButton='Contate-nos'
      />
    </div>
  );
}
