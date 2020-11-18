import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>VTracker</title>
        <meta property="og:title" content="VTracker" />
        <meta
          property="og:description"
          content="Siz bla bla bla... VTracker"
        />
      </Head>
      <div>
        Hello world
      </div>
    </>
  );
}
