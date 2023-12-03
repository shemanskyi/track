import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from 'config/appRoutes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'assets/styles/common/reset.scss';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
