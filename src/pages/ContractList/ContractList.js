import React, { useState, useEffect } from 'react';
import styled from './ContractList.module.scss';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import $$ from '../../model/request';

const ContractList = () => {
	const [contractState, setContractState] = useState([
		{ label: '待签署', value: 0 },
		{ label: '待审核', value: 1 },
		{ label: '已签署', value: 2 },
		{ label: '已作废', value: 3 },
	]);
	useEffect(() => {
		// console.log('$$', $$);
		// $$.getLoginCode({ usename: 'hjx001', mobilePhone: '17620162705' });
	});
	return (
		<div className={styled.page}>
			<div className={styled.header}>
				{contractState.map((item, key) => {
					return (
						<div key={key} className={styled['nav-item']}>
							{item.label}
						</div>
					);
				})}
			</div>
			<div className={styled.content}>
				<div className={styled.searchView}>
					<SearchOutlined
						className={styled.searchIcon}
						style={{ fontSize: '16px' }}
					/>
					<input className={styled.searchInput} type="text" />
				</div>
				<div className={styled.contractUl}>
					<div className={styled.contractLi}>
						{/* 缺少合同列表html */}
					</div>
					<div className={styled.addView}>
						<PlusCircleOutlined style={{ fontSize: '40px' }} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContractList;
