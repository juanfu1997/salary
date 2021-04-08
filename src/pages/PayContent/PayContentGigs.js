import React, { useState, useEffect } from 'react';
import { _gigsCollect } from './statement';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const gigsCollect = () => {
	const salaryInfo = React.$store.store('salaryInfo');
	const gigsHtml = (
		<List renderHeader={() => '基本工资'}>
			{_gigsCollect.map((item, key) => {
				return (
					<Item key={item.code} extra={salaryInfo[item.code]}>
						{item.name}
					</Item>
				);
			})}
		</List>
	);
	return <div>{gigsHtml}</div>;
};
export default gigsCollect;
