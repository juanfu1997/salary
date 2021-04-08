import { axios as Axios } from './Axios.js';
import { store } from '../utils/store';
import cookie from 'react-cookies';

/**
 *	获取手机号验证码
 * @param {data} mobileNum
 * @returns
 */
export function getVerifyCode(data) {
	return Axios.post('getVerifyCode', data);
}
/**
 *	注册用户
 * @param {*} data
 * @returns
 */
export function register(data) {
	return Axios.post('signIn', data);
}
/**
 * 	登录
 * @param {*} data
 * @returns
 */
export function login(data) {
	return Axios.post('login', data);
}
/**
 *	查询工资列表
 * @param {String} yearPart 查询年份
 * @returns
 */
export function salaryList(yearPart) {
	return Axios.post('salary/salaryTitle/list', {
		yearPart,
	});
}
/**
 * 根据id查询工资详情
 * @param {int} id
 * @returns
 */
export function salaryDetail(id) {
	return Axios.post('salary/salaryTitle/detail', { id });
}
/**
 * 合同列表查询
 * @param {string}} status
 * @returns
 */
export function pactContractList(status) {
	return Axios.post('pact/pactContract/list', { status });
}
/**
 * 查询当前用户实名状态
 * @returns
 */
export function quertCer() {
	return Axios.post('pact/pactContract/queryCer', {});
}
/**
 * 对当前登录人进行刷脸认证
 * @param {string} redirectPath 刷脸结束返回的结果页url
 * @returns
 */
export function faceAuth(redirectPath) {
	return Axios.post('pact/pactContract/getAuthFace', { redirectPath });
}
/**
 *获取用户信息
 * @returns
 */
export function getUserInfo() {
	return Axios.post('wxCommon/getUserInfo', {});
}
/**
 *查询登录用户手机号的三要素校验
 * @returns
 */
export function certification() {
	return Axios.post('pact/pactContract/certification', {});
}
/**
 *获取校验验证码
 * @returns
 */
export function personalAuthCode() {
	return Axios.post('pact/pactContract/personalAuthCode', {});
}

/**
 * 校验验证码
 * @param {string} vcode	短信验证码
 * @param {string} personalIdentity3Key	私钥
 * @returns
 */
export function authCodeVerify(vcode, personalIdentity3Key) {
	return Axios.post('pact/pactContract/authCodeVerify', {
		vcode,
		personalIdentity3Key,
	});
}
