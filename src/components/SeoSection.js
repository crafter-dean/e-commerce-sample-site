import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';

import WithArrow from './WithArrow';

const SeoSection = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					seoSecureImage: file(relativePath: { regex: "/seo-secure/" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className="seo-section">
					<div className="seo-section__img">
						<Img fluid={data.seoSecureImage.childImageSharp.fluid} />
					</div>
					<div className="seo-section__copy">
						<h3 className="index__section-eyebrow">Searchable & Secure</h3>
						<h2 className="index__section-heading">
							SEO and security are taken care of
						</h2>
						<p className="index__section-text">
							Our sites are server-side rendered, making their content easily
							available to search engine crawlers. We add metadata to pages,
							such as title and description. This helps search engines
							understand your content and when to show your pages in search
							results.
						</p>
						<p className="index__section-text">
							Building sites to static HTML means no malicious requests, DDOS
							attacks, or accidental exposure.
						</p>
					</div>
				</section>
			)}
		/>
	);
};

export default SeoSection;
