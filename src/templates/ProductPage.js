import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ProductPage = ({ data }) => {
	const {
		name,
		price,
		description,
		cover_image,
		slug,
	} = data.wordpressAcfItems.acf;
	console.log('da slug', slug);
	return (
		<Layout>
			<SEO title={name} description={description} />
			<div className="product">
				<div>
					<span className="product__header-info">
						<h1>{name}</h1>
						<p>${price}</p>
					</span>
					<Img fluid={cover_image.localFile.childImageSharp.fluid} />
				</div>
				<div className="product__right">
					<p>{description}</p>
					<div>
						<button
							className="snipcart-add-item button--filled"
							data-item-id={slug}
							data-item-price={price}
							data-item-url={`/${slug}`}
							data-item-name={name}
						>
							Add to Cart
						</button>
					</div>
					<Link to="/shop">Back to Shop</Link>
				</div>
			</div>
		</Layout>
	);
};

export default ProductPage;

export const query = graphql`
	query($id: Int!) {
		wordpressAcfItems(wordpress_id: { eq: $id }) {
			acf {
				name
				price
				description
				slug
				cover_image {
					localFile {
						childImageSharp {
							fluid(quality: 100, maxWidth: 1000) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`;
