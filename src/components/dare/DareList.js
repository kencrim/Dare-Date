import React from 'react';
import {Link} from 'react-router';
import Dare from './Dare';

class DareList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dareList: ["dare1","dare2","dare3","dare4"]
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