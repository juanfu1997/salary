import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import quertString from 'query-string';
import PayContentBase from './PayContentBase';
import PayContentGigs from './PayContentGigs';
import PayContentWelfare from './PayContentWelfare';
import PayContentPretax from './PayContentPretax';
import PayContentAftertax from './PayContentAftertax';

import { List } from 'antd-mobile';
import { salaryList } from './statement';
import styled from './PayContent.module.scss';
const queryString = require('query-string');
const Item = List.Item;
const Brief = Item.Brief;

const PayContent = (e) => {
	let location = useLocation();
	const { id, type } = quertString.parse(location.search);
	console.log('location', location, id, type);
	// let { id, type } = location.params;
	let history = useHistory();
	sessionStorage.setItem('pc_data', location.params);
	const [sId, setSId] = useState('');
	console.log('进入工资详情', id, location);
	const [salaryInfo, setSalaryInfo] = useState([]);
	useEffect(() => {
		React.$$.salaryDetail(id)
			.then((res) => {
				setSalaryInfo(res.rows);
				React.$store.store('salaryInfo', res.rows);
				setSalaryListHtml(
					<List renderHeader={() => '工资详情'}>
						{salaryList.map((item, key) => {
							return (
								<Item
									key={key}
									extra={res.rows[item.code]}
									arrow={item.arrow && 'horizontal'}
									onClick={() => {
										item.path &&
											history.push({
												pathname: `/Paycontent/${item.path}`,
												search: `id=${id}&type=${item.path}`,
											});
									}}
								>
									{item.name}
								</Item>
							);
						})}
					</List>
				);
			})
			.catch((error) => {});
	}, ['salaryInfo']);
	const [salaryListHtml, setSalaryListHtml] = useState('');

	return (
		<div className={styled.page}>
			{!type ? salaryListHtml : null}
			{type == 'base' ? <PayContentBase /> : null}
			{type == 'gigs' ? <PayContentGigs /> : null}
			{type == 'welfare' ? <PayContentWelfare /> : null}
			{type == 'pretax' ? <PayContentPretax /> : null}
			{type == 'aftertax' ? <PayContentAftertax /> : null}
		</div>
	);
};
export default PayContent;
