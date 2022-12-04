import type { AppProps } from 'next/app';
import GlobalStyle from '../components/styles/globalStyles';
import Variables from '../components/styles/variables';
import { Navbar } from '../components/shared';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
