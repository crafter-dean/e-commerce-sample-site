import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import AnimatedLogo from '../components/AnimatedLogo';

const IndexPage = () => {
	return (
		<main>
			<SEO title="Craft Pixel Landing Page" />
			<div className="index__hero">
				<section></section>
				<section>
					<AnimatedLogo />
				</section>
			</div>
		</main>
	);
};

export default IndexPage;
