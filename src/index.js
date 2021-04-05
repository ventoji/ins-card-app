import ReactDOM from "react-dom";
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './app';

export const store = configureStore();


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("ins-app")
  );