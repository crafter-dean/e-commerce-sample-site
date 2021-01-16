import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import '../styles/styles.scss';

const Layout = ({ children }) => {
	return (
		<div className="toggle-handle">
			<Header />
			<main>{children}</main>
			<Footer withSocial />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
