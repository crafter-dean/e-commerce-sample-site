import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

import {
	LogoIcon,
	CartIcon,
	HamburgerIcon,
	CloseIcon,
	ShoppingBagIcon,
} from '../utils/icons';

const Header = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navAniStates = {
		closed: { opacity: 0, pointerEvents: 'none' },
		open: { opacity: 1, pointerEvents: 'initial' },
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
				<Link to="/sample-about">About</Link>
			</li>
			<li>
				<Link to="/sample-contact">Contact</Link>
			</li>
		</ul>
	);
	const { state } = useContext(SnipcartContext);
	const { cartQuantity } = state;
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
				<button className="snipcart-checkout header__cart-button">
					<ShoppingBagIcon />
					<span>{cartQuantity}</span>
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
