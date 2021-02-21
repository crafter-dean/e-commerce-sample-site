import React from 'react';
import { Link } from 'gatsby';
import { LogoIcon } from '../utils/icons';

const LandingHeader = () => {
	return (
		<header className="landing-header">
			<div>
				<LogoIcon useGradient size={64} />
				<h1>craft pixel</h1>
			</div>
			<nav>
				<Link to="sample-home">Sample Site</Link>
				{/* <a href="/#contact"></a> */}
				<button
					className="button--no-style"
					onClick={() => {
						document
							.getElementById('contact')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Contact
				</button>
			</nav>
		</header>
	);
};

export default LandingHeader;
