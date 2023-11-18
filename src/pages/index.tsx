// 메인페이지
// 리액트의 app.js 파일과 같음
import Head from 'next/head';
import Main from '@/components/page/main';
import ArrowUp from '@/components/common/arrowUp';
import Footer from '@/components/layout/footer';
import Skills from '@/components/page/skills';
import About from '@/components/page/about';
import Projects from '@/components/page/projects';
import { useAppContext } from './context/AppContext';
import { Reveal } from '@/components/utils/Reveal';

export default function Home(): JSX.Element {
  const { isLightMode } = useAppContext();
  const thumbnailUrl = '/assets/thumb.png';
  return (
    <>
      <Head>
        <title>Soeun Lee.</title>
        <meta name="title" content="Soeun's portfolio" />
        <meta
          name="description"
          content="This is portfolio created by junior frontend developer, Soeun Lee."
        />
        <meta name="image" content={thumbnailUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id={isLightMode ? 'light' : 'dark'}>
        <main className="main">
          <Main />
          <ArrowUp />
        </main>
        <Reveal>
          <article className="skillsWrap">
            <Skills />
          </article>
        </Reveal>
        <article className="projectWrap">
          <Projects />
        </article>
        <Reveal>
          <article className="aboutWrap">
            <About />
          </article>
        </Reveal>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
