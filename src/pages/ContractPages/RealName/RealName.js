import React, { useEffect, useState, useRef } from 'react';
import { createForm } from 'rc-form';
import { useLocation } from 'react-router-dom';
import MsgMask from '../../../component/MsgMask/MsgMask';
import queryString from 'query-string';
import {
	Flex,
	InputItem,
	WhiteSpace,
	WingBlank,
	Button,
	Toast,
} from 'antd-mobile';
import styled from './RealName.module.scss';
import { baseURL } from '../../../private/index';

const RealName = (props) => {
	const location = useLocation();
	const childRef = useRef();
	const { cid, signUrl } = queryString.parse(location.search);
	const [userInfo, setUserInfo] = useState({
		name: '1',
		idcard: '',
		phone: '',
	});
	useEffect(() => {
		React.$$.getUserInfo().then((res) => {
			setUserInfo({
				name: res.rows.name,
				idcard: res.rows.idcardNum,
				phone: res.rows.mobileNum,
			});
		});
	}, []);
	const { getFieldProps, getFieldError, getFieldsError } = props.form;
	// 表单完整认证
	const valiFrom = () => {
		return new Promise((resolve, reject) => {
			let valiUserInfo = true;
			Object.values(userInfo).map((item, key) => {
				item.length && (valiUserInfo = true);
			});
			if (valiUserInfo) {
				return Toast.info('请填写完整表单');
			}
		});
	};
	const setName = (e) => {
		console.log('setname', e);
	};
	// 短信认证
	const msgSubmit = () => {
		React.$$.certification().then(() => {
			childRef.current.changeShowMask(true);
		});
	};
	//人脸认证
	const faceSubmit = () => {
		let redirectPath =
			window.location.origin +
			`/glorioushtml/FaceResult?signUrl=${signUrl}&cid=${cid}`;
		React.$$.faceAuth(redirectPath).then((res) => {
			window.location.href = res.rows;
		});
	};

	//错误提示点击事件
	const onErrorClick = (error) => {
		Toast.info(error);
	};
	return (
		<div className={styled.page}>
			<InputItem
				placeholder="请输入身份证号"
				value={userInfo.idcard}
				editable={false}
			>
				身份证号
				<span style={{ color: 'red', fontSize: '16px' }}>*</span>：
			</InputItem>
			<InputItem
				placeholder="请输入姓名"
				value={userInfo.name}
				editable={false}
			>
				姓名
				<span style={{ color: 'red', fontSize: '16px' }}>*</span>：
			</InputItem>
			<InputItem
				placeholder="请输入手机号"
				value={userInfo.phone}
				editable={false}
			>
				手机号
				<span style={{ color: 'red', fontSize: '16px' }}>*</span>：
			</InputItem>
			<WingBlank size="lg" className={styled.authButton}>
				<Flex>
					<Flex.Item>
						<Button size="large" onClick={msgSubmit}>
							短信认证
						</Button>
					</Flex.Item>
					<Flex.Item>
						<Button
							type="primary"
							size="large"
							onClick={faceSubmit}
						>
							人脸识别
						</Button>
					</Flex.Item>
				</Flex>
			</WingBlank>
			<MsgMask
				ref={childRef}
				phone={userInfo.phone}
				cid={cid}
				signUrl={signUrl}
			/>
		</div>
	);
};
export default createForm()(RealName);
