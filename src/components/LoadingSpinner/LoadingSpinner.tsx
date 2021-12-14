import { useReactiveVar } from '@apollo/client';

import { isRequestPending } from '#apollo/state';

import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  useReactiveVar(isRequestPending);

  return isRequestPending() ? <div className="loading-spinner" /> : null;
};

export default LoadingSpinner;
