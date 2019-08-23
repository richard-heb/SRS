import './styles/main.scss';

import * as React from 'react';

import * as ReactDOM from 'react-dom';
import { createHashHistory } from 'history';

import { SRSRouter } from './router';

const history = createHashHistory();

ReactDOM.render(
  <SRSRouter history={history} />,
  document.getElementById('root'),
);
