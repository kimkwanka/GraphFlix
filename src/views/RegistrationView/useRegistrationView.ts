import { useState, useRef, MouseEvent } from 'react';

import { useMutation } from '@apollo/client';

import {
  RegisterUserMutation,
  RegisterUserMutationVariables,
} from '#generated/types';

import { REGISTER_USER } from '#apollo/operations';

const RegistrationView = () => {
  const [
    registerUser,
    { data: registerData, error: apolloError, reset: resetRegisterUser },
  ] = useMutation<RegisterUserMutation, RegisterUserMutationVariables>(
    REGISTER_USER,
  );

  const registerErrorMessage = registerData?.registerUser?.errors[0]?.message;
  const apolloErrorMessage = apolloError?.message;

  const registerError = apolloErrorMessage || registerErrorMessage || '';

  const isRegisterSuccess = registerData?.registerUser?.statusCode === 201;

  const registerFormRef = useRef<HTMLFormElement>(null);

  const [newUserData, setNewUserData] = useState({
    username: '',
    password: '',
    email: '',
    birthday: '',
  });

  const setUsername = (username: string) =>
    setNewUserData({ ...newUserData, username });
  const setPassword = (password: string) =>
    setNewUserData({ ...newUserData, password });
  const setEmail = (email: string) => setNewUserData({ ...newUserData, email });
  const setBirthday = (birthday: string) =>
    setNewUserData({ ...newUserData, birthday });

  const { username, password, email, birthday } = newUserData;

  const isRegisterInputValid = () => registerFormRef.current?.reportValidity();

  const isDisabled = !(username && password && email);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isRegisterInputValid()) {
      resetRegisterUser();
      registerUser({ variables: { newUserData } });
    }
  };

  return {
    username,
    password,
    email,
    birthday,
    handleSubmit,
    setUsername,
    setPassword,
    setEmail,
    setBirthday,
    registerFormRef,
    isDisabled,
    registerError,
    isRegisterSuccess,
  };
};

export default RegistrationView;
