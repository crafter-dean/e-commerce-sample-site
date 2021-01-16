import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import AnimatedHero from '../components/AnimatedHero';
import FeaturedItems from '../components/FeaturedItems';
import LatestPost from '../components/LatestPost';

const SampleIndexPage = ({ navigate }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<AnimatedHero
				onButtonClick={() => {
					navigate('/shop');
				}}
			/>
			<FeaturedItems />
			<LatestPost />
		</Layout>
	);
};

export default SampleIndexPage;
