import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
	render(){
		return (
			<div>
			<p>Hello World!</p>
			<Link to="home" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
			)
	}
}

export default AboutPage;