import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { Candidates } from 'pages/Candidates';
import { Companies } from 'pages/Companies';
import { Empty } from 'pages/Empty';
import { Home } from 'pages/Home';
import { Jobs } from 'pages/Jobs';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path={ROUTES.HOME} />
      <Route element={<Home />} path={ROUTES.DASHBOARD} />
      <Route element={<Companies />} path={ROUTES.COMPANIES} />
      <Route element={<Candidates />} path={ROUTES.CANDIDATES} />
      <Route element={<Jobs />} path={ROUTES.JOBS} />
      <Route element={<Empty />} path={ROUTES.ANALYTICS} />
      <Route element={<Empty />} path={ROUTES.SETTINGS} />
    </Routes>
  );
}
