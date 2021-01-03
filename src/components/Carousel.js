import React from 'react';
import ReactSwipe from 'react-swipe';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { LeftArrowIcon } from '../utils/icons';

const Carousel = () => {
	let reactSwipeEl;
	const numberOfSlides = 3;
	return (
		<StaticQuery
			query={graphql`
				query {
					imageOne: file(relativePath: { regex: "/carousel_image_01_ALT/" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
					imageTwo: file(relativePath: { regex: "/slide2/" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
					imageThree: file(relativePath: { regex: "/slide3/" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => (
				<div className="carousel__wrapper">
					<ReactSwipe
						className="carousel"
						swipeOptions={{
							continuous: false,
							speed: 600,
							auto: 5000,
						}}
						ref={(el) => (reactSwipeEl = el)}
					>
						<div className="slide-01">
							<div className="slide-01__column--left">
								<h1>TEst</h1>
							</div>
							<div className="slide-01__column--right">
								<Img
									fluid={data.imageOne.childImageSharp.fluid}
									height="100%"
								/>
							</div>
						</div>
						<div>
							<Img fluid={data.imageThree.childImageSharp.fluid} />
						</div>
						<div>
							<Img fluid={data.imageOne.childImageSharp.fluid} />
						</div>
					</ReactSwipe>
					<div className="carousel__controls">
						<ul>
							{Array.from(Array(numberOfSlides)).map((x, i) => (
								<li>{`0${i + 1}`}</li>
							))}
						</ul>
					</div>
					<button
						className="carousel__button--right"
						onClick={() => reactSwipeEl.next()}
					>
						<LeftArrowIcon />
					</button>
					<button onClick={() => reactSwipeEl.prev()}>
						<LeftArrowIcon />
					</button>
				</div>
			)}
		/>
	);
};

export default Carousel;
