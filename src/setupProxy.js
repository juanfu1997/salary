const proxy = require('http-proxy-middleware');

// if (process.env.NODE_ENV === 'development') {

// }
module.exports = function (app) {
	app.use(
		proxy('/wx', {
			target: 'http://hr.hrgdmq.com/glorious',
			changeOrigin: true,
			pathRewrite: {
				'^/wx': '/wx',
			},
		})
	);
};
