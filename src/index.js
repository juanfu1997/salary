import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import { $$, Store } from './private/index';

moment.locale('zh-cn');
React.$$ = $$;
React.$store = Store;
ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
