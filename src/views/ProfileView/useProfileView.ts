/* eslint no-restricted-globals: ["error"] */
import { useState, useRef, MouseEvent } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import { accessTokenVar } from '#apollo/state';

import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetAuthQuery,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  LogoutUserMutation,
} from '#generated/types';

import {
  GET_AUTH,
  UPDATE_USER,
  DELETE_USER,
  LOGOUT_USER,
} from '#apollo/operations';

const formatDate = (date: string) => {
  const inputDate = date ? new Date(date) : new Date();
  return inputDate.toISOString().substr(0, 10);
};

const useProfileView = () => {
  const [
    updateUser,
    { data: updateUserData, error: apolloUpdateError, reset: resetUpdateUser },
  ] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UPDATE_USER,
    {
      update: (cache, { data }) => {
        // Only update cache if we had no errors
        if (data?.updateUser?.errors.length) {
          return;
        }
        cache.writeQuery({
          query: GET_AUTH,
          data: {
            auth: {
              user: data?.updateUser?.user,
              isLoggedIn: true,
            },
          },
        });
      },
    },
  );

  const [
    deleteUser,
    { data: deleteUserData, error: apolloDeleteError, reset: resetDeleteUser },
  ] = useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DELETE_USER);

  const [logoutUser] = useMutation<LogoutUserMutation>(LOGOUT_USER, {
    onCompleted: () => {
      accessTokenVar('');
    },
    update: (cache) => {
      cache.writeQuery({
        query: GET_AUTH,
        data: {
          auth: {
            user: null,
            jwtToken: '',
            isLoggedIn: false,
          },
        },
      });
    },
  });

  const { data: authData } = useQuery<GetAuthQuery>(GET_AUTH);

  const updateFormRef = useRef<HTMLFormElement>(null);

  const currentUserData = authData?.auth?.user;

  const [newUserData, setNewUserData] = useState({
    username: currentUserData?.username || '',
    email: currentUserData?.email || '',
    birthday: currentUserData?.birthday || '',
    password: '',
  });

  const updateErrorMessage = updateUserData?.updateUser?.errors[0]?.message;
  const apolloUpdateErrorMessage = apolloUpdateError?.message;
  const updateError = updateErrorMessage || apolloUpdateErrorMessage || '';

  const deleteErrorMessage = deleteUserData?.deleteUser?.errors[0]?.message;
  const apolloDeleteErrorMessage = apolloDeleteError?.message;
  const deleteError = deleteErrorMessage || apolloDeleteErrorMessage || '';

  if (!currentUserData) {
    return null;
  }

  const userDataChanged =
    newUserData.username !== currentUserData.username ||
    newUserData.password !== '' ||
    newUserData.email !== currentUserData.email ||
    formatDate(newUserData.birthday || '') !==
      formatDate(currentUserData.birthday || '');

  const updateNewUserData = (key: string, value: string) => {
    setNewUserData({ ...newUserData, [key]: value });
  };

  const setUsername = (newUsername: string) =>
    updateNewUserData('username', newUsername);
  const setPassword = (newPassword: string) =>
    updateNewUserData('password', newPassword);
  const setEmail = (newEmail: string) => updateNewUserData('email', newEmail);
  const setBirthday = (newBirthday: string) =>
    updateNewUserData('birthday', newBirthday);

  const isUpdateFormInputValid = () => updateFormRef.current?.reportValidity();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isUpdateFormInputValid()) {
      resetUpdateUser();
      await updateUser({
        variables: {
          userId: currentUserData._id,
          newUserData,
        },
      });
      setPassword('');
    }
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetDeleteUser();
    // eslint-disable-next-line no-alert
    const deletionConfirmed = confirm(
      'Do you really want to delete your account? This action is not reversible!',
    );

    if (deletionConfirmed) {
      const results = await deleteUser({
        variables: { userId: currentUserData._id },
      });

      if (results.data?.deleteUser?.statusCode === 200) {
        logoutUser();
      }
    }
  };

  const { username, email, password, birthday } = newUserData;

  return {
    username,
    email,
    password,
    birthday,
    favoriteMovies: currentUserData.favoriteMovies,
    formatDate,
    handleSubmit,
    handleDelete,
    setEmail,
    setBirthday,
    setPassword,
    setUsername,
    userDataChanged,
    updateFormRef,
    updateError,
    deleteError,
  };
};

export default useProfileView;
