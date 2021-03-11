import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './Redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Counter } from './Components/Counter'

ReactDOM.render(

  <Provider store={store}>
    {/* <App /> */}
    <Counter/>
  </Provider>,
  document.getElementById('root')
);
