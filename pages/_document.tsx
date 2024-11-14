import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Mo35 - Consulta IMEI Inteligente</title>
        <meta name="description" content="Verifica la información de cualquier dispositivo móvil de forma rápida y sencilla usando mensajería" />
        <meta name="theme-color" content="#7B2BF9" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}