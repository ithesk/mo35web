import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mo35 - Consulta IMEI Inteligente</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Verifica la información de cualquier dispositivo móvil de forma rápida y sencilla usando mensajería" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}