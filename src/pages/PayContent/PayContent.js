import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import statement from './statement';
import styles from './PayContent.module.scss';

const PayContent = () => {
	const [payOptions, setPayOptions] = useState(statement._payOptions);
	const [attendance, setAttendance] = useState(statement._attendance);
	const [dataType, setDataType] = useState(0);
	// const PayHTML = payOptions.map((item, key) => {
	// 	return (
	// 		<Row justify="space-around" align="middle" key={key}>
	// 			<Col span="8">
	// 				<div style={{ textAlign: 'left' }}>{item.name}</div>
	// 			</Col>
	// 			<Col span="12">
	// 				<div style={{ textAlign: 'right' }}>{item.value}</div>
	// 			</Col>
	// 		</Row>
	// 	);
	// });
	// const ATTEHTML = attendance.map((item, key) => {
	// 	return (
	// 		<Row justify="space-around" align="middle" key={key}>
	// 			<Col span="8">
	// 				<div style={{ textAlign: 'left' }}>{item.name}</div>
	// 			</Col>
	// 			<Col span="12">
	// 				<div style={{ textAlign: 'right' }}>{item.value}</div>
	// 			</Col>
	// 		</Row>
	// 	);
	// });
	const typeObj = {
		0: payOptions,
		1: attendance,
	};
	const _HTMLType = typeObj[dataType];
	const _HTML = _HTMLType.map((item, key) => {
		return (
			<Row justify="space-around" align="middle" key={key}>
				<Col span="8">
					<div style={{ textAlign: 'left' }}>{item.name}</div>
				</Col>
				<Col span="12">
					<div style={{ textAlign: 'right' }}>{item.value}</div>
				</Col>
			</Row>
		);
	});
	return <div className={styles.page}>{_HTML}</div>;
};
export default PayContent;
