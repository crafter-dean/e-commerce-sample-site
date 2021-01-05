import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { LeftArrowIcon, RightArrowIcon } from '../utils/icons';

const WithArrow = ({ color, size, animate, leftSide, children }) => {
	const arrowAniStates = {
		start: {
			opacity: 0,
			x: leftSide ? size : -size,
		},
		hovered: {
			opacity: 1,
			x: 0,
		},
	};
	const textAniStates = {
		start: {
			x: leftSide ? -size : size,
			transition: {
				delay: 0.18,
			},
		},
		hovered: {
			x: 0,
		},
	};
	return (
		<motion.div
			whileHover="hovered"
			animate="start"
			initial="start"
			className="with-arrow"
		>
			{leftSide && animate && (
				<motion.span
					className="with-arrow__arrow--left"
					variants={arrowAniStates}
				>
					<LeftArrowIcon fill={color} size={size} />
				</motion.span>
			)}
			{leftSide && !animate && (
				<span className="with-arrow__arrow--left" variants={arrowAniStates}>
					<LeftArrowIcon fill={color} size={size} />
				</span>
			)}
			{animate ? (
				<motion.span variants={textAniStates}>{children}</motion.span>
			) : (
				<span variants={textAniStates}>{children}</span>
			)}
			{!leftSide && animate && (
				<motion.span
					className="with-arrow__arrow--right"
					variants={arrowAniStates}
				>
					<RightArrowIcon fill={color} size={size} />
				</motion.span>
			)}
			{!leftSide && !animate && (
				<span className="with-arrow__arrow--right" variants={arrowAniStates}>
					<RightArrowIcon fill={color} size={size} />
				</span>
			)}
		</motion.div>
	);
};
WithArrow.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	children: PropTypes.arrayOf(PropTypes.element),
	leftSide: PropTypes.bool,
	animate: PropTypes.bool,
};
WithArrow.defaultProps = {
	children: undefined,
	leftSide: false,
	animate: false,
};

export default WithArrow;
