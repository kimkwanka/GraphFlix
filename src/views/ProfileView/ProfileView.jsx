/* eslint-disable react/no-array-index-key */
/* eslint no-restricted-globals: ["error"] */
import React from 'react';

import { useSelector } from 'react-redux';

import useProfileView from './useProfileView';

import ErrorMessages from '../../components/ErrorMessages/ErrorMessages';

import FavoriteMovieList from './FavoriteMoviesList/FavoriteMoviesList';

const formatDate = (date) => {
  const inputDate = new Date(date);
  return inputDate.toISOString().substr(0, 10);
};

const ProfileView = () => {
  const loggedInUser = useSelector((state) => state.user);
  const {
    Username, Email, Birthday, FavoriteMovies,
  } = loggedInUser;

  const {
    handleSubmit,
    handleDelete,
    setEmail,
    setBirthday,
    setPassword,
    setUsername,
    dataHasChanged,
    updateFormRef,
  } = useProfileView();

  return (
    <div className="profile-view w-100">
      <h2>Profile</h2>
      <form className="d-flex flex-column mb-5 w-100" ref={updateFormRef}>
        <label htmlFor="formUsername">
          Username:
          <input
            id="formUsername"
            type="text"
            defaultValue={Username}
            onChange={(e) => setUsername(e.target.value)}
            minLength="5"
            pattern="^[a-zA-Z0-9]+$"
          />
        </label>
        <label htmlFor="formPassword">
          Password:
          <input
            id="formPassword"
            type="password"
            defaultValue=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="formEmail">
          Email:
          <input
            id="formEmail"
            type="email"
            defaultValue={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="formBirthday">
          Birthday:
          <input
            id="formBirthday"
            type="date"
            defaultValue={formatDate(Birthday)}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <button
          disabled={!dataHasChanged}
          className="align-self-center w-auto mt-5"
          type="submit"
          variant="primary"
          onClick={handleSubmit}
        >
          Update Profile
        </button>
        <button
          className="align-self-end w-auto mt-5"
          type="submit"
          variant="danger"
          onClick={handleDelete}
        >
          DELETE Profile
        </button>
        <ErrorMessages />
      </form>
      {FavoriteMovies.length > 0 ? (
        <>
          <h2>Favorite Movies</h2>
          <FavoriteMovieList />
        </>
      ) : null}
    </div>
  );
};

export default ProfileView;