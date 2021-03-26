import Register from '../pages/Register/Register';
import PayContent from '../pages/PayContent/PayContent';
import ContractList from '../pages/ContractList/ContractList';
import MonthlySalary from '../pages/MonthlySalary/MonthlySalary';

let router = [
	{
		path: '/Register',
		component: Register,
		meta: {
			title: '注册页面',
		},
	},

	{
		path: '/ContractList',
		component: ContractList,
		meta: {
			title: '合同列表',
		},
	},
	{
		path: '/MonthlySalary',
		component: MonthlySalary,
		meta: {
			title: '工资查询',
		},
		childRoutes: [
			{
				path: '/PayContent',
				component: PayContent,
				meta: {
					title: '工资详情',
				},
			},
		],
	},
];
export default router;
