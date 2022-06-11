import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>My First Post</title>
      </Head>
      <h1>My First Post</h1>
      <Link href="/">back Home</Link>
    </div>
  );
}
