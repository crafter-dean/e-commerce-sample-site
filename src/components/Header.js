import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { LogoIcon, CartIcon, HamburgerIcon, CloseIcon } from '../utils/icons';

const Header = () => {
	const cartCount = 0;
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navAniStates = {
		closed: { opacity: 0 },
		open: { opacity: 1 },
	};
	const iconAniStates = {
		closed: { rotate: 0 },
		open: { rotate: 180 },
	};
	useEffect(() => {
		return function cleanup() {
			document.body.style.position = 'relative';
		};
	}, []);
	const getNavItems = () => (
		<ul>
			<li>
				<Link to="/shop">Shop</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	);
	return (
		<header className="header">
			<div className="header__left-content">
				<Link to="/">
					<LogoIcon size={56} />
				</Link>
				<nav className="header__nav">{getNavItems()}</nav>
				<motion.div
					variants={navAniStates}
					initial="closed"
					animate={navIsOpen ? 'open' : 'closed'}
					className="header__menu-wrapper"
				>
					<nav className="header__menu">{getNavItems()}</nav>
				</motion.div>
			</div>
			<div className="header__right-content">
				<button className="header__cart-button">
					<span>{`Cart [${cartCount}]`}</span>
					<CartIcon />
				</button>
				<motion.button
					variants={iconAniStates}
					animate={navIsOpen ? 'open' : 'closed'}
					initial="closed"
					className="header__menu-button"
					onClick={() => {
						setNavIsOpen(!navIsOpen);
						if (!navIsOpen) {
							document.body.style.position = 'fixed';
						} else {
							document.body.style.position = 'relative';
						}
					}}
				>
					{navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
				</motion.button>
			</div>
		</header>
	);
};

export default Header;
