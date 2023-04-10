import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel='stylesheet'/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Josefin+Sans:wght@700&family=Lato&family=Oswald:wght@400;700&family=Outfit:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
