import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav>
			<Link style={{textDecoration:"none"}} to="/" activeclassname="active">Home</Link>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="about" activeclassname="active">About</Link>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="dare" activeclassname="active">Dare List</Link>
		</nav>
	);
};

export default Header;