import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      <meta
        name="viewport"
        content="width=device-width,viewport-fit=cover,initial-scale=1,maximum-scale=1"
      />
    </Head>
  );
}