import React from 'react';
import { Flex, WingBlank, WhiteSpace, Badge, Toast } from 'antd-mobile';
import styled from './ContractItem.module.scss';
const ContractItem = (props) => {
	const { item, history } = props;
	console.log('查询', this);
	const signHandler = () => {
		//查询用当前户实名状态，防止数据延迟
		React.$$.quertCer().then((res) => {
			if (item.status != 3) {
				return;
			}
			if (res.rows) {
				//已实名
				window.location.href = item.signUrl;
			} else {
				// 未实名
				history.push({
					pathname: '/realname',
					search: `id=1&signUrl=${item.signUrl}`,
				});
			}
		});
	};
	return (
		<div onClick={signHandler}>
			<WingBlank className={styled.itemView} size="sm">
				<Flex className={styled.bold} justify="start" align="end">
					<div>签署人：</div>
					<div className={styled.signer}>
						{item.name}
						{item.pactStatus == 2 ? (
							<Badge
								text="已实名"
								style={{
									marginLeft: '6px',
									backgroundColor: '#1296db',
								}}
							/>
						) : (
							<Badge
								text="未实名"
								style={{
									marginLeft: '6px',
									backgroundColor: '#1296db',
								}}
							/>
						)}
					</div>
				</Flex>
				<Flex className={styled.bold}>
					<div>身份证号：</div>
					<Flex.Item>{item.identity}</Flex.Item>
				</Flex>
				<Flex>
					<div>合同名称：</div>
					<Flex.Item>{item.title}</Flex.Item>
				</Flex>
				<Flex>
					<div>签署有效期：</div>
					<Flex.Item>{item.urlExpire}</Flex.Item>
				</Flex>
			</WingBlank>
		</div>
	);
};
export default ContractItem;
