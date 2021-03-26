import { axios as Axios } from './Axios.js';

/**
 *
 * @param {data} mobileNum
 * @returns
 */
export function getVerifyCode(data) {
	return Axios.post('getVerifyCode', data);
}
/**
 *
 * @param {*} data
 * @returns
 */
export function register(data) {
	return Axios.post('signIn', data);
}
/**
 *
 * @param {String} yearPart 查询年份
 * @returns
 */
export function salaryList(yearPart) {
	return Axios.post('salary/salaryTitle/list', { yearPart });
}
