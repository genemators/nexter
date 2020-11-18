/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Head from "next/head";
import React from "react";
import Router from "next/router";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Oopsie, 404</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
      </Head>
        <div className="flex mb-4 justify-center mb-64">
          <a
            onClick={() => Router.back()}
            className="text-white text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer"
          >
            {"<-"} Go Back
          </a>
        </div>
    </>
  );
}
