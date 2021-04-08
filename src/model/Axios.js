import React from 'react';
import Axios from 'axios';
import { Toast } from 'antd-mobile';
import { store as Store } from '../utils/store';
import qs from 'qs';

import { useHistory } from 'react-router-dom';

const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。',
	10010: '登录信息失效，请重新登录',
};

const API_BASE = {
	development: '/wx',
	trial: 'http://hr.hrgdmq.com/glorious/wx/',
	production: 'http://gyh.shaohuahr.com/glorious/wx/',
};
const baseURL = API_BASE[process.env.NODE_ENV];
console.log('process.env.BABEL_ENV', process.env, baseURL);
const axios = Axios.create({
	baseURL,
	withCredentials: true, // 允许携带token ,这个是解决跨域产生的相关问题
	timeout: 6000,
	// 'proxy' 定义代理服务器的主机名称和端口
	// `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
});
console.log('this', localStorage.getItem('useInfo'));
// axios.defaults.headers.common['X-Access-Token'] = React.$store('useInfo').token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(
	(config) => {
		// let userInfo = window.localStorage.userInfo;
		// let { token } = userInfo;
		// 在发送请求之前做点什么
		Toast.loading('loading···', 0);
		const userInfo = Store('userInfo');
		const token = userInfo ? userInfo.token : '';
		if (token) {
			config.headers['X-Access-Token'] = token;
		}
		return config;
	},
	(error) => {
		Toast.hide();
		// 对请求错误做点什么
		return Promise.reject(error);
	}
);

//添加响应拦截器
axios.interceptors.response.use(
	(response) => {
		Toast.hide();
		//对响应数据做点什么
		console.log('login@@');
		if (response.status != 200 || response.data.code != 0) {
			Toast.info(response.data.msg);
			if (response.data.code == 10010) {
				Toast.offline(codeMessage[response.data.code], 3, () => {
					window.location.href = '/glorioushtml/Login';
				});
			}
			return Promise.reject(response);
		}
		return response.data;
	},
	(error) => {
		Toast.hide();
		// 对响应错误做点什么
		var originalRequest = error.config;
		if (
			error === undefined ||
			(error.code === 'ECONNABORTED' &&
				error.message.indexOf('timeout') != -1 &&
				!originalRequest._retry)
		) {
			Toast.info('服务请求超时');
			// return Promise.reject(error);
		} else {
			const {
				response: {
					status,
					statusText,
					data: { msg = '服务器发生错误' },
				},
			} = error;

			const text = codeMessage[status] || statusText || msg;
			Toast.info(`${status}:${text}`);
		}
		console.log('error', error);

		return Promise.reject(error);
	}
);
export { axios, baseURL };
