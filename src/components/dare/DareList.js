import React from 'react';
import {Link} from 'react-router';
import Dare from './Dare';

class DareList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dareList: [{bool: true, strikes: true, timer: true, currentStrikes: 0, date: null}]
    };
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Dare List</h3>
        {this.state.dareList.map((dare) => {
          return (<Dare dare={dare}/>);
        })}
			</div>
			);
	}
}

export default DareList;