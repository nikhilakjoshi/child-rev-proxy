import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  console.log("cookie-headers", ctx.req.headers.cookie);
  return {
    props: {
      cookie: ctx.req.headers.cookie,
    },
  };
};
export default function Banking(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return <div className="">{props.cookie}</div>;
}
