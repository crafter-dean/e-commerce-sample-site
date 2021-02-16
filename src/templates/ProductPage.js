import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import WithArrow from '../components/WithArrow';

const ProductPage = ({ data, location }) => {
	const {
		name,
		price,
		description,
		cover_image,
		slug,
	} = data.wordpressAcfItems.acf;
	return (
		<Layout>
			<SEO title={name} description={description} />
			<div className="product">
				<div className="product__left">
					<div className="product__header-info">
						<h1>{name}</h1>
						<div>${price}</div>
					</div>
					<Img fluid={cover_image.localFile.childImageSharp.fluid} />
				</div>
				<div className="product__right">
					<p>{description}</p>
					<div>
						<button
							className="snipcart-add-item button--filled"
							data-item-id={slug}
							data-item-price={price}
							data-item-url={location.pathname}
							// data-item-url={`https://www.craftpixel.co/product/${slug}`}
							data-item-name={name}
						>
							Add to Cart
						</button>
					</div>
					<Link to="/shop">
						<WithArrow leftSide color="#000" size={14}>
							Back to Shop
						</WithArrow>
					</Link>
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
