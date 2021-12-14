import { useState, useRef, MouseEvent } from 'react';

import { useMutation } from '@apollo/client';

import {
  LoginUserMutation,
  LoginUserMutationVariables,
} from '#generated/types';

import { LOGIN_USER, GET_AUTH } from '#apollo/operations';

import { accessTokenVar } from '#apollo/state';

const useLoginView = () => {
  const [
    loginUser,
    { data: loginData, error: apolloError, reset: resetLoginUser },
  ] = useMutation<LoginUserMutation, LoginUserMutationVariables>(LOGIN_USER, {
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
            token: data?.loginUser?.jwtToken,
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
