import React from 'react';
import {Link} from 'react-router';
import Checkbox from '@material-ui/core/Checkbox';

class AddDare extends React.Component {
  
  constructor(props) {
    super(props);
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Add A New Dare!</h3>
        <button onClick={this.props.addToList}>Add Dare</button>
			</div>
			);
	}
}

export default AddDare;