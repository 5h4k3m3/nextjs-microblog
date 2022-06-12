import Link from 'next/link';
import Head from 'next/head';

import { Layout, siteTitle } from '../components/Layout';
import { getPostsData } from '../lib/post';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

// ssg
export async function getStaticProps() {
  const allPostsData = getPostsData();
  //console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// ssr
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // return props
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyles.headingMd}>Shake Me?</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>🐟 My First Blog</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
