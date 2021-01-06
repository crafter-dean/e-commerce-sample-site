import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

const FeaturedItems = () => {
	const data = useStaticQuery(graphql`
		query featuredItemsQuery {
			allWordpressAcfItems {
				edges {
					node {
						acf {
							name
							price
							featured
							slug
							cover_image {
								localFile {
									childImageSharp {
										fluid(quality: 100, maxWidth: 800) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	const { edges } = data.allWordpressAcfItems;
	const featuredItems = edges.filter(({ node }) => node.acf.featured === true);
	const imgAniStates = {
		rest: {
			scale: 0.94,
			transition: {
				ease: 'easeIn',
			},
		},
		hover: {
			scale: 1,
			transition: {
				ease: 'easeIn',
			},
		},
	};
	return (
		<section className="featured-items">
			{featuredItems.map(({ node }, i) => {
				const { name, price, cover_image, slug } = node.acf;
				if (i > 1) {
					return;
				} else {
					return (
						<motion.div
							className="featured-items__item"
							key={name}
							whileHover="hover"
							animate="rest"
							initial="rest"
						>
							<div className="featured-items__text">
								<Link to={`product/${slug}`}>
									<h2>{name}</h2>
								</Link>
							</div>
							<br></br>
							<div className="featured-items__text">
								<Link to={`product/${slug}`}>
									<p>${price}</p>
								</Link>
							</div>
							<motion.div
								className="featured-items__img"
								variants={imgAniStates}
							>
								<Link to={`product/${slug}`}>
									<Img
										fluid={cover_image.localFile.childImageSharp.fluid}
										height="100%"
									/>
								</Link>
							</motion.div>
						</motion.div>
					);
				}
			})}
			{/* <div className="featured-items__item">
				<h2>Item 1</h2>
			</div>
			<div className="featured-items__item">
				<h2>Item 2</h2>
			</div> */}
		</section>
	);
};

export default FeaturedItems;
