import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/'; // root reducer
import { Provider } from 'react-redux'; // Redux
import configureStore from './store/configureStore'; // configureStore is a function that returns a store
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate is a component that allows you to persist the state of your application
import 'antd/dist/antd.css';

const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
