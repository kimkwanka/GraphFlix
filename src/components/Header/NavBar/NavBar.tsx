import { MouseEvent } from 'react';

import { NavLink } from 'react-router-dom';

import { accessTokenVar } from '#apollo/state';
import { GET_AUTH } from '#apollo/operations';

import { useGetIsLoggedInQuery, useLogoutUserMutation } from '#generated/hooks';

import SearchBar from './SearchBar/SearchBar';

import './NavBar.scss';

const NavBar = () => {
  const [logoutUser] = useLogoutUserMutation({
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

  const { data } = useGetIsLoggedInQuery();

  const isLoggedIn = data?.auth?.isLoggedIn || false;

  const handleLogoutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logoutUser();

    // Set 'logout' item in local storage to trigger logout in other tabs via storage event listerner in App.tsx
    localStorage.setItem('logout', JSON.stringify(Date.now()));
  };

  return (
    <nav className="navbar">
      <NavLink className="logo-link" to="/">
        <h1 className="logo">
          <span>Graph</span>
          Flix
        </h1>
      </NavLink>
      {isLoggedIn && (
        <div className="navbar__right">
          <SearchBar />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__link navbar__link--active'
                    : 'navbar__link'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'navbar__link navbar__link--active'
                    : 'navbar__link'
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <a
                className="button clear logout-button"
                href="/logout"
                onClick={handleLogoutClick}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
