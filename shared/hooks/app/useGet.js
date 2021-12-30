import { useSelector } from 'react-redux';

import { selectors } from '@shared/stores/app';

export default function useGet() {
  const app = useSelector(selectors.appSlt);
  return app;
}

