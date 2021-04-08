import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContractItem from '../../../component/ContractItem/ContractItem';
import styled from './ContractList.module.scss';
import { Flex, Tabs, SearchBar, WhiteSpace, ListView } from 'antd-mobile';

const ContractList = () => {
	const history = useHistory();
	const [contStatus, setContStatus] = useState(0);
	const [contractState, setContractState] = useState([
		{ label: '待签署', value: 0 },
		{ label: '待审核', value: 1 },
		{ label: '已签署', value: 2 },
		{ label: '已作废', value: 3 },
	]);
	useEffect(() => {
		React.$$.pactContractList(contStatus).then((res) => {
			setContractDataList(res.rows);
		});
	}, [contStatus]);
	const [contractDataList, setContractDataList] = useState([]);
	useEffect(() => {});
	const tabsHandler = (tab, index) => {
		setContStatus(index);
	};
	return (
		<div>
			<Flex className={styled.page} direction="column">
				<Tabs
					tabs={contractState}
					initialPage={0}
					renderTab={(tab) => <span>{tab.label}</span>}
					onTabClick={tabsHandler}
				>
					<Flex.Item className={styled.content}>
						{contractDataList.map((item, key) => {
							return (
								<ContractItem
									key={key}
									item={item}
									history={history}
								/>
							);
						})}
					</Flex.Item>
				</Tabs>
			</Flex>
		</div>
	);
};
export default ContractList;
