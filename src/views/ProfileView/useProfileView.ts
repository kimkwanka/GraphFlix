/* eslint no-restricted-globals: ["error"] */
import { useState, useRef, MouseEvent } from 'react';

import { useQuery } from '@apollo/client';

import {
  useUpdateUserMutation,
  useDeleteUserMutation,
} from '#state/slices/api';

import { GetAuthQuery } from '#generated/types';
import { GET_AUTH } from '#apollo/operations';

const formatDate = (date: string) => {
  const inputDate = new Date(date);
  return inputDate.toISOString().substr(0, 10);
};

const useProfileView = () => {
  const [updateUser, { error: updateError }] = useUpdateUserMutation();
  const [deleteUser, { error: deleteError }] = useDeleteUserMutation();

  const { data: authData } = useQuery<GetAuthQuery>(GET_AUTH);

  const currentUserData = authData?.auth?.user;

  const updateFormRef = useRef<HTMLFormElement>(null);

  const [newUserData, setNewUserData] = useState({
    ...currentUserData,
    password: '',
  });

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
      await updateUser({ userId: currentUserData._id, newUserData });
      setPassword('');
    }
  };

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    const deletionConfirmed = confirm(
      'Do you really want to delete your account? This action is not reversible!',
    );

    if (deletionConfirmed) {
      deleteUser(currentUserData._id);
    }
  };

  const { username, email, password, birthday, favoriteMovies } = newUserData;

  return {
    username,
    email,
    password,
    birthday,
    favoriteMovies,
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
