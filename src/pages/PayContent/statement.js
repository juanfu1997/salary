import PayContentBase from './PayContentBase';
import PayContentGigs from './PayContentGigs';
import PayContentWelfare from './PayContentWelfare';
import PayContentPretax from './PayContentPretax';
import PayContentAftertax from './PayContentAftertax';

export const _baseCollect = [
	{
		name: '基本工资标准',
		code: 'baseSalary',
		arrow: false,
	},
	{
		name: '岗位津贴',
		code: 'postAllowance',
		arrow: false,
	},
	{
		name: '职级津贴',
		code: 'positionAllowance',
		arrow: false,
	},
	{
		name: '绩效基数',
		code: 'performanceBase',
		arrow: false,
	},
];
export const _gigsCollect = [
	{
		name: '出勤工资',
		code: 'attendanceSalary',
		arrow: false,
	},
	{
		name: '病假工资',
		code: 'sickSalary',
		arrow: false,
	},
	{
		name: '加班工资',
		code: 'overtimeSalary',
		arrow: false,
	},
	{
		name: '绩效',
		code: 'performance',
		arrow: false,
	},
	{
		name: '奖金',
		code: 'performanceBonus',
		arrow: false,
	},
];
export const _welfareCollect = [
	{
		name: '餐补-常规',
		code: 'mealSubsidy',
		arrow: false,
	},
	{
		name: '房补-常规',
		code: 'housingSubsidy',
		arrow: false,
	},
	{
		name: '高温补贴',
		code: 'temperatureSubsidy',
		arrow: false,
	},
	{
		name: '体检补贴',
		code: 'physicalSubsidy',
		arrow: false,
	},
	{
		name: '培训津贴',
		code: 'trainSubsidy',
		arrow: false,
	},
	{
		name: '其他补贴',
		code: 'restsSubsidy',
		arrow: false,
	},
];
export const _pretaxCollect = [
	{
		name: '社保个人',
		code: 'socialPerson',
		arrow: false,
	},
	{
		name: '公积金个人',
		code: 'fundPerson',
		arrow: false,
	},
	{
		name: '代扣餐补',
		code: 'withholdMeal',
		arrow: false,
	},
	{
		name: '其他扣款',
		code: 'restsWithhold',
		arrow: false,
	},
];
export const _aftertaxCollect = [
	{
		name: '个税',
		code: 'tax',
		arrow: false,
	},
	{
		name: '年终奖',
		code: 'bonusTax',
		arrow: false,
	},
	{
		name: '税后扣款',
		code: 'deduct',
		arrow: false,
	},
	{
		name: '税后补发',
		code: 'reissue',
		arrow: false,
	},
];
export const salaryList = [
	{
		name: '姓名',
		code: 'name',
		arrow: false,
	},
	{
		name: '手机号',
		code: 'mobileNum',
		arrow: false,
	},
	{
		name: '月份',
		code: 'monthPart',
		arrow: false,
	},
	{
		name: '基本工资汇总',
		code: 'baseCollect',
		arrow: true,
		component: PayContentBase,
		path: 'base',
	},
	{
		name: '薪酬汇总',
		code: 'gigsCollect',
		arrow: true,
		component: PayContentGigs,
		path: 'gigs',
	},
	{
		name: '福利汇总',
		code: 'welfareCollect',
		arrow: true,
		component: PayContentWelfare,
		path: 'welfare',
	},
	{
		name: '税前扣除汇总',
		code: 'pretaxCollect',
		arrow: true,
		component: PayContentPretax,
		path: 'pretax',
	},
	{
		name: '税后加减项汇总',
		code: 'aftertaxCollect',
		arrow: true,
		component: PayContentAftertax,
		path: 'aftertax',
	},
	{
		name: '年终奖',
		code: 'yearBonus',
		arrow: false,
	},
	{
		name: '应发合计',
		code: 'totalOught',
		arrow: false,
	},
	{
		name: '实发工资',
		code: 'payrollSalary',
		arrow: false,
	},
	{
		name: '实发年终奖',
		code: 'payrollBonus',
		arrow: false,
	},
];
