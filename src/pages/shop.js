import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import WithArrow from '../components/WithArrow';

const Shop = () => {
	const [selectedCategory, setCategory] = useState('All');

	const data = useStaticQuery(graphql`
		query itemsQuery {
			allWordpressAcfItems {
				edges {
					node {
						acf {
							description
							name
							price
							category
							slug
							cover_image {
								localFile {
									childImageSharp {
										fluid(quality: 100, maxWidth: 500) {
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

	const getCategories = () => {
		const categories = [];
		data.allWordpressAcfItems.edges.forEach(({ node }) => {
			const { category } = node.acf;
			if (!categories.includes(category)) {
				categories.push(category);
			}
		});

		return categories;
	};
	let categories = getCategories();

	return (
		<Layout>
			<SEO title="Shop" />
			<div className="shop">
				<div className="shop__header">
					<h1>{selectedCategory}</h1>
					<form>
						<label htmlFor="category">Filter by:</label>
						<select
							id="category"
							name="category"
							value={selectedCategory}
							onChange={(e) => {
								setCategory(e.target.value);
							}}
						>
							<option value="All">All</option>
							{categories.map((category) => (
								<option value={category}>{category}</option>
							))}
						</select>
					</form>
				</div>
				<div className="shop__products">
					{data.allWordpressAcfItems.edges.map((item) => {
						const {
							category,
							description,
							name,
							price,
							cover_image,
							slug,
						} = item.node.acf;
						if (selectedCategory === 'All') {
							return (
								<Link
									to={`/product/${slug}`}
									style={{ textDecoration: 'none' }}
								>
									<div className="shop__product">
										<div className="shop-product__image">
											<Img
												fluid={cover_image.localFile.childImageSharp.fluid}
												height="100%"
											/>
										</div>
										<div className="shop-product__info">
											<h3>{name}</h3>
											<p className="shop-product__info--faded">{description}</p>
											<p>${price}</p>
											<button>
												<WithArrow color="#000" size={14} animate>
													view product
												</WithArrow>
											</button>
										</div>
										<div className=""></div>
									</div>
								</Link>
							);
						} else if (selectedCategory === category) {
							return (
								<Link
									to={`/product/${slug}`}
									style={{ textDecoration: 'none' }}
								>
									<div className="shop__product">
										<div className="shop-product__image">
											<Img
												fluid={cover_image.localFile.childImageSharp.fluid}
												height="100%"
											/>
										</div>
										<div className="shop-product__info">
											<h3>{name}</h3>
											<p className="shop-product__info--faded">{description}</p>
											<p>${price}</p>
											<button>
												<WithArrow color="#000" size={14} animate>
													view product
												</WithArrow>
											</button>
										</div>
										<div className=""></div>
									</div>
								</Link>
							);
						}
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Shop;
