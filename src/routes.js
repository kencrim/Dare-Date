import React from 'react';
import {Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import DareList from './components/dare/DareList';

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="about" component={AboutPage} />
			<Route path="dare" component={DareList} />
		</Switch>
	)
}