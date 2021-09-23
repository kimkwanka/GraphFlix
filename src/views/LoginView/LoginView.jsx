/* eslint-disable no-underscore-dangle */
import React from 'react';

import { Link } from 'react-router-dom';

import ErrorMessages from '../../components/ErrorMessages/ErrorMessages';

import useLoginView from './useLoginView';

const LoginView = () => {
  const {
    username,
    password,
    handleSubmit,
    setUsername,
    setPassword,
    loginFormRef,
  } = useLoginView();

  return (
    <div className="login-view">
      <h1 className="login-view__heading">Sign In</h1>
      <form
        className="login-view__form"
        ref={loginFormRef}
      >
        <label htmlFor="formUsername">
          Username:
          <input
            id="formUsername"
            type="text"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
            pattern="^[a-zA-Z0-9]+$"
          />
        </label>
        <label htmlFor="formPassword">
          Password:
          <input
            id="formPassword"
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" variant="primary" onClick={handleSubmit}>
          Sign In
        </button>
        <ErrorMessages errorType="loginErrors" />
      </form>
      <p>
        Don’t have an account?&nbsp;
        <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginView;
