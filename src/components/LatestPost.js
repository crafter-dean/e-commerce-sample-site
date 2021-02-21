import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

import WithArrow from '../components/WithArrow';

const LatestPost = () => {
	const data = useStaticQuery(graphql`
		query latestPostQuery {
			allWordpressPost(limit: 1, sort: { fields: date, order: DESC }) {
				edges {
					node {
						title
						slug
						acf {
							feature_image {
								alt_text
								localFile {
									childImageSharp {
										fluid(quality: 100, maxWidth: 700) {
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
	const postNode = data.allWordpressPost.edges[0];
	const { title, acf, slug } = postNode.node;
	return (
		<section className="latest-post">
			<div className="latest-post__img">
				<Img
					fluid={acf.feature_image.localFile.childImageSharp.fluid}
					alt={acf.feature_image.alt_text}
				/>
			</div>
			<div className="latest-post__text">
				<h2>
					<i>Here's what's new in the Craft Pixel blog</i>
				</h2>
				<h1>{title}</h1>
				<Link to={`/post/${slug}`}>
					<button className="button--outline">
						<WithArrow animate color="#a90dff" size={14}>
							Go to Post
						</WithArrow>
					</button>
				</Link>
			</div>
		</section>
	);
};

export default LatestPost;
