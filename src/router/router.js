import Login from '../pages/Login/Login';
import PayContent from '../pages/PayContent/PayContent';
import PayContentBase from '../pages/PayContent/PayContentBase';
import PayContentGigs from '../pages/PayContent/PayContentGigs';
import PayContentWelfare from '../pages/PayContent/PayContentWelfare';
import PayContentPretax from '../pages/PayContent/PayContentPretax';
import PayContentAftertax from '../pages/PayContent/PayContentAftertax';
import MonthlySalary from '../pages/MonthlySalary/MonthlySalary';

import ContractList from '../pages/ContractPages/ContractList/ContractList';
import RealName from '../pages/ContractPages/RealName/RealName';
import FaceResult from '../pages/ContractPages/FaceResult/FaceResult';
let router = [
	{
		path: '/',
		exact: true,
		component: Login,
		meta: {
			title: '工资查询',
		},
	},
	{
		path: '/Login',
		component: Login,
		meta: {
			title: '登录',
		},
	},
	{
		path: '/MonthlySalary',
		component: MonthlySalary,
		meta: {
			title: '工资查询',
		},
	},
	{
		path: '/PayContent',
		component: PayContent,
		meta: {
			title: '工资详情',
		},
		children: [
			{
				path: '/base',
				component: PayContentBase,
				meta: {
					title: '基本工资汇总',
				},
			},
			{
				path: '/gigs',
				component: PayContentGigs,
				meta: {
					title: '薪酬汇总',
				},
			},
			{
				path: '/welfare',
				component: PayContentWelfare,
				meta: {
					title: '福利汇总',
				},
			},
			{
				path: '/pretax',
				component: PayContentPretax,
				meta: {
					title: '税前扣除汇总',
				},
			},
			{
				path: '/aftertax',
				component: PayContentAftertax,
				meta: {
					title: '税前扣除汇总',
				},
			},
		],
	},
	{
		path: '/ContractList',
		component: ContractList,
		meta: {
			title: '合同列表',
		},
	},
	{
		path: '/RealName',
		component: RealName,
		meta: {
			title: '实名',
		},
	},
	{
		path: '/FaceResult',
		component: FaceResult,
		meta: {
			title: '实名结果',
		},
	},
];
export default router;
