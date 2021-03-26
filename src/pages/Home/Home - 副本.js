import React, { Component } from 'react';
import { Row, Col, DatePicker, Select, Button, Modal } from 'antd';
import './Home.scss';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
				{
					value: 0,
					text: '工资条',
				},
				{
					value: 1,
					text: '考勤',
				},
			],
			isModalVisible: true,
		};
	}
	onChange = (moment, date) => {
		console.log('onPanelChange', moment, date);
	};
	optionsChange = (e) => {
		console.log('optionsChange', e);
	};
	handleOk = (e) => {
		this.setState({
			isModalVisible: false,
		});
	};
	handleCancel = (e) => {
		this.state.isModalVisible &&
			this.setState({
				isModalVisible: false,
			});
	};
	render() {
		return (
			<div>
				<div className="page">
					<div className="queryForm">
						<Row className="li" justify="center" align="top">
							<Col span="8">类型：</Col>
							<Col span="16">
								<Select
									defaultValue={this.state.options[0].value}
									onChange={this.optionsChange}
								>
									{this.state.options.map((item, key) => {
										return (
											<Option
												key={key}
												value={item.value}
											>
												{item.text}
											</Option>
										);
									})}
								</Select>
							</Col>
						</Row>
						<Row className="li" justify="center" align="top">
							<Col span="8">月份：</Col>
							<Col span="16">
								<DatePicker
									picker="month"
									onChange={this.onChange}
								/>
							</Col>
						</Row>
					</div>
					<Row className="queryView" justify="center" align="center">
						<Col span="20" className="tipsContainer">
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
						title="尚未绑定手机"
						visible={this.state.isModalVisible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Home;
