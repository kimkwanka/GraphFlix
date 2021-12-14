import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  const isRequestPending = false;

  return isRequestPending ? <div className="loading-spinner" /> : null;
};

export default LoadingSpinner;
