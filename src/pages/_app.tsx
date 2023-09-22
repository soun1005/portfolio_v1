// 초깃값을 설정하는데 쓰이는 파일
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import AppContextProvider from './context/AppContext';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="google-analytics">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
      </Script>
    </AppContextProvider>
  );
}
