import React, {PropTypes} from 'react';
import Header from './common/Header';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import DareList from '../components/dare/DareList';
import AddDare from '../components/addDare/AddDare';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dareList: []
    };
    this.dareComplete = this.dareComplete.bind(this)
    this.dareFail = this.dareFail.bind(this)
    this.addDare = this.addDare.bind(this)
  }

  dareComplete(dare) {
    dare.complete = true;
    this.setState({dareList: this.state.dareList})
  }

  dareFail(dare) {
    dare.fail = true;
    this.setState({dareList: this.state.dareList})
  }

  addDare(dare, bool, strike, timer, timerTime, repeat, maxStrikes) {
    let currentTime = new Date;
    let newDare = {bool: true, strikes: true, timer: true, timerTimeMins: timerTime, repeat: false, maxStrikes: 3, dare: "This is the dare", complete: false, fail: false, timeCreated: currentTime}
    this.state.dareList.push(newDare)
    this.setState({dareList: this.state.dareList});
  }

	render(){
		return (
			<div className="container-fluid">
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/addDare" render={() => <AddDare addToList={this.addDare} />}/>
					<Route path="/dare" render={() => <DareList dareList={this.state.dareList} complete={this.dareComplete} fail={this.dareFail} />}/>
				</Switch>
			</div>
			);
	}
}

export default App;