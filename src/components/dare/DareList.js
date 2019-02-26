import React from 'react';
import {Link} from 'react-router';

class DareList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dareList: {}
    };
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Dare List</h3>
			</div>
			);
	}
}

export default DareList;