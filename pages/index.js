import Link from 'next/link';

import { Layout } from '../components/Layout';
import styles from '../styles/Home.module.css';
import utilStyle from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyle.headingMd}>Shake Me?</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>🐟 My First Blog</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                alt=""
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSG or SSR ?</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Feb. 06, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                alt=""
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSG or SSR ?</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Feb. 06, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                alt=""
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSG or SSR ?</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Feb. 06, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
                alt=""
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSG or SSR ?</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>Feb. 06, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
