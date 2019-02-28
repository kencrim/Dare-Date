import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link style={{textDecoration:"none"}} to="/" activeClassName="active">Home</Link>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="about" activeClassName="active">About</Link>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="dare" activeClassName="active">Dare List</Link>
		</nav>
	);
};

export default Header;