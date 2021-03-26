import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Register.module.scss';
import { $$, Axios } from '../../private/index';
import { Link, Redirect, useHistory } from 'react-router-dom';
const Register = () => {
	let history = useHistory();
	const timer = useRef();

	const [codeTips, setCodeTips] = useState('获取验证码');
	const [userInfo, setUserInfo] = useState({
		mobileNum: '',
		code: '',
		name: '',
	});
	// useEffect(() => {}, [userInfo.mobileNum]);
	const [timerNum, setTimerNum] = useState(0);
	useEffect(() => {
		console.log('mobileNum', userInfo, timerNum);
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
	const userInfoChangeHandle = (e) => {
		let label = e.target.attributes.label.value;
		setUserInfo({
			...userInfo,
			[`${label}`]: e.target.value,
		});
	};
	const getVerifyCode = () => {
		console.log('userInfo', userInfo.mobileNum);
		React.$$.getVerifyCode({
			mobileNum: userInfo.mobileNum,
		}).then((res) => {
			setTimerNum(59);
		});
	};
	const Register = () => {
		history.push('/pages/MonthlySalary/MonthlySalary');
		React.$$.register(userInfo)
			.then((res) => {
				console.log('登录成功', res);
				// 注册登录成功，储存用户数据
				React.$store.store('userInfo', res.rows);
			})
			.catch((err) => {
				console.log('失败');
			});
	};
	// useEffect(() => {}, [timerNum]);
	return (
		<div>
			<div className={styles.page}>
				<Row className={styles.li} justify="left" align="middle">
					<Col span="6">姓名：</Col>
					<Col span="16">
						<Input
							defaultValue={userInfo.name}
							label="name"
							onChange={userInfoChangeHandle}
						/>
					</Col>
				</Row>
				<Row className={styles.li} justify="left" align="middle">
					<Col span="6">手机号：</Col>
					<Col span="10">
						<Input
							defaultValue={userInfo.mobileNum}
							label="mobileNum"
							onChange={userInfoChangeHandle}
						/>
					</Col>
					<Col span="8">
						<Button onClick={getVerifyCode}>
							{timerNum ? `${timerNum}s` : '获取验证码'}
						</Button>
					</Col>
				</Row>
				<Row className={styles.li} justify="left" align="middle">
					<Col span="6">验证码：</Col>
					<Col span="16">
						<Input
							defaultValue={userInfo.code}
							label="code"
							onChange={userInfoChangeHandle}
						/>
					</Col>
				</Row>
				<Row
					className={styles.queryView}
					justify="center"
					align="center"
				>
					<Col span="20" className={styles.tipsContainer}>
						<Button
							type="primary"
							size="large"
							block
							style={{ borderRadius: '10px', overflow: 'hidden' }}
							onClick={Register}
						>
							注册
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default Register;
