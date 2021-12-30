import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'

import Layout from '@layouts/Layout';
import Grid from '@components/content/Grid';

import useFind from '@shared/hooks/post/useFind';
import { FETCH_STATUS } from '@configs/api';

export default function Search() {
  const router = useRouter();
  const { query, isReady } = router;
  const { keyword = '' } = query;
  const { 
    posts, 
    fetchStatus,
    fetchMoreStatus,

    handleFind, 
    handleLoadMore,
  } = useFind();

  const isLoading = fetchStatus.value === FETCH_STATUS.loading.value;
  const isLoadingMore = fetchMoreStatus.value === FETCH_STATUS.loading.value;

  useEffect(() => {
    if (isReady) {
      handleFind({
        search: keyword,
      })
    }
  }, [keyword, isReady, handleFind]);

  if (isLoading || isReady === false) {
    return (
      <Row className='justify-content-center'>
        <Spinner animation="border" />
      </Row>
    );
  }

  return (
    <>
      <Grid 
        contents={posts}
        objectName='posts'
      />

      <Row className='mt-3'>
        <Col>
          <Button 
            variant='primary' 
            type='button'
            disabled={isLoadingMore}
            onClick={handleLoadMore}
          >
            {isLoadingMore && (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                
                {' '}
              </>
            )}

            Load More...
          </Button>
        </Col>
      </Row>
    </>
  )
};
