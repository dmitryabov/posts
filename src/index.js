import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
  
);

serviceWorker.unregister();
