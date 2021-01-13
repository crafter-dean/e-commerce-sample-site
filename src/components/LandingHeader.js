import React from 'react';
import { LogoIcon } from '../utils/icons';

const LandingHeader = () => {
	return (
		<header className="landing-header">
			<LogoIcon useGradient size={64} />
			<h1>craft pixel</h1>
		</header>
	);
};

export default LandingHeader;
