import { useState, useRef, MouseEvent } from 'react';

import { GET_AUTH } from '#apollo/operations';
import { accessTokenVar } from '#apollo/state';

import { useLoginUserMutation } from '#generated/hooks';

const useLoginView = () => {
  const [
    loginUser,
    { data: loginData, error: apolloError, reset: resetLoginUser },
  ] = useLoginUserMutation({
    onCompleted: (data) => {
      accessTokenVar(data?.loginUser?.jwtToken || '');
    },
    update: (cache, { data }) => {
      // Only login if we had no errors
      if (data?.loginUser?.errors.length) {
        return;
      }
      cache.writeQuery({
        query: GET_AUTH,
        data: {
          auth: {
            user: data?.loginUser?.user,
            jwtToken: data?.loginUser?.jwtToken,
            isLoggedIn: true,
          },
        },
      });
    },
  });

  const loginErrorMessage = loginData?.loginUser?.errors[0]?.message;
  const apolloErrorMessage = apolloError?.message;

  const loginError = apolloErrorMessage || loginErrorMessage || '';

  const [username, setUsername] = useState('FlyingBanana');
  const [password, setPassword] = useState('test123');

  const loginFormRef = useRef<HTMLFormElement>(null);

  const isLoginFormInputValid = () => loginFormRef.current?.reportValidity();

  const isDisabled = !(username && password);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoginFormInputValid()) {
      resetLoginUser();
      loginUser({ variables: { username, password } });
    }
  };

  return {
    username,
    password,
    handleSubmit,
    setUsername,
    setPassword,
    loginFormRef,
    isDisabled,
    loginError,
  };
};

export default useLoginView;
