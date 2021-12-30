import Container from 'react-bootstrap/Container';

import Layout from '@layouts/Layout';
import SearchContainer from '@components/Search';


export default function Search() {

  return (
    <Layout>
      <Container>
        <SearchContainer />
      </Container>
    </Layout>
  )
};
