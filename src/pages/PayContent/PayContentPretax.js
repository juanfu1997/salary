import React, { useState, useEffect } from 'react';
import { _pretaxCollect } from './statement';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const pretaxCollect = () => {
	const salaryInfo = React.$store.store('salaryInfo');
	const preTaxHtml = (
		<List renderHeader={() => '基本工资'}>
			{_pretaxCollect.map((item, key) => {
				return (
					<Item key={item.code} extra={salaryInfo[item.code]}>
						{item.name}
					</Item>
				);
			})}
		</List>
	);
	return <div>{preTaxHtml}</div>;
};
export default pretaxCollect;
