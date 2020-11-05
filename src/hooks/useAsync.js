import React from 'react';

export const useAsync = (asyncFunction, immediate = true) => {
  const [isPending, setIsPending] = React.useState(true);
  const [isSettled, setIsSettled] = React.useState(false);
  const [isRejected, setIsRejected] = React.useState(false);
  const [data, setData] = React.useState();

  const execute = React.useCallback(() => {
    setIsPending(true);
    setData(undefined);

    return asyncFunction()
      .then((response) => {
        setData(response);
        setIsSettled(true);
        setIsPending(false);
      })
      .catch(() => {
        setIsRejected(true);
        setIsPending(false);
      });
  }, [asyncFunction]);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute, data, isPending, isRejected, isSettled
  };
};
