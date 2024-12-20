import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<Link to="/">HomePage</Link>
			<Link to="/about">About</Link>
			<Link to="/article/1">Article 1</Link>
			<Link to="/article/2">Article 2</Link>
		</nav>
	);
}

export default NavBar;
