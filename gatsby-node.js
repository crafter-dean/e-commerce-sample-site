/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const ProductPageTemplate = path.resolve('./src/templates/ProductPage.js');
	const BlogPageTemplate = path.resolve('./src/templates/BlogPage.js');
	const BlogPostPageTemplate = path.resolve('./src/templates/BlogPostPage.js');

	const result = await graphql(`
		{
			allWordpressAcfItems {
				edges {
					node {
						wordpress_id
						acf {
							slug
						}
					}
				}
			}
			allWordpressPost(sort: { fields: date, order: DESC }, limit: 1000) {
				edges {
					node {
						title
						excerpt
						date
						slug
						wordpress_id
						tags {
							name
						}
					}
					next {
						title
						slug
					}
					previous {
						title
						slug
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query');
		return;
	}
	// Create Product Pages
	const ProductPages = result.data.allWordpressAcfItems.edges;
	ProductPages.forEach((page) => {
		createPage({
			path: `/product/${page.node.acf.slug}`,
			component: ProductPageTemplate,
			context: {
				id: page.node.wordpress_id,
			},
		});
	});
	// Create Blog Page(s)
	const posts = result.data.allWordpressPost.edges;
	const postsPerPage = 5;
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			component: BlogPageTemplate,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
				numPosts: posts.length,
			},
		});
	});
	// Create Blog Post Pages
	const PostPages = result.data.allWordpressPost.edges;
	PostPages.forEach((post, i) => {
		createPage({
			path: `/post/${post.node.slug}`,
			component: BlogPostPageTemplate,
			context: {
				id: post.node.wordpress_id,
				nextTitle: !!post.next ? post.next.title : '',
				prevTitle: !!post.previous ? post.previous.title : '',
				nextSlug: !!post.next ? post.next.slug : '',
				prevSlug: !!post.previous ? post.previous.slug : '',
			},
		});
	});
};
