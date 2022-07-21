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
