import React from 'react';
import {Link} from 'react-router';
import Dare from './Dare';

class DareList extends React.Component {
  
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
    let newDare = {bool: true, strikes: true, timer: true, timerTimeMins: 1, repeat: false, maxStrikes: 3, dare: "This is the dare", complete: false, fail: false, timeCreated: currentTime}
    this.state.dareList.push(newDare)
    this.setState({dareList: this.state.dareList});
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Dare List</h3>
        <button onClick={this.addDare}>Add Dare</button>
        {this.state.dareList.map((dare, index) => {
          if(dare.complete){
            return (<div key={index}>Completed Dare!</div>)
          } else if(dare.fail){
            return (<div key={index}>Failed Dare!</div>)
          } else {
            return (<Dare key={index} dare={dare} complete={this.dareComplete} fail={this.dareFail}/>);
          }
        })}
			</div>
			);
	}
}

export default DareList;