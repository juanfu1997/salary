import React, {
	useState,
	useEffect,
	useRef,
	useImperativeHandle,
	forwardRef,
} from 'react';
import styled from './MsgMask.module.scss';
import { Flex, Button, Toast } from 'antd-mobile';
import safe from '../../assets/images/safe.png';
const MsgMask = (props, ref) => {
	const phone = props.phone.substr(0, 3) + '****' + props.phone.substr(7);
	const timer = useRef();
	const [isShowMask, setIsShowMask] = useState(false);
	useEffect(() => {
		if (!isShowMask) {
			// 关闭弹窗时重置数据
			setTimeNum(0);
			setVcode('');
			setPersonalKey('');
			timer.current && clearTimeout(timer.current);
		}
	});
	const [timeNum, setTimeNum] = useState(0);
	useEffect(() => {
		if (timeNum > 0) {
			timer.current = setTimeout(() => {
				setTimeNum((n) => n - 1);
			}, 1000);
		} else {
			timer.current && clearTimeout(timer.current);
		}

		return () => {
			timer.current && clearTimeout(timer.current);
		};
	});
	const [vcode, setVcode] = useState('');
	const [personalKey, setPersonalKey] = useState('');
	useEffect(() => {});
	useImperativeHandle(ref, () => ({
		changeShowMask: (show) => {
			setIsShowMask(show);
		},
	}));
	const inputHandler = (e) => {
		setVcode(e.target.value);
	};
	// 验证码事件
	const valiButtonHandler = () => {
		if (timeNum) {
			return;
		}
		React.$$.personalAuthCode().then((res) => {
			setTimeNum(59);
			setPersonalKey(res.rows.personalIdentity3Key);
		});
	};
	// 提交事件
	const submitHandler = () => {
		if (vcode.length != 6) {
			return Toast.info('请填写6位验证码');
		}
		React.$$.authCodeVerify(vcode, personalKey).then((res) => {
			setIsShowMask(false);
			window.location.href = props.signUrl;
		});
	};
	const MASK_HTML = (
		<div className={styled.mask} onClick={() => setIsShowMask(false)}>
			<div
				className={styled.maskBody}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styled.header}>
					<Flex direction="column">
						<Flex.Item>
							<span className={styled.title}>实名校验</span>
						</Flex.Item>
						<Flex>
							<img className={styled.safe} src={safe} />
							<Flex.Item>
								<span>
									您在安全的签约环境中，即将使用数字证书签署
								</span>
							</Flex.Item>
						</Flex>
					</Flex>
				</div>
				<div className={styled.content}>
					<div className={styled.contentItem}>
						<div>点击"获取验证码"后，将发送短信验证码至</div>
						<div className={styled.phone}>{phone}</div>
						<Flex justify="around">
							<Flex.Item>
								<input
									className={styled.inputItem}
									type="text"
									defaultValue={vcode}
									placeholder="请输6位验证码"
									maxLength="6"
									onChange={inputHandler}
								/>
							</Flex.Item>
							<Button
								activeClassName={styled.valiButton}
								type="primary"
								size="small"
								inline={true}
								onClick={valiButtonHandler}
							>
								{timeNum ? `${timeNum}s` : '获取验证码'}
							</Button>
						</Flex>
						<Button
							style={{ marginTop: '20px' }}
							type="primary"
							size="large"
							onClick={submitHandler}
						>
							提交
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
	return <div>{isShowMask ? MASK_HTML : null}</div>;
};
export default forwardRef(MsgMask);
