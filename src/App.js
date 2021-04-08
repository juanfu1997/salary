import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './assets/css/reset.scss';
import { Flex } from 'antd-mobile';
import router from './router/router';
import {
	Router,
	Route,
	Link,
	BrowserRouter,
	Redirect,
	useHistory,
	useLocation,
} from 'react-router-dom';
import TabbarNav from './component/TabbarNav/TabbarNav';
const App = (e) => {
	const childRef = useRef();
	return (
		<BrowserRouter basename="/glorioushtml">
			{router.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						render={(props) => {
							console.log('route.meta.title', route, childRef);
							document.title = route.meta.title || '123';
							return (
								<Flex className="App-page" direction="column">
									<Flex.Item>
										<route.component
											props={props}
										></route.component>
									</Flex.Item>
									<TabbarNav curPath={route.path}></TabbarNav>
								</Flex>
							);
						}}
					/>
				);
			})}
		</BrowserRouter>
	);
};

export default App;
