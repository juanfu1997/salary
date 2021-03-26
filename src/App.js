import Home from './pages/Home/Home';
import './App.css';
import './assets/css/reset.scss';
// import { NavBar, Icon } from 'antd-mobile';

import router from './pages/router/router';

import { Router, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();

const App = () => {
	return (
		<BrowserRouter>
			{/* <div className="App"> */}
			<Router history={hashHistory}>
				{router.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={(props) => {
								console.log(
									'route.meta.title',
									route.meta.title
								);
								document.title = route.meta.title || '123';
								return (
									<route.component
										props={props}
									></route.component>
								);
							}}
						/>
					);
				})}
			</Router>
			{/* </div> */}
			{console.log(
				'router',
				router.map((value, index) => {
					console.log('value', value);
				})
			)}
			<Redirect to="/pages/Register/Register" />
		</BrowserRouter>
	);
};

export default App;
