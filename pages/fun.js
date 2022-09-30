import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Fun from '../components/fun/Fun'
export default function Home() {
  return (
    <>
      <Head>
        <title>altay.dev | Want some fun ?</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta charSet="UTF-8" />
        
      </Head>
      <Header />
      <main className="container mx-auto sm:px-16 text-white">
        <Fun/>
      </main>
      <Footer />
    </>
  )
}
