// 초깃값을 설정하는데 쓰이는 파일
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import AppContextProvider from './context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
