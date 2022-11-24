import type { AppProps } from 'next/app';
import { GlobalStyle } from '../components/shared';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
