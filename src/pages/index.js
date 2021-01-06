import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import AnimatedHero from '../components/AnimatedHero';
import FeaturedItems from '../components/FeaturedItems';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<AnimatedHero />
		<FeaturedItems />
	</Layout>
);

export default IndexPage;
