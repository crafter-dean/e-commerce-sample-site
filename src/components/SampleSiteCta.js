import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';

import WithArrow from './WithArrow';

const SampleSiteCta = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					sampleSiteImage: file(
						relativePath: { regex: "/sample-site_screen-cap/" }
					) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className="sample-site-cta">
					<div className="sample-site-cta__image">
						<Link to="/sample-home" className="index__section-link">
							<Img fluid={data.sampleSiteImage.childImageSharp.fluid} />
						</Link>
					</div>
					<div className="sample-site-cta__cta">
						<h3 className="index__section-eyebrow">Sample Site</h3>
						<h2 className="index__section-heading">See what we can do</h2>
						<p className="index__section-text">
							Our sample site features a Wordpress powered blog, fully
							functioning store, and a completely custom front-end design (no
							Wordpress themes here). Get a feel for what we can offer.
						</p>
						<Link to="/sample-home" className="index__section-link">
							<WithArrow color={'#000'} size={16}>
								Go to the Sample Site
							</WithArrow>
						</Link>
					</div>
				</section>
			)}
		/>
	);
};

export default SampleSiteCta;
