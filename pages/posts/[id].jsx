import Container from 'react-bootstrap/Container';

import Layout from '@layouts/Layout';
import Hero from '@components/content/Hero';

import appConfigs from '@configs/app';
import { find, findById } from '@shared/apis/posts';

export default function Post({ post }) {
  return (
    <Layout>
      <Container>
        <Hero 
          {...post}
        />
      </Container>
  </Layout>
  )
}

export async function getStaticPaths() {
  let posts = [];

  try {
    posts = await find({ 
      page: 1,
      limit: appConfigs.limitStaticPathPageBuilded, 
    });
  } catch (error) {
    console.error(error);
  }

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: { id: post.id }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(ctx) {
  const { id } = ctx.params;
  let post = null;

  try {
    post = await findById(id);
  } catch (error) {
    console.error(error);
  }

  if (Boolean(post) === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: appConfigs.revalidateStaticProp,
  };
}