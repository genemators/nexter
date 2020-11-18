import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='application-name' content='PWA App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PWA App' />
          <meta name='description' content='PWA' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' sizes='180x180' href='/public/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/public/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/public/icons/favicon-16x16.png' />
          <link rel='manifest' href='/public/manifest.json' />
          <link rel='mask-icon' href='/public/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/public/icons/favicon.ico' />
          {/*<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />*/}

          <meta property='og:type' content='website' />
          <meta property='og:title' content='PWA App' />
          <meta property='og:description' content='PWA' />
          <meta property='og:site_name' content='PWA App' />
          <meta property='og:url' content='https://example.com' />
          <meta property='og:image' content='https://example.com/static/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
