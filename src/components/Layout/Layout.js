import React, {Fragment} from 'react';
import Header from "../Header/Header";

const Layout = props => {
	return (
		<>
			<Fragment>
				<div className="container">
					<Header/>
					<main className="Layout-content">
						{props.children}
					</main>
				</div>
			</Fragment>
		</>
	);
};

export default Layout;