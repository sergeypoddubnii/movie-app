import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { SnackbarProvider } from 'notistack';
import App from './components/App/App';

import './stylesheet/main.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
