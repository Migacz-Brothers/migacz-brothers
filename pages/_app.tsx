import type { AppProps } from 'next/app';
import GlobalStyle from '../components/styles/globalStyles';
import { Navbar, Footer } from '../components/shared';
import ThemeContextProvider from '../components/Contexts/ThemeContext';
import dynamic from 'next/dynamic';

const Consent = dynamic(() => import('../components/shared/Consent'), {
  suspense: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Consent />
    </ThemeContextProvider>
  );
}
