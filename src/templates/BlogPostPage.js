import React from 'react';
import { graphql, Link } from 'gatsby';
import { formatDistance, format, parseISO } from 'date-fns';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { LeftArrowIcon, RightArrowIcon } from '../utils/icons';

const BlogPostPage = ({ data, pageContext }) => {
	const { title, excerpt, date, tags, content, acf } = data.wordpressPost;
	const { nextTitle, prevTitle, prevSlug, nextSlug } = pageContext;
	return (
		<Layout>
			<SEO title={title} description={excerpt} />
			<div className="page__wrapper--single-column">
				<div className="page__layout--single-column">
					{!!acf.feature_image && (
						<div className="post__feature-image">
							<Img
								fluid={acf.feature_image.localFile.childImageSharp.fluid}
								alt={acf.feature_image.alt_text}
								height="100%"
							/>
						</div>
					)}
					{!!tags && (
						<div className="post__tags">
							{tags.map(({ name }) => (
								<span>{name}</span>
							))}
						</div>
					)}
					<h1 className="page-header">{title}</h1>
					<p className="post__date">
						<i>{format(parseISO(date), 'MMMM do, y')}</i>
					</p>
					<div
						className="post__body"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<div className="post__after">
						{!!nextTitle && (
							<Link to={`/post/${nextSlug}`}>
								<div>
									<LeftArrowIcon fill={'#000'} size={18} />
									<h2>Previous</h2>
								</div>
								<p>{nextTitle}</p>
							</Link>
						)}
						{!!prevTitle && (
							<Link to={`/post/${prevSlug}`}>
								<div>
									<h2>Next</h2>
									<RightArrowIcon fill={'#000'} size={18} />
								</div>
								<p>{prevTitle}</p>
							</Link>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BlogPostPage;

export const query = graphql`
	query blogPostQuery($id: Int!) {
		wordpressPost(wordpress_id: { eq: $id }) {
			content
			title
			excerpt
			tags {
				name
			}
			date
			acf {
				feature_image {
					alt_text
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
`;
