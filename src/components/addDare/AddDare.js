import React from 'react';
import {Link} from 'react-router';
import Checkbox from '@material-ui/core/Checkbox';

class AddDare extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      dareTime : 1
    }
    this.timeChange = this.timeChange.bind(this)
  }

  timeChange(event) {
    this.setState({dareTime: event.target.value})
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Add A New Dare!</h3>
        <button onClick={() => this.props.addToList(null,null,null,null,this.state.dareTime)}>Add Dare</button>
        <div>
        Time Length
          <input onChange={this.timeChange}></input>
        </div>
			</div>
			);
	}
}

export default AddDare;