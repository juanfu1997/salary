import React, { useState } from 'react';
import { Row, Col, DatePicker, Select, Button, Modal } from 'antd';
import styles from './Home.module.scss';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;

const Home = () => {
	const options = [
		{
			value: 0,
			text: '工资条',
		},
		{
			value: 1,
			text: '考勤',
		},
	];
	const [currption, setCurrption] = useState(0);
	var _Date = new Date();
	const [curMonth, setCurMonth] = useState(
		_Date.getFullYear() + '-' + _Date.getMonth()
	);
	const [isModalVisible, setIsModalVisible] = useState(true);
	const optionsChange = (e) => {
		setCurrption(e);
	};
	const onDatePickChange = (timestamp, date) => {};
	const handleOk = (e) => {
		setIsModalVisible(false);
	};
	const handleCancel = (e) => {
		setIsModalVisible(false);
	};

	return (
		<div className={styles.page}>
			<div className={styles.queryForm}>
				<Row className={styles.li} justify="center" align="top">
					<Col span="8">类型：</Col>
					<Col span="16">
						<Select
							defaultValue={options[currption].value}
							onChange={optionsChange}
						>
							{options.map((item, key) => {
								return (
									<Option key={key} value={item.value}>
										{item.text}
									</Option>
								);
							})}
						</Select>
					</Col>
				</Row>
				<Row className={styles.li} justify="center" align="top">
					<Col span="8">月份：</Col>
					<Col span="16">
						<DatePicker
							defaultValue={moment(curMonth)}
							picker="month"
							onChange={onDatePickChange}
						/>
					</Col>
				</Row>
			</div>
			<Row className={styles.queryView} justify="center" align="center">
				<Col span="20" className={styles.tipsContainer}>
					<Button
						type="primary"
						icon={<SearchOutlined />}
						size="large"
						block
						style={{
							borderRadius: '20px',
							overflow: 'hidden',
						}}
					>
						查询
					</Button>
				</Col>
			</Row>
			<Modal
				title="提示"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				该用户尚未绑定手机号，请先绑定手机号
			</Modal>
		</div>
	);
};

export default Home;
