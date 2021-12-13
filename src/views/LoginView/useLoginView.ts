import { useState, useRef, MouseEvent } from 'react';

import { useMutation } from '@apollo/client';

import {
  LoginUserMutation,
  LoginUserMutationVariables,
} from '#generated/types';

import { LOGIN_USER, GET_AUTH } from '#apollo/operations';

import { accessTokenVar } from '#apollo';

const useLoginView = () => {
  // const [loginUser, { error: loginError }] = useLoginUserMutation();

  const [loginUser, { error: loginError }] = useMutation<
    LoginUserMutation,
    LoginUserMutationVariables
  >(LOGIN_USER, {
    onCompleted: (data) => {
      accessTokenVar(data?.loginUser?.jwtToken || '');
    },
    update: (cache, { data }) => {
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
  const [username, setUsername] = useState('FlyingBanana');
  const [password, setPassword] = useState('test123');

  const loginFormRef = useRef<HTMLFormElement>(null);

  const isLoginFormInputValid = () => loginFormRef.current?.reportValidity();

  const isDisabled = !(username && password);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoginFormInputValid()) {
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
