import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import AboutPage from './components/about/AboutPage';
import DareList from './components/dare/DareList';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />
    <Route path="dare" component={DareList} />
		<Route path="login" component={LoginPage} />
	</Route>
);