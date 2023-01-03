/** @format */

import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Header = lazy(() => import('../components/common/Header'));

const PublicLayout = () => {
  return (
    <main>
      <Suspense fallback={''}>
        <Header />
      </Suspense>
      <Outlet />
    </main>
  );
};

export default PublicLayout;
