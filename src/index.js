import React from 'react';
import ReactDOM from 'react-dom';
import { ScreensApp } from './Screens/App';

import './scss/index.scss';
import './scss/_styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <ScreensApp />,
  document.getElementById('root')
);