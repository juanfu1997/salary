import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { WingBlank, Flex, Result, Icon, Button, Toast } from 'antd-mobile';

const FaceResult = (props) => {
	const location = useLocation();
	const history = useHistory();
	const isQuery = useRef();
	const { cid, signUrl } = queryString.parse(location.search);
	const [faceResult, setFaceResult] = useState(true);
	useEffect(() => {
		React.$$.quertCer().then((res) => {
			isQuery.current = true;
			setFaceResult(res.rows);
		});
	}, [faceResult]);

	const authAgain = () => {
		//重新刷脸认证
		history.goBack();
	};
	// 签署合同事件
	const signHandler = () => {
		if (!signUrl) {
			return Toast.info('签署链接错误，请返回合同列表重新操作');
		}
		window.location.href = signUrl;
	};
	const result_true = (
		<div>
			<Result
				img={
					<Icon
						type="check-circle"
						size="lg"
						style={{ fill: '#1f90E6' }}
					/>
				}
				title="认证成功"
				message="认证成功，请尽快签署合同"
			/>
			<WingBlank style={{ marginTop: '10px' }}>
				<Flex>
					<Flex.Item>
						<Button type="primary" onClick={signHandler}>
							签署合同
						</Button>
					</Flex.Item>
				</Flex>
			</WingBlank>
		</div>
	);
	const result_false = (
		<div>
			<Result
				img={
					<Icon
						type="cross-circle-o"
						className="spe"
						size="lg"
						style={{ fill: '#F13642' }}
					/>
				}
				title="认证失败"
				message="请选择重新认证，或者退出认证"
			/>
			<WingBlank style={{ marginTop: '10px' }}>
				<Flex>
					<Flex.Item>
						<Button
							onClick={() => {
								history.push({
									pathname: '/Realname',
									search: `cid=${cid}&signUrl=${signUrl}`,
								});
							}}
						>
							退出认证
						</Button>
					</Flex.Item>
					<Flex.Item>
						<Button type="primary" onClick={authAgain}>
							重新认证
						</Button>
					</Flex.Item>
				</Flex>
			</WingBlank>
		</div>
	);
	return (
		<div>
			<div>
				{faceResult ? result_true : result_false}
				{/* {isQuery.current && (faceResult ? result_true : result_false)} */}
			</div>
		</div>
	);
};
export default FaceResult;
