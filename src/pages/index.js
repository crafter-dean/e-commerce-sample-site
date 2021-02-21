import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import LandingHeader from '../components/LandingHeader';
import SEO from '../components/Seo';
import AnimatedLogo from '../components/AnimatedLogo';
import WithArrow from '../components/WithArrow';
import SampleSiteCta from '../components/SampleSiteCta';
import FastSection from '../components/FastSection';
import SeoSection from '../components/SeoSection';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../styles/styles.scss';

const IndexPage = ({ location }) => {
	useEffect(() => {
		if (location.hash !== '') {
			const anchor = location.hash.substring(1);
			if (anchor === 'contact') {
				document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
	return (
		<Controller>
			<Scene duration={600} triggerElement="#scroll-trigger">
				{(progress, event) => (
					<>
						<main>
							<SEO title="Craft Pixel: Experts in Design and Development" />
							<LandingHeader />
							<section className="index__hero">
								<div className="index__hero-cta">
									<h1>
										Let's craft your <br></br>website together
									</h1>
									<p>
										{' '}
										Your brand is bigger than a template or a theme. We have the
										design and development expertise to help custom build your
										next site, store, blog, or digital dreamscape.
									</p>
									<button
										className="button--large"
										onClick={() => {
											document
												.getElementById('contact')
												.scrollIntoView({ behavior: 'smooth' });
										}}
									>
										<WithArrow animate size={16}>
											Let's Talk
										</WithArrow>
									</button>
								</div>
								<div className="index__hero-animation">
									<AnimatedLogo />
								</div>
							</section>
							<SampleSiteCta />
							<div id="scroll-trigger"></div>
							<FastSection scrollState={event.state} />
							<SeoSection />
							<ContactForm />
						</main>
						<Footer />
					</>
				)}
			</Scene>
		</Controller>
	);
};

export default IndexPage;
