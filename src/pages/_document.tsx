// HTML구조를 수정할 때 사용하는 파일, 오직 서버사이드에서만 렌더링
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
