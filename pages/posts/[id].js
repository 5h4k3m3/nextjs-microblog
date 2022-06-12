import { Layout } from '../../components/Layout';
import { getAllPostIds } from '../../lib/post';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return <Layout>routing</Layout>;
}
