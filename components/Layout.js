import Head from 'next/head';
import styles from './layout.module.css';

const name = 'Salmon Fillet';
export const siteTitle = 'Next.js blog';

export const Layout = ({ chilidrem }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{chilidrem}</main>
    </div>
  );
};
