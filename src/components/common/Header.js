import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav>
			<IndexLink style={{textDecoration:"none"}} to="/" activeClassName="active">Home</IndexLink>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="about" activeClassName="active">About</Link>
			{"  |  "}
			<Link style={{textDecoration:"none"}} to="dare" activeClassName="active">Dare List</Link>
		</nav>
	);
};

export default Header;