import type { AppProps } from 'next/app';
import GlobalStyle from '../components/styles/globalStyles';
import { Navbar } from '../components/shared';
import ThemeContextProvider from '../components/Contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
