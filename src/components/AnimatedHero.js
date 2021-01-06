import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

import WithArrow from './WithArrow';

const AnimatedHero = ({ onButtonClick }) => {
	return (
		<StaticQuery
			query={graphql`
				query {
					heroImage: file(relativePath: { regex: "/carousel_image_01_ALT/" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className="animated-hero">
					<div className="animated-hero__cta">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
						>
							<h2>Welcome to the Craft Pixel</h2>
							<h1>Sample Site</h1>
						</motion.div>
						<motion.button
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 1 }}
							className="button--outline"
							onClick={onButtonClick}
						>
							<WithArrow size={16} animate>
								See What's Inside
							</WithArrow>
						</motion.button>
					</div>
					<motion.div
						initial={{ scale: 1.1, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.25, duration: 1 }}
						className="animated-hero__image-wrapper"
					>
						<Img fluid={data.heroImage.childImageSharp.fluid} />
					</motion.div>
				</section>
			)}
		/>
	);
	// return <section className="animated-hero"></section>;
};

export default AnimatedHero;
