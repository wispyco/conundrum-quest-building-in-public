import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <title>Conundrum Quest Building In Public</title>
      <meta property="og:title" content="Conundrum Quest building in public" />
      <meta
        property="og:description"
        content="A place to share new problems, ideas and see who is
          working on them."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="https://www.conundrum-public.quest" />
      <meta
        property="og:image"
        content="https://www.conundrum-public.quest/logo-5.png"
      />
      <meta property="og:image:width" content="148" />
      <meta property="og:image:height" content="186" />
    </Head>
  );
}
