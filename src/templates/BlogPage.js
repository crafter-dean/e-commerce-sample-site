import React from 'react';
import { graphql, navigate, Link } from 'gatsby';
import { formatDistance, format, parseISO } from 'date-fns';
import { animate, motion } from 'framer-motion';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Pagination from '../components/Pagination';
import { ImagePlaceholderIcon } from '../utils/icons';
import {
	staggerInChildStates,
	staggerInParentStates,
} from '../utils/animation';

const BlogPage = ({ data, pathContext }) => {
	const posts = data.allWordpressPost.edges;
	const { numPosts, limit, currentPage, numPages } = pathContext;
	const handlePageChange = (updates) => {
		const clickedPageNum = updates.currentPage;
		if (clickedPageNum !== currentPage) {
			if (clickedPageNum === 1) {
				navigate('/blog');
			} else {
				navigate(`/blog/${clickedPageNum}`);
			}
		}
	};

	return (
		<Layout>
			<SEO title="Blog" />
			<div className="page__wrapper">
				<div className="blog__wrapper">
					<h1 className="page-header">Sample Blog</h1>
					<p className="blog__subtitle">
						page {currentPage} of {numPages} | {numPosts} posts
					</p>
					<motion.div
						className="blog__posts"
						variants={staggerInParentStates}
						initial="start"
						animate="end"
					>
						{posts.map((post) => {
							const { title, tags, excerpt, date, slug, acf } = post.node;
							return (
								<motion.div
									className="blog__card"
									variants={staggerInChildStates}
								>
									<Link to={`/post/${slug}`}>
										{!!acf.feature_image ? (
											<div className="blog__feature-image">
												<img
													src={acf.feature_image.source_url}
													alt={acf.feature_image.alt_text}
												/>
											</div>
										) : (
											<div className="blog__post-placeholder-image">
												<ImagePlaceholderIcon fill="#261E2B" size={128} />
											</div>
										)}
									</Link>
									<div className="blog__card-content">
										{!!tags && (
											<div className="blog__card-tags">
												{tags.map(({ name }) => (
													<span>{name}</span>
												))}
											</div>
										)}
										<Link to={`/post/${slug}`}>
											<h2>{title}</h2>
										</Link>
										<div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
										<div className="blog__post-date">
											{formatDistance(parseISO(date), new Date())} ago
										</div>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
					<Pagination
						totalRecords={numPosts}
						pageLimit={limit}
						onPageChanged={handlePageChange}
						pageNeighbors={1}
						currentPage={currentPage}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default BlogPage;

export const blogPageQuery = graphql`
	query blogPageQuery($skip: Int!, $limit: Int!) {
		allWordpressPost(
			sort: { fields: date, order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					title
					excerpt
					date
					slug
					tags {
						name
					}
					acf {
						feature_image {
							source_url
							alt_text
						}
					}
				}
			}
		}
	}
`;
