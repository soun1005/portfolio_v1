// HTML구조를 수정할 때 사용하는 파일, 오직 서버사이드에서만 렌더링
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const thumbnailUrl = '/assets/thumb.png';
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="og:title" content="Soeun's portfolio" />
        <meta
          name="og:description"
          content="This portfolio is created by Soeun Lee to show projects from school, personal projects and all about her"
        />
        <meta name="og:image" content={thumbnailUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
