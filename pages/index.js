import Head from "next/head";
import WelcomeSection from "../components/sections/Welcome";
import ProjectsSection from "../components/sections/Projects";
import Header from "../components/Header";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <>
      <Head>
        <title>altay.dev | Hi, Im Altay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta charset="UTF-8" />
        <meta name="description" content="Hello, It is Altay. You can reach me out there." />
        <meta name="keywords" content="HTML, CSS, JavaScript, ReactJS" />
        <meta name="author" content="Altay Simsek" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Header />
      <main className="container mx-auto sm:px-16">
        <WelcomeSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
