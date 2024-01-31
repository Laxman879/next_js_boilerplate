import Head from "next/head";
import Layout from "@component/components/layouts/layout ";
import Container from "@component/components/container ";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Layout isHome={true}>
        <Head>
          <title>next.js boilerplate with javascript</title>
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
}
