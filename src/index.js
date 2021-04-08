import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

import moment from 'moment';
import 'moment/locale/zh-cn';

import { $$, Store, Axios } from './private/index';

moment.locale('zh-cn');
React.$store = Store;
React.$$ = $$;
React.$axios = Axios;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
