import Container from 'react-bootstrap/Container';

import Layout from '@layouts/Layout';
import Grid from '@components/content/Grid';

import appConfigs from '@configs/app';
import { find } from '@shared/apis/posts';

export default function Home({
  posts = [],
}) {
  return (
    <Layout>
      <Container>
        <Grid 
          contents={posts}
          objectName='posts'
        />
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  let posts = [];

  try {
    posts = await find({ limit: 12, page: 1 });
  } catch (error) {
    console.error(error);
  }
  
  return {
    props: {
      posts,
    },
    revalidate: appConfigs.revalidateStaticProp,
  };
};


