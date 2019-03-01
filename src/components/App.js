import React, {PropTypes} from 'react';
import Header from './common/Header';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import DareList from '../components/dare/DareList';

class App extends React.Component {
	render(){
		return (
			<div className="container-fluid">
				<BrowserRouter>
					<div>
						<Header/>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/dare" component={DareList} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
			);
	}
}

export default App;