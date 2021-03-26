import React, { useState, useEffect } from 'react';
import styled from './MonthlySalary.module.scss';
import { Row, Col, DatePicker } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';

import Banner from './../../assets/images/salaryBanner.png';

const salaryList = [
	{
		id: 0,
		pretaxCollect: 3000,
		monthPart: '03-25',
	},
	{
		id: 0,
		pretaxCollect: 3000,
		monthPart: '03-25',
	},
];

const MonthlySalary = () => {
	const [salaryYear, setSalaryYear] = useState(moment(moment(), 'YYYY'));
	console.log('moment', moment());
	const DateHandle = (e) => {};
	useEffect(() => {
		React.$$.salaryList('2021');
	}, []);
	return (
		<div className={styled.page}>
			<Row className={styled.header}>
				<Col span={24}>
					<DatePicker
						className={styled.DateSelect}
						defaultValue={salaryYear}
						format="YYYY"
						onChange={DateHandle}
						picker="year"
						size="small"
						allowClear={false}
						bordered={false}
						placeholder={salaryYear}
						inputReadOnly={true}
						suffixIcon={
							<CaretDownOutlined
								style={{ color: '#1296DB', fontSize: '24px' }}
							/>
						}
					/>
					<img className={styled.banner} src={Banner} alt="" />
				</Col>
			</Row>
			<div className={styled.content}></div>
		</div>
	);
};
export default MonthlySalary;
