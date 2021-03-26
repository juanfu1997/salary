import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
	// baseURL: 'http://hr.hrgdmq.com/glorious',
	// baseURL: 'http://58.254.141.8:10000/applet/wx/',
	baseURL: '/wx/',
	withCredentials: true, // 允许携带token ,这个是解决跨域产生的相关问题
	timeout: 6000,
	// 'proxy' 定义代理服务器的主机名称和端口
	// `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
});
axios.defaults.headers.common['X-Access-Token'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(
	(config) => {
		// let userInfo = window.localStorage.userInfo;
		// let { token } = userInfo;
		// 在发送请求之前做点什么

		return config;
	},
	(error) => {
		// 对请求错误做点什么
		return Promise.reject(error);
	}
);

//添加响应拦截器
axios.interceptors.response.use(
	(response) => {
		//对响应数据做点什么
		return response.data;
	},
	(error) => {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);
export { axios };
