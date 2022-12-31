import '@/src/styles/global.scss';
// import '@/src/styles/reset.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
