import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import LandingHeader from '../components/LandingHeader';
import SEO from '../components/Seo';
import AnimatedLogo from '../components/AnimatedLogo';
import WithArrow from '../components/WithArrow';
import SampleSiteCta from '../components/SampleSiteCta';
import FastSection from '../components/FastSection';
import SeoSection from '../components/SeoSection';
import Footer from '../components/Footer';

const IndexPage = () => {
	return (
		<Controller>
			<Scene duration={600} offset={1000}>
				{(progress, event) => (
					<div className="scroll-handle">
						<main>
							<SEO title="Craft Pixel: Experts in Design and Development" />
							<LandingHeader />
							<div className="index__hero">
								<section className="index__hero-cta">
									<h1>
										Let's craft your <br></br>website together
									</h1>
									<p>
										{' '}
										Your brand is bigger than a template or a theme. We have the
										design and development expertise to help custom build your
										next site, store, blog, or digital dreamscape.
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
							<SampleSiteCta />
							<FastSection scrollState={event.state} />
							<SeoSection />
						</main>
						<Footer />
					</div>
				)}
			</Scene>
		</Controller>
	);
};

export default IndexPage;
