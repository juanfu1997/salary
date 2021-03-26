import Register from '../Register/Register';
import PayContent from '../PayContent/PayContent';
import MonthlySalary from '../MonthlySalary/MonthlySalary';
let router = [
	{
		path: '/',
		exact: true,
		component: Register,
		meta: {
			title: '注册',
		},
	},
	{
		path: '/Register',
		component: Register,
		meta: {
			title: '注册',
		},
	},
	{
		path: 'MonthlySalary',
		component: MonthlySalary,
		meta: {
			title: '工资查询',
		},
		children: [
			{
				path: 'PayContent',
				component: PayContent,
				meta: {
					title: '工资详情',
				},
			},
		],
	},
];
export default router;
