import React, {Proptypes} from 'react';

class App extends React.Component {
	render(){
		return (
			<div className="container-fluid">
			<p>Header</p>
			{this.props.children}
			</div>
			)
	}
}

App.propTypes = {
	children: Proptypes.object.isRequired
};

export default App;