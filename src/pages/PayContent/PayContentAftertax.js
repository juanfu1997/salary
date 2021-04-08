import React, { useState, useEffect } from 'react';
import { _aftertaxCollect } from './statement';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const aftertaxCollect = () => {
	const salaryInfo = React.$store.store('salaryInfo');
	const aftertaxHtml = (
		<List renderHeader={() => '基本工资'}>
			{_aftertaxCollect.map((item, key) => {
				return (
					<Item key={key} extra={salaryInfo[item.code]}>
						{item.name}
					</Item>
				);
			})}
		</List>
	);
	return <div>{aftertaxHtml}</div>;
};
export default aftertaxCollect;
