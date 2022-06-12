import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Salmon Fillet';
export const siteTitle = 'Next.js blog';

export const Layout = ({ home, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} // `${}` 変数として扱う
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={utilStyles.borderCircle}
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">Return Home</Link>
        </div>
      )}
    </div>
  );
};
