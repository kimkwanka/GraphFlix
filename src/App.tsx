import { useEffect } from 'react';

import { useLogoutUserMutation } from 'state/slices/api';

import { useMutation } from '@apollo/client';

import { SilentRefreshMutation } from '#generated/types';
import { SILENT_REFRESH, GET_AUTH } from '#apollo/operations';

import LoadingSpinner from '#components/LoadingSpinner/LoadingSpinner';
import Header from '#components/Header/Header';
import Footer from '#components/Footer/Footer';

import Routes from './Routes';

import 'modern-css-reset';

import './App.scss';

import { accessTokenVar } from '#apollo/state';

let firstRender = true;

const App = () => {
  const [silentLogin, { loading }] = useMutation<SilentRefreshMutation>(
    SILENT_REFRESH,
    {
      onCompleted: (data) => {
        accessTokenVar(data?.silentRefresh?.jwtToken || '');
      },
      update: (cache, { data }) => {
        // Only login if we had no errors
        if (data?.silentRefresh?.errors.length) {
          return;
        }
        cache.writeQuery({
          query: GET_AUTH,
          data: {
            auth: {
              user: data?.silentRefresh?.user,
              jwtToken: data?.silentRefresh?.jwtToken,
              isLoggedIn: true,
            },
          },
        });
      },
    },
  );
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    // Try logging in silently on initial page load
    silentLogin();
    firstRender = false;
    // If 'logout' item is set it means another tab logged out, so we log out as well
    const syncLogout = (e: StorageEvent) => {
      if (e.key === 'logout') {
        logoutUser();
      }
    };
    window.addEventListener('storage', syncLogout);

    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <LoadingSpinner />
          <Routes silentLoginPending={loading || firstRender} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
