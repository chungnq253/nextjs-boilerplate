import { useDispatch } from 'react-redux';

import { actions } from '@shared/stores/app';

export default function useSetName() {
  const dispatch = useDispatch();
  
  function handleSetName(name) {
    dispatch(actions.setName(name));
  }

  return handleSetName;
}

