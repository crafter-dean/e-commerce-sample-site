import React from 'react';

import LandingHeader from '../components/LandingHeader';
import SEO from '../components/Seo';
import AnimatedLogo from '../components/AnimatedLogo';
import WithArrow from '../components/WithArrow';

const IndexPage = () => {
	return (
		<main>
			<SEO title="Craft Pixel Landing Page" />
			<LandingHeader />
			<div className="index__hero">
				<section className="index__hero-cta">
					<h1>
						Let's craft your <br></br>website together
					</h1>
					<p>
						{' '}
						Your brand is bigger than a template or a theme. We have the design
						and development expertise to help build your next site, store, blog,
						or digital dreamscape.
					</p>
					<button className="button--large">
						<WithArrow animate size={16}>
							Let's Talk
						</WithArrow>
					</button>
				</section>
				<section>
					<AnimatedLogo />
				</section>
			</div>
		</main>
	);
};

export default IndexPage;
