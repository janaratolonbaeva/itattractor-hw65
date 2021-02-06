import React from 'react';
import {NavLink} from "react-router-dom";
import PAGES from "../../constans";

const Header = () => {
	return (
		<nav className="navbar justify-content-between navbar-light bg-light">
			<NavLink exact to="/" className="navbar-brand me-2 ms-4">LOGO</NavLink>
			<ul className="navbar-nav justify-content-between flex-row">
				<li className="nav-item ms-4 me-2">
					<NavLink exact to="/" className="nav-link active">Home</NavLink>
				</li>
				{PAGES.map(item => (
					<li className="nav-item ms-4 me-2" key={item.id}>
						<NavLink exact to={"/pages/" + item.id} className="nav-link active">{item.name}</NavLink>
					</li>
				))}
				<li className="nav-item ms-4 me-2">
					<NavLink to="/pages/admin" className="nav-link active">Admin</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;