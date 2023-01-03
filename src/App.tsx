/** @format */

import { Routes, Route } from 'react-router-dom';
import { LAYOUT } from './routes/baseRoute';
import { AuthRoutes, MainRoutes } from './routes/routes';
import PublicLayout from './layout/PublilcLayout';
import AuthLayout from './layout/AuthLayout';

function App() {
  return (
    <Routes>
      <Route path={LAYOUT.MAIN} element={<PublicLayout />}>
        {MainRoutes.map((publicRoute, index) => {
          return (
            <Route
              key={index}
              path={publicRoute.path}
              element={publicRoute.component}
            />
          );
        })}
      </Route>
      <Route path={LAYOUT.AUTHENTICATION} element={<AuthLayout />}>
        {AuthRoutes.map((authRoutes, index) => {
          return (
            <Route
              key={index}
              path={authRoutes.path}
              element={authRoutes.component}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
