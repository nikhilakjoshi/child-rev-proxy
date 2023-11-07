import clsx from "clsx";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import { Rubik } from "next/font/google";
import { useRouter } from "next/router";

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  console.log("cookie-headers", ctx.req.headers.cookie);
  return {
    props: {
      cookie: ctx.req.headers.cookie,
    },
  };
};

const font = Rubik({
  subsets: ["latin-ext"],
});

export default function Banking(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx("z-20 flex min-h-screen flex-col", font.className)}>
        <nav className="bg-purple-100 px-20 py-4">
          <h2 className="text-xl font-semibold">
            Child App{" "}
            {typeof window !== undefined &&
              `- Hosted on: ${window.location.href}`}
          </h2>
        </nav>
        {props.cookie && (
          <div className="grow bg-rose-100 px-20 py-4">{`cookie -> ${props.cookie}`}</div>
        )}
      </main>
    </>
  );
}
