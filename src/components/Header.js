import React from 'react';
import { Link } from 'gatsby';

import { LogoIcon, CartIcon } from '../utils/icons';

const Header = () => {
	const cartCount = 0;
	return (
		<header className="header">
			<div className="header__left-content">
				<Link to="/">
					<LogoIcon size={56} />
				</Link>
				<nav className="header__nav">
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
				</nav>
			</div>
			<div className="header__right-content">
				<button>
					{`Cart [${cartCount}]`} <CartIcon />
				</button>
			</div>
		</header>
	);
};

export default Header;
