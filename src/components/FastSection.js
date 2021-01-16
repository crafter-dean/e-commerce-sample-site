import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import WithArrow from './WithArrow';

const FastSection = ({ scrollState }) => {
	const wrapperAniStates = {
		start: { scale: 1.2 },
		scrolled: { scale: 1.4 },
	};
	const screenAniStates = {
		start: { opacity: 1 },
		scrolled: { opacity: 0 },
	};
	return (
		<section className="fast-section">
			<div className="fast-section__copy">
				<h3 className="index__section-eyebrow">Built Fast</h3>
				<h2 className="index__section-heading">Our sites are wicked fast</h2>
				<p className="index__section-text">
					We build our sites using{' '}
					<a href="https://www.gatsbyjs.com/">Gatsby</a>, a framework built for
					speed.
					<ul>
						<li>Build to static HTML pages</li>
						<li>Prefetching Resources</li>
						<li>Image Optimization</li>
					</ul>
				</p>
				<Link to="/sample-home" className="index__section-link">
					<WithArrow color={'#000'} size={16}>
						Find out more
					</WithArrow>
				</Link>
			</div>
			<motion.div
				className="fast-section__animation"
				animate={scrollState === 'DURING' ? 'scrolled' : 'start'}
				initial="start"
				transition={{ type: 'spring', bounce: 0.65, ease: 'circIn' }}
				variants={wrapperAniStates}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="304" height="192">
					<path
						d="M269.18 22.35a9.66 9.66 0 00-9.66-9.66h-215a9.66 9.66 0 00-9.65 9.66V166h234.31zM152 16.23a1.69 1.69 0 11-1.69 1.69 1.69 1.69 0 011.69-1.69zm109.48 139.05h-219V23.41h219v131.87zM294.82 169.46h-123v.71a2.94 2.94 0 01-2.94 2.94h-33.71a2.94 2.94 0 01-2.94-2.94v-.71H9.18A1.17 1.17 0 008 170.64v4.55a42.74 42.74 0 0018.28 4.12h251.44a42.74 42.74 0 0018.28-4.12v-4.55a1.18 1.18 0 00-1.18-1.18z"
						fill="#dbd4db"
					/>
					<path fill="#ff7c38" d="M42.52 23.41h218.95v22.97H42.52z" />
					<path fill="#e03e36" d="M42.52 46.38h218.95v27.97H42.52z" />
					<path fill="#b80d57" d="M42.52 74.35h218.95v32.97H42.52z" />
					<path fill="#700961" d="M42.52 107.31h218.95v47.97H42.52z" />
					<path
						d="M163.89 106.9a1.68 1.68 0 00.82.22 1.61 1.61 0 00.85-.24l12.7-7.62a1.65 1.65 0 00.8-1.42v-7.62a1.65 1.65 0 00-.83-1.43 1.69 1.69 0 00-1.67 0l-12.7 7.62a1.65 1.65 0 00-.8 1.41v7.63a1.65 1.65 0 00.83 1.45zm2-8.41l5.22-3.13 4.15 2.48-9.37 5.62zm7.38-4.49l3-1.81v3.62z"
						fill="#fff"
					/>
					<path
						d="M190.71 66.31l-38.12-21.66a1.24 1.24 0 00-1.18 0l-38.12 21.66a1.19 1.19 0 00-.61 1v45.74a1.21 1.21 0 00.58 1L151.38 137a1.22 1.22 0 001.24 0l12.7-7.62a1.2 1.2 0 00.59-1v-10.8l24.83-14.89a1.21 1.21 0 00.58-1V67.35a1.19 1.19 0 00-.61-1.04zm-2.24 34.41l-24.61 14.77a1.65 1.65 0 00-.8 1.41v10.51l-9.41 5.64v-41.9l34.82-20.89zm-37.6 18l-22.08-13.24 10.5-6.3 11.58 6.94zm-23.15-26.5l9.37 5.62-9.37 5.62zm-12.19-22l34.82 20.89v11.41l-22.91-13.71a1.69 1.69 0 00-1.67 0 1.65 1.65 0 00-.83 1.43v15.25a1.64 1.64 0 00.8 1.41l24.61 14.77v11.4l-34.82-20.89z"
						fill="#fff"
					/>
					<motion.path
						fill="#282428"
						variants={screenAniStates}
						d="M42.52 23.41h218.95v131.87H42.52z"
					/>
				</svg>
			</motion.div>
		</section>
	);
};

export default FastSection;
