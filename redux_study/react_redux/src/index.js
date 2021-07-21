import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 导入Provider
import { Provider } from 'react-redux';

// 导入store
import store from './store';

// 使用Provider标签包裹根组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
