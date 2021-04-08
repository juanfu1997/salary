import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
	Flex,
	WhiteSpace,
	WingBlank,
	Button,
	InputItem,
	Toast,
} from 'antd-mobile';
import styled from './Login.module.scss';
import { Link, Redirect, useHistory } from 'react-router-dom';
const Login = () => {
	let history = useHistory();
	const timer = useRef();
	const [userInfo, setUserInfo] = useState({
		mobileNum: '',
		code: '',
		password: '',
	});
	const [timerNum, setTimerNum] = useState(0);
	useEffect(() => {
		if (timerNum > 0) {
			timer.current = setInterval(() => {
				setTimerNum((preTimerNum) => preTimerNum - 1);
			}, 1000);
		} else {
			timer.current && clearInterval(timer.current);
		}

		return () => {
			timer.current && clearInterval(timer.current);
		};
	}, [timerNum]);
	const userInfoChangeHandle = (label, value) => {
		value = value.replace(/\s/g, '');
		setUserInfo({
			...userInfo,
			[`${label}`]: value,
		});
	};
	const getVerifyCode = () => {
		if (timerNum) {
			return;
		}
		React.$$.getVerifyCode({
			mobileNum: userInfo.mobileNum,
		}).then((res) => {
			setTimerNum(59);
		});
	};
	// 登录事件
	const LoginHandler = () => {
		let hasUserInfo = true;
		Object.values(userInfo).forEach((value) => {
			value = value.replace(/\s\S/g, '');
			value === '' && (hasUserInfo = false);
		});
		if (!hasUserInfo) {
			return Toast.info('请填写完整的表单');
		}
		React.$$.login(userInfo)
			.then((res) => {
				console.log('登录成功', res);
				// 注册登录成功，储存用户数据
				React.$store.store('userInfo', res.rows);
				React.$store.store('token', res.rows.token);
				history.push({
					pathname: '/MonthlySalary',
				});
			})
			.catch((err) => {
				console.log('失败');
			});
	};
	// useEffect(() => {}, [timerNum]);
	return (
		<div>
			<div className={styled.page}>
				<WingBlank size="md">
					<Flex className={styled.li} justify="left" align="middle">
						<Flex.Item>
							<InputItem
								type="phone"
								clear
								defaultValue={userInfo.mobileNum}
								extra={timerNum ? `${timerNum}s` : '获取验证码'}
								onExtraClick={getVerifyCode}
								onChange={userInfoChangeHandle.bind(
									this,
									'mobileNum'
								)}
							>
								手机号：
							</InputItem>
						</Flex.Item>
					</Flex>
				</WingBlank>
				<WingBlank size="md">
					<Flex className={styled.li} justify="left" align="middle">
						<Flex.Item>
							<InputItem
								type="password"
								clear
								defaultValue={userInfo.password}
								onChange={userInfoChangeHandle.bind(
									this,
									'password'
								)}
							>
								密码：
							</InputItem>
						</Flex.Item>
					</Flex>
				</WingBlank>
				<WingBlank size="md">
					<Flex className={styled.li} justify="left" align="middle">
						<Flex.Item>
							<InputItem
								type="number"
								clear
								defaultValue={userInfo.code}
								onChange={userInfoChangeHandle.bind(
									this,
									'code'
								)}
							>
								验证码：
							</InputItem>
						</Flex.Item>
					</Flex>
				</WingBlank>

				<WingBlank size="lg">
					<Button
						type="primary"
						size="large"
						style={{ borderRadius: '80px', overflow: 'hidden' }}
						onClick={LoginHandler}
					>
						登录
					</Button>
				</WingBlank>
				{/* <WingBlank size="md">
					<Flex
						className={styled.tool}
						justify="center"
						align="middle"
					>
						<Link className={styled.tool_li} to="/Register">
							注册
						</Link>
					</Flex>
				</WingBlank> */}
			</div>
		</div>
	);
};
export default Login;
