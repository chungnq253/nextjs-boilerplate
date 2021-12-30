import { useEffect, useState, useCallback } from 'react';
import { find } from '@shared/apis/posts';

import { FETCH_STATUS } from '@configs/api';

const DEFAULT_FILTERS = {
  limit: 12,
  page: 1,
};

export default function useFind() {
  const [filters, setFilters] = useState({});
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.idle);
  const [fetchMoreStatus, setFetchMoreStatus] = useState(FETCH_STATUS.idle);


  function handleSetFilters(agrs) {
    setFilters(agrs);
  }

  function handleSetPosts(posts) {
    setPosts(posts);
  }
  
  function handleSetFetchStatus(status) {
    setFetchStatus(status);
  }

  function handleSetFetchMoreStatus(status) {
    setFetchMoreStatus(status);
  }

  const handleFind = useCallback(async (agrs) => {
    const filterParams = {
      ...DEFAULT_FILTERS,
      ...agrs,
    };

    handleSetFilters(filterParams);

    try {
      handleSetFetchStatus(FETCH_STATUS.loading);

      const data = await find(filterParams);
      handleSetPosts(data);

      handleSetFetchStatus(FETCH_STATUS.succeeded);
    } catch (error) {
      console.error(error);
      handleSetFetchStatus(FETCH_STATUS.failed);
    }

  }, []);

  async function handleLoadMore() {
    const filterParams = {
      ...filters,
      page: filters.page + 1,
    };

    handleSetFilters(filterParams);

    try {
      handleSetFetchMoreStatus(FETCH_STATUS.loading);

      const data = await find(filterParams);
      const morePost = [
        ...posts,
        ...data,
      ];

      handleSetPosts(morePost);

      handleSetFetchMoreStatus(FETCH_STATUS.succeeded);
    } catch (error) {
      console.error(error);
      handleSetFetchMoreStatus(FETCH_STATUS.failed);
    }
  }

  useEffect(() => {
    handleSetFilters(DEFAULT_FILTERS);
  }, []);
  

  return {
    filters,
    posts,
    fetchStatus,
    fetchMoreStatus,

    handleSetFilters,
    handleSetPosts,
    handleFind,
    handleLoadMore,
  };
}
