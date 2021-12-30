
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '@layouts/Layout';

import useGetApp from '@shared/hooks/app/useGet';
import useSetName from '@shared/hooks/app/useSetName';

export default function TestRedux() {
  const app = useGetApp();
  const setStoreAppName = useSetName();
  const [appName, setAppName] = useState('');

  function handleSetStoreAppName(event) {
    event.preventDefault();
    setStoreAppName(appName);
  };

  function handleSetAppName(value) {
    setAppName(value)
  };

  
  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSetStoreAppName}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>App Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter App Name..." 
              autoComplete='off'
              onChange={(event) => handleSetAppName(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Change
          </Button>
        </Form>

        <div className='mt-3'>
          <pre>
            {JSON.stringify(app, null, 2) }
          </pre>
        </div>
      </Container>
    </Layout>
  );
};
