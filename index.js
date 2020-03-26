import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';


import App from './src/views/App.jsx';


const history = createBrowserHistory();

if (module.hot) {
  module.hot.accept();
}

(async () => {

  const rootEl = document.getElementById('root');
  const render = (Component, el) => {
    ReactDOM.render(
      <Component history={history} />,
      el
    );
  };

  render(App, rootEl);
})(window);
