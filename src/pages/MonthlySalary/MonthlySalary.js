import React, { useState, useEffect } from 'react';
import styled from './MonthlySalary.module.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { Flex, DatePicker, Icon, WingBlank } from 'antd-mobile';
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
	let history = useHistory();
	let userInfo = React.$store.store('userInfo');
	const [salaryYear, setSalaryYear] = useState(moment().format('YYYY'));
	const [salaryList, setSalartList] = useState([]);
	useEffect(() => {
		React.$$.salaryList(salaryYear)
			.then((res) => {
				const list = res.rows.map((item, key) => {
					let { monthPart, createTime } = item;
					item.monthPart =
						monthPart.slice(0, 4) + '/' + monthPart.slice(4);
					item.createTime = moment(createTime).format('MM-DD');
					return item;
				});
				setSalartList(list);
			})
			.catch((error) => {});
	}, [salaryYear]);
	const toPayContent = (id) => {
		history.push({
			pathname: `/PayContent`,
			search: `id=${id}`,
		});
	};
	if (!userInfo || !userInfo.token) {
		//用户未登录
		return <Redirect to="/Login" />;
	}
	const DatePickerHandler = (date) => {
		console.log('date', date, setSalaryYear);
		date = moment(date).format('YYYY');
		setSalaryYear(date);
	};
	return (
		<Flex direction="column" className={styled.page}>
			<Flex className={styled.header}>
				<DatePicker
					mode="year"
					value={new Date(salaryYear)}
					onOk={(date) => {
						DatePickerHandler(date);
					}}
				>
					<Flex className={styled.DateSelect}>
						<Flex.Item style={{ padding: '0 4px' }}>
							{salaryYear}
						</Flex.Item>
						<Flex.Item>
							<Icon type="down" size="md" color="#1296DB" />
						</Flex.Item>
					</Flex>
				</DatePicker>
				<img className={styled.banner} src={Banner} alt="" />
			</Flex>

			<Flex.Item className={styled.content}>
				{salaryList.map((item, key) => {
					return (
						<div
							key={key}
							className={styled.sallary_li}
							onClick={toPayContent.bind(this, item.id)}
						>
							<div className={styled.monthHeader}>
								{item.monthPart}
							</div>
							<Flex
								className={styled.salaryContent}
								justify="between"
							>
								<Flex.Item>
									<Flex
										className={styled.content_left}
										direction="column"
										justify="center"
										align="start"
									>
										{/* 实发工资 */}
										<div className={styled.payrollSalary}>
											{item.payrollSalary}
										</div>
										<div className={styled.createTime}>
											{item.createTime}
										</div>
									</Flex>
								</Flex.Item>
								<Flex.Item>
									<Flex
										justify="end"
										className={styled.arrow_right}
									>
										<Icon
											type="right"
											size="lg"
											color="#ccc"
										/>
									</Flex>
								</Flex.Item>
							</Flex>
						</div>
					);
				})}
			</Flex.Item>
		</Flex>
	);
};
export default MonthlySalary;
