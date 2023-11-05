import Head from "next/head";
import { Rubik } from "next/font/google";
import clsx from "clsx";

const font = Rubik({
  subsets: ["latin-ext"],
});

export default function Iframe() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx("z-20 flex min-h-screen flex-col", font.className)}>
        <nav className="bg-purple-100 px-20 py-4">
          <h2 className="text-xl font-semibold">Child App</h2>
        </nav>
        <div className="grow bg-rose-100 px-20 py-4">Child</div>
      </main>
    </>
  );
}
