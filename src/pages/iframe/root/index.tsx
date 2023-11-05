import Head from "next/head";
import { Rubik } from "next/font/google";
import clsx from "clsx";
import type { GetServerSidePropsContext } from "next";

const font = Rubik({
  subsets: ["latin-ext"],
});

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  ctx.res.setHeader(
    "Set-Cookie",
    "token=100; Path=/; HttpOnly; SameSite=Strict; Secure; domain=.parent-rev-proxy.vercel.app",
  );
  return {
    props: {},
  };
};

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
