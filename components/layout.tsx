import Head from "next/head";
import Background from "./background";
import Nav from "./nav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ORSI</title>
        <meta name="description" content="ORSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <main className={`relative z-10 pb-16`}>
        <Nav />
        {children}
      </main>
    </>
  );
}
