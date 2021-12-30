import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Link from '@components/common/Link';

export default function Header() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const { query, isReady, pathname } = router;
  const keywordRouter = query?.keyword || '';
  
  function handleSearch(event) {
    event.preventDefault();
    
    router.push(`/search?keyword=${keyword}`);
  }

  function handleSetKeyword(value) {
    setKeyword(value);
  }

  useEffect(() => {
    if (isReady && pathname.includes('search')) {
      handleSetKeyword(keywordRouter);
    }
  }, [isReady, keywordRouter, pathname]);

  return (
    <Navbar bg="light" expand="lg" className='px-3'>
      <Navbar.Brand href="/">Next App</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" classNames="nav-link">Home</Link>
            <Link href="/test-redux" classNames="nav-link">
              Test Redux
            </Link>
          </Nav>

          <Form 
            className="d-flex"
            onSubmit={handleSearch}
          >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => handleSetKeyword(e.target.value)}
            />

            <Button 
              variant="outline-success" 
              type='submit'
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
};
