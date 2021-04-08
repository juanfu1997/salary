import React, { useState, useEffect } from 'react';
import { _baseCollect } from './statement';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const baseCollect = (e) => {
	console.log('type');
	const salaryInfo = React.$store.store('salaryInfo');

	const baseHtml = (
		<List renderHeader={() => '基本工资'}>
			{_baseCollect.map((item, key) => {
				return (
					<Item key={item.code} extra={salaryInfo[item.code]}>
						{item.name}
					</Item>
				);
			})}
		</List>
	);
	return <div>{baseHtml}</div>;
};
export default baseCollect;
