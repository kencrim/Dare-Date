import React from 'react';
import {Link} from 'react-router';
import Dare from './Dare';

class DareList extends React.Component {
  
  constructor(props) {
    super(props);
  }

	render(){
		return (
			<div className="jumbotron">
        <h3>Dare List</h3>
        {this.props.dareList.map((dare, index) => {
          if(dare.complete){
            return (<div key={index}>Completed Dare!</div>)
          } else if(dare.fail){
            return (<div key={index}>Failed Dare!</div>)
          } else {
            return (<Dare key={index} dare={dare} complete={this.props.complete} fail={this.props.fail}/>);
          }
        })}
			</div>
			);
	}
}

export default DareList;