import React from 'react';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/Seo';
import Carousel from '../components/Carousel';
import AnimatedHero from '../components/AnimatedHero';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<AnimatedHero />
		{/* <Carousel /> */}
	</Layout>
);

export default IndexPage;
