import Head from 'next/head';

const name = 'Salmon Fillet';
export const siteTitle = 'Next.js blog';

export const Layout = ({ chilidrem }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{chilidrem}</main>
    </div>
  );
};
