import React, { useState, useEffect } from 'react';
import { _welfareCollect } from './statement';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const welfareCollect = () => {
	const salaryInfo = React.$store.store('salaryInfo');
	const welfareHtml = (
		<List renderHeader={() => '基本工资'}>
			{_welfareCollect.map((item, key) => {
				return (
					<Item key={item.code} extra={salaryInfo[item.code]}>
						{item.name}
					</Item>
				);
			})}
		</List>
	);
	return <div>{welfareHtml}</div>;
};
export default welfareCollect;
