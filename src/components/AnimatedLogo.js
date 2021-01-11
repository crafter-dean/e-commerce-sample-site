import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
	const [hoveredPixels, setHoveredPixels] = useState([]);
	const pixelAniStates = {
		start: {
			y: 0,
			transition: {
				// delay: 5,
				// duration: 1,
			},
		},
		hover: {
			y: -20,
			transition: {
				// delay: 1,
				// duration: 5,
			},
		},
	};
	const onHoverPixel = (i) => {
		setHoveredPixels([...hoveredPixels, i]);
		setTimeout(() => {
			const pixelUpdates = hoveredPixels.filter((pixel) => pixel === i);
			setHoveredPixels(pixelUpdates);
		}, 300);
	};
	return (
		<div className="animated-logo">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="448"
				height="624"
			>
				{getDefs()}
				{/* STATIC PATHS */}
				<path
					fill="url(#b)"
					d="M224 446.12v-88.95L1.64 223.76v266.83L224 624v-88.94L75.76 446.12v-88.95L224 446.12z"
				/>
				<path fill="url(#a)" d="M75.76 446.12l74.12-44.48-74.12-44.47v88.95z" />
				<path
					fill="url(#c)"
					d="M224 535.06L75.76 446.12l74.12-44.48L224 446.12v88.94z"
				/>
				<path
					d="M224 357.17V624l74.12-44.47v-66.71l148.24-88.94V223.76zm148.24 44.47l-74.12 44.48v-44.48l74.12-44.47z"
					fill="url(#d)"
				/>
				<path
					fill="url(#e)"
					d="M335.18 379.41l37.06 22.23v-44.47l-37.06 22.24z"
				/>
				<path
					fill="#6a2c70"
					d="M298.12 446.12l74.12-44.48-37.06-22.23-37.06 22.23v44.48z"
				/>
				{/* END STATIC PATHS */}
				{/* <motion.path
					variants={pixelAniStates}
					initial="start"
					// animate=""
					whileHover="hover"
					onHoverStart={(e, ei) => {
						console.log('here yee', e, ei);
					}}
					fill="url(#g)"
					d="M289.22 179.29l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z"
				/> */}
				{pixelPaths.map(({ fill, d }, i) => (
					<motion.path
						fill={fill}
						d={d}
						key={i}
						onHoverStart={() => {
							onHoverPixel(i);
						}}
						variants={pixelAniStates}
						animate={hoveredPixels.includes(i) ? 'hover' : 'start'}
					/>
				))}
			</svg>
		</div>
	);
};

export default AnimatedLogo;

const pixelPaths = [
	{
		fill: 'url(#g)',
		d: 'M289.22 179.29l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{ fill: 'url(#h)', d: 'M434.5 223.76l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{ fill: 'url(#i)', d: 'M304.79 168.17l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#j)',
		d: 'M323.32 157.05l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{ fill: 'url(#k)', d: 'M415.97 234.88l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#l)',
		d: 'M270.69 190.41l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#m)',
		d: 'M400.4 246l-9.63-5.79-9.64 5.79 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#n)',
		d: 'M140.99 268.23l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#o)',
		d: 'M159.52 257.11l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#p)',
		d: 'M178.05 246l-9.64-5.79-9.63 5.79 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#q)',
		d: 'M122.46 279.35l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#r)',
		d: 'M196.58 234.88l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#s)',
		d: 'M242.53 207.31l9.63-5.79-9.63-5.78-9.64 5.78 9.64 5.79z',
	},
	{
		fill: 'url(#t)',
		d: 'M224 206.86l-9.63 5.78 9.63 5.78 9.63-5.78-9.63-5.78z',
	},
	{
		fill: 'url(#u)',
		d: 'M215.11 223.76l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#v)',
		d: 'M215.11 201.52l-9.64-5.78-9.63 5.78 9.63 5.79 9.64-5.79z',
	},
	{
		fill: 'url(#w)',
		d: 'M233.63 190.41l-9.63-5.78-9.63 5.78 9.63 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#x)',
		d: 'M186.94 206.86l-9.63 5.78 9.63 5.78 9.64-5.78-9.64-5.78z',
	},
	{
		fill: 'url(#y)',
		d: 'M363.34 246l-9.63-5.79-9.64 5.79 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#z)',
		d: 'M156.55 145.94l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#A)',
		d: 'M175.08 134.82l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{ fill: 'url(#B)', d: 'M193.61 123.7l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{ fill: 'url(#C)', d: 'M212.14 112.58l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#D)',
		d: 'M82.43 190.41l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{ fill: 'url(#E)', d: 'M100.96 179.29l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{ fill: 'url(#F)', d: 'M119.49 168.17l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#G)',
		d: 'M138.02 157.05l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#H)',
		d: 'M258.1 312.7l-15.57-9.34-15.56 9.34 15.56 9.34 15.57-9.34z',
	},
	{ fill: 'url(#I)', d: 'M242.53 116.58l6.67-4-6.67-4-6.67 4 6.67 4z' },
	{
		fill: 'url(#J)',
		d: 'M63.9 201.52l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#K)',
		d: 'M276.62 301.58l-15.56-9.33-15.57 9.33 15.57 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#L)',
		d: 'M224 334.94l-18.53-11.12-18.53 11.12 18.53 11.12L224 334.94z',
	},
	{
		fill: 'url(#M)',
		d: 'M242.53 323.82L224 312.7l-18.53 11.12L224 334.94l18.53-11.12z',
	},
	{
		fill: 'url(#N)',
		d: 'M310.72 279.35l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#O)',
		d: 'M292.19 290.47l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#P)',
		d: 'M230.67 101.46l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#Q)',
		d: 'M310.72 301.58l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#R)',
		d: 'M329.25 290.47l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#S)',
		d: 'M295.15 312.7l-15.56-9.34-15.57 9.34 15.57 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#T)',
		d: 'M261.06 334.94l-18.53-11.12L224 334.94l18.53 11.12 18.53-11.12z',
	},
	{ fill: 'url(#U)', d: 'M38.7 208.64l-6.67 4 6.67 4 6.67-4-6.67-4z' },
	{
		fill: 'url(#V)',
		d: 'M344.81 279.35l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#W)',
		d: 'M381.87 257.11l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#X)',
		d: 'M363.34 268.23l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#Y)',
		d: 'M276.62 323.82l-15.56-9.34-15.57 9.34 15.57 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#Z)',
		d: 'M326.28 268.23l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#aa)',
		d: 'M381.87 234.88l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#ab)',
		d: 'M344.81 257.11l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{ fill: 'url(#ac)', d: 'M63.9 223.76l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#ad)',
		d: 'M397.44 223.76l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#ae)',
		d:
			'M238.59 348.42l3.94-2.36L224 334.94l-18.53 11.12L224 357.17l14.59-8.75z',
	},
	{
		fill: 'url(#af)',
		d: 'M415.97 212.64l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{ fill: 'url(#ag)', d: 'M45.37 234.88l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#ah)',
		d: 'M360.38 179.29l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#ai)',
		d: 'M286.26 134.82l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#aj)',
		d: 'M267.73 145.94l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#ak)',
		d: 'M341.85 190.41l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#al)',
		d: 'M242.53 162.83l9.63-5.78-9.63-5.78-9.64 5.78 9.64 5.78z',
	},
	{
		fill: 'url(#am)',
		d: 'M326.28 201.52l-9.63-5.78-9.64 5.78 9.64 5.79 9.63-5.79z',
	},
	{
		fill: 'url(#ao)',
		d: 'M181.01 290.47l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#ap)',
		d: 'M162.48 301.58l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#at)',
		d: 'M218.07 268.23l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#au)',
		d: 'M289.22 223.76l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#av)',
		d: 'M270.69 234.88l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#aw)',
		d: 'M307.75 212.64l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#ax)',
		d: 'M236.6 257.11l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#ay)',
		d: 'M255.13 246l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#az)',
		d: 'M233.63 145.94l-9.63-5.79-9.63 5.79 9.63 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#aA)',
		d: 'M199.54 279.35l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#aC)',
		d: 'M360.38 201.52l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#aD)',
		d: 'M143.95 290.47l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#aE)',
		d: 'M326.28 223.76l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#aF)',
		d: 'M378.91 190.41l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#aG)',
		d: 'M307.75 234.88l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{ fill: 'url(#aH)', d: 'M26.84 223.76l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#aI)',
		d: 'M289.22 246l-9.63-5.79-9.64 5.79 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#aJ)',
		d: 'M202.51 301.58l-15.57-9.33-15.56 9.33 15.56 9.34 15.57-9.34z',
	},
	{
		fill: 'url(#aK)',
		d: 'M221.03 290.47l-15.56-9.34-15.56 9.34 15.56 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#aL)',
		d: 'M183.98 312.7l-15.57-9.34-15.56 9.34 15.56 9.34 15.57-9.34z',
	},
	{
		fill: 'url(#aM)',
		d: 'M273.66 257.11l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#aN)',
		d: 'M255.13 268.23l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#aO)',
		d: 'M239.56 279.35L224 270.01l-15.56 9.34 15.56 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#aP)',
		d: 'M178.05 179.29l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aQ)',
		d: 'M112.82 206.86l-9.63 5.78 9.63 5.78 9.64-5.78-9.64-5.78z',
	},
	{
		fill: 'url(#aR)',
		d: 'M140.99 201.52l-9.64-5.78-9.63 5.78 9.63 5.79 9.64-5.79z',
	},
	{
		fill: 'url(#aS)',
		d: 'M140.99 223.76l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aT)',
		d: 'M215.11 157.05l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aU)',
		d: 'M196.58 168.17l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aV)',
		d: 'M122.46 234.88l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aW)',
		d: 'M159.52 190.41l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aX)',
		d: 'M103.93 246l-9.64-5.79-9.63 5.79 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aY)',
		d: 'M85.4 257.11l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#aZ)',
		d: 'M344.81 212.64l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#ba)',
		d: 'M215.11 179.29l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bb)',
		d: 'M196.58 190.41l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bc)',
		d: 'M178.05 201.52l-9.64-5.78-9.63 5.78 9.63 5.79 9.64-5.79z',
	},
	{
		fill: 'url(#bd)',
		d: 'M242.53 185.07l9.63-5.78-9.63-5.78-9.64 5.78 9.64 5.78z',
	},
	{
		fill: 'url(#be)',
		d: 'M270.69 168.17l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bf)',
		d: 'M233.63 168.17l-9.63-5.78-9.63 5.78 9.63 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bg)',
		d: 'M149.88 206.86l-9.63 5.78 9.63 5.78 9.64-5.78-9.64-5.78z',
	},
	{
		fill: 'url(#bh)',
		d: 'M103.93 223.76l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bi)',
		d: 'M85.4 234.88l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bj)',
		d: 'M103.93 268.23l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bk)',
		d: 'M286.26 157.05l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#bl)',
		d: 'M140.99 246l-9.64-5.79-9.63 5.79 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bm)',
		d: 'M159.52 234.88l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bn)',
		d: 'M178.05 223.76l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bo)',
		d: 'M122.46 257.11l-9.64-5.78-9.63 5.78 9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bp)',
		d: 'M181.01 268.23l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#bq)',
		d: 'M236.6 234.88l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#br)',
		d: 'M270.69 212.64l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bs)',
		d: 'M218.07 246l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#bt)',
		d: 'M252.16 223.76l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bu)',
		d: 'M199.54 257.11l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#bv)',
		d: 'M162.48 279.35l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{ fill: 'url(#bw)', d: 'M75.76 208.64l-6.67 4 6.67 4 6.67-4-6.67-4z' },
	{
		fill: 'url(#bx)',
		d: 'M304.79 145.94l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#by)',
		d: 'M289.22 201.52l-9.63-5.78-9.64 5.78 9.64 5.79 9.63-5.79z',
	},
	{
		fill: 'url(#bz)',
		d: 'M66.87 246l-9.64-5.79L47.6 246l9.63 5.78 9.64-5.78z',
	},
	{
		fill: 'url(#bA)',
		d: 'M307.75 190.41l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bB)',
		d: 'M323.32 179.29l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bC)',
		d: 'M341.85 168.17l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bD)',
		d: 'M292.19 268.23l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{ fill: 'url(#bE)', d: 'M230.67 123.7l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#bF)',
		d: 'M212.14 134.82l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{ fill: 'url(#bG)', d: 'M267.73 123.7l-6.67-4-6.67 4 6.67 4 6.67-4z' },
	{
		fill: 'url(#bH)',
		d: 'M242.53 138.82l6.67-4-6.67-4.01-6.67 4.01 6.67 4z',
	},
	{
		fill: 'url(#bI)',
		d: 'M156.55 168.17l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bJ)',
		d: 'M175.08 157.05l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#bK)',
		d: 'M193.61 145.94l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bM)',
		d: 'M202.51 323.82l-15.57-9.34-15.56 9.34 15.56 9.34 15.57-9.34z',
	},
	{ fill: 'url(#bO)', d: 'M298.12 312.7l-18.53 11.12 18.53-11.12z' },
	{
		fill: 'url(#bS)',
		d: 'M397.44 201.52l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#bT)',
		d: 'M378.91 212.64l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bU)',
		d: 'M363.34 223.76l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bV)',
		d: 'M138.02 179.29l-6.67-4-6.67 4 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bW)',
		d: 'M221.03 312.7l-15.56-9.34-15.56 9.34 15.56 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#bX)',
		d: 'M344.81 234.88l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#bY)',
		d: 'M119.49 190.41l-6.67-4.01-6.67 4.01 6.67 4 6.67-4z',
	},
	{
		fill: 'url(#bZ)',
		d: 'M326.28 246l-9.63-5.79-9.64 5.79 9.64 5.78 9.63-5.78z',
	},
	{
		fill: 'url(#ca)',
		d: 'M239.56 301.58L224 292.25l-15.56 9.33 15.56 9.34 15.56-9.34z',
	},
	{
		fill: 'url(#cb)',
		d: 'M273.66 279.35l-12.6-7.56-12.6 7.56 12.6 7.56 12.6-7.56z',
	},
	{
		fill: 'url(#cc)',
		d: 'M258.1 290.47l-15.57-9.34-15.56 9.34 15.56 9.34 15.57-9.34z',
	},
	{
		fill: 'url(#cd)',
		d: 'M100.96 201.52l-6.67-4-6.67 4 6.67 4.01 6.67-4.01z',
	},
	{
		fill: 'url(#ce)',
		d: 'M307.75 257.11l-9.63-5.78-9.64 5.78 9.64 5.78 9.63-5.78z',
	},
];

const getDefs = () => (
	<defs>
		<linearGradient
			id="b"
			x1="149.55"
			y1="354.89"
			x2="71.03"
			y2="502.39"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0" stop-color="#f08a5d" />
			<stop offset=".09" stop-color="#e77d5d" />
			<stop offset=".32" stop-color="#d3605e" />
			<stop offset=".55" stop-color="#c44c5e" />
			<stop offset=".78" stop-color="#bb3f5e" />
			<stop offset="1" stop-color="#b83b5e" />
		</linearGradient>
		<linearGradient
			id="a"
			x1="83.21"
			y1="419.93"
			x2="126.6"
			y2="360.56"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0" stop-color="#b83b5e" />
			<stop offset=".08" stop-color="#ac3961" />
			<stop offset=".32" stop-color="#8f3367" />
			<stop offset=".55" stop-color="#7b2f6c" />
			<stop offset=".78" stop-color="#6e2d6f" />
			<stop offset="1" stop-color="#6a2c70" />
		</linearGradient>
		<linearGradient
			id="c"
			x1="142.2"
			y1="495.92"
			x2="216"
			y2="444.71"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0" stop-color="#eeecda" />
			<stop offset=".09" stop-color="#eedbc5" />
			<stop offset=".28" stop-color="#efbea0" />
			<stop offset=".46" stop-color="#efa782" />
			<stop offset=".65" stop-color="#f0976e" />
			<stop offset=".83" stop-color="#f08d61" />
			<stop offset="1" stop-color="#f08a5d" />
		</linearGradient>
		<linearGradient
			id="d"
			x1="295.66"
			y1="348.08"
			x2="417.23"
			y2="581.26"
			xlinkHref="#a"
		/>
		<linearGradient
			id="e"
			x1="368.5"
			y1="390.05"
			x2="347.96"
			y2="359.84"
			xlinkHref="#b"
		/>
		<linearGradient
			id="f"
			x1="1.64"
			y1="347.24"
			x2="446.36"
			y2="347.24"
			xlinkHref="#c"
		/>
		<linearGradient
			id="g"
			x1="135.06"
			y1="179.29"
			x2="366.31"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="h"
			x1="274.4"
			y1="223.76"
			x2="434.5"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="i"
			x1="191.39"
			y1="168.17"
			x2="351.48"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="j"
			x1="203.25"
			y1="157.05"
			x2="363.34"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="k"
			x1="262.54"
			y1="234.88"
			x2="422.64"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="l"
			x1="126.16"
			y1="190.41"
			x2="357.41"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="m"
			x1="188.42"
			y1="245.99"
			x2="419.67"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="n"
			x1="63.9"
			y1="268.23"
			x2="295.15"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="o"
			x1="72.8"
			y1="257.11"
			x2="304.05"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="p"
			x1="81.69"
			y1="245.99"
			x2="312.94"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="q"
			x1="55.01"
			y1="279.35"
			x2="286.26"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="r"
			x1="90.59"
			y1="234.88"
			x2="321.84"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="s"
			x1="117.27"
			y1="201.52"
			x2="348.52"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="t"
			x1="108.37"
			y1="212.64"
			x2="339.63"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="u"
			x1="99.48"
			y1="223.76"
			x2="330.73"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="v"
			x1="99.48"
			y1="201.52"
			x2="330.73"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="w"
			x1="108.37"
			y1="190.41"
			x2="339.63"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="x"
			x1="90.59"
			y1="212.64"
			x2="321.84"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="y"
			x1="170.63"
			y1="245.99"
			x2="401.88"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="z"
			x1="96.52"
			y1="145.93"
			x2="256.61"
			y2="145.93"
			xlinkHref="#c"
		/>
		<linearGradient
			id="A"
			x1="108.38"
			y1="134.82"
			x2="268.47"
			y2="134.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="B"
			x1="120.23"
			y1="123.7"
			x2="280.33"
			y2="123.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="C"
			x1="132.09"
			y1="112.58"
			x2="292.19"
			y2="112.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="D"
			x1="49.08"
			y1="190.41"
			x2="209.18"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="E"
			x1="60.94"
			y1="179.29"
			x2="221.04"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="F"
			x1="72.8"
			y1="168.17"
			x2="232.89"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="G"
			x1="84.66"
			y1="157.05"
			x2="244.75"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="H"
			x1="40.19"
			y1="312.7"
			x2="413.74"
			y2="312.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="I"
			x1="155.81"
			y1="112.58"
			x2="315.91"
			y2="112.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="J"
			x1="37.22"
			y1="201.52"
			x2="197.32"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="K"
			x1="43.15"
			y1="301.58"
			x2="416.71"
			y2="301.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="L"
			x1="1.64"
			y1="334.94"
			x2="446.36"
			y2="334.94"
			xlinkHref="#c"
		/>
		<linearGradient
			id="M"
			x1="1.64"
			y1="323.82"
			x2="446.36"
			y2="323.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="N"
			x1="96.52"
			y1="279.35"
			x2="398.92"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="O"
			x1="90.59"
			y1="290.47"
			x2="392.99"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="P"
			x1="143.95"
			y1="101.46"
			x2="304.05"
			y2="101.46"
			xlinkHref="#c"
		/>
		<linearGradient
			id="Q"
			x1="96.52"
			y1="301.58"
			x2="398.92"
			y2="301.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="R"
			x1="102.45"
			y1="290.47"
			x2="404.85"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="S"
			x1="46.12"
			y1="312.7"
			x2="419.67"
			y2="312.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="T"
			x1="1.64"
			y1="334.94"
			x2="446.36"
			y2="334.94"
			xlinkHref="#c"
		/>
		<linearGradient
			id="U"
			x1="25.36"
			y1="212.64"
			x2="185.46"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="V"
			x1="161.74"
			y1="279.35"
			x2="392.99"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="W"
			x1="179.53"
			y1="257.11"
			x2="410.78"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="X"
			x1="170.63"
			y1="268.23"
			x2="401.88"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="Y"
			x1="43.15"
			y1="323.82"
			x2="416.71"
			y2="323.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="Z"
			x1="152.85"
			y1="268.23"
			x2="384.1"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aa"
			x1="179.53"
			y1="234.88"
			x2="410.78"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ab"
			x1="161.74"
			y1="257.11"
			x2="392.99"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ac"
			x1="37.22"
			y1="223.76"
			x2="197.32"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ad"
			x1="250.68"
			y1="223.76"
			x2="410.78"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ae"
			x1="1.64"
			y1="346.06"
			x2="446.36"
			y2="346.06"
			xlinkHref="#c"
		/>
		<linearGradient
			id="af"
			x1="262.54"
			y1="212.64"
			x2="422.64"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ag"
			x1="25.36"
			y1="234.88"
			x2="185.46"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ah"
			x1="226.96"
			y1="179.29"
			x2="387.06"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ai"
			x1="179.53"
			y1="134.82"
			x2="339.63"
			y2="134.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aj"
			x1="167.67"
			y1="145.93"
			x2="327.77"
			y2="145.93"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ak"
			x1="215.11"
			y1="190.41"
			x2="375.2"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="al"
			x1="117.27"
			y1="157.05"
			x2="348.52"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="am"
			x1="152.85"
			y1="201.52"
			x2="384.1"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="an"
			x1="1.64"
			y1="229.32"
			x2="446.36"
			y2="229.32"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ao"
			x1="55.01"
			y1="290.47"
			x2="357.41"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ap"
			x1="49.08"
			y1="301.58"
			x2="351.48"
			y2="301.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aq"
			x1="1.64"
			y1="240.44"
			x2="446.36"
			y2="240.44"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ar"
			x1="1.64"
			y1="262.67"
			x2="446.36"
			y2="262.67"
			xlinkHref="#c"
		/>
		<linearGradient
			id="as"
			x1="1.64"
			y1="251.55"
			x2="446.36"
			y2="251.55"
			xlinkHref="#c"
		/>
		<linearGradient
			id="at"
			x1="66.87"
			y1="268.23"
			x2="369.27"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="au"
			x1="135.06"
			y1="223.76"
			x2="366.31"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="av"
			x1="126.16"
			y1="234.88"
			x2="357.41"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aw"
			x1="143.95"
			y1="212.64"
			x2="375.2"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ax"
			x1="72.8"
			y1="257.11"
			x2="375.2"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ay"
			x1="78.73"
			y1="245.99"
			x2="381.13"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="az"
			x1="108.37"
			y1="145.93"
			x2="339.63"
			y2="145.93"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aA"
			x1="60.94"
			y1="279.35"
			x2="363.34"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aB"
			x1="1.64"
			y1="273.79"
			x2="446.36"
			y2="273.79"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aC"
			x1="226.96"
			y1="201.52"
			x2="387.06"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aD"
			x1="43.15"
			y1="290.47"
			x2="345.55"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aE"
			x1="152.85"
			y1="223.76"
			x2="384.1"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aF"
			x1="238.82"
			y1="190.41"
			x2="398.92"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aG"
			x1="143.95"
			y1="234.88"
			x2="375.2"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aH"
			x1="13.5"
			y1="223.76"
			x2="173.6"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aI"
			x1="135.06"
			y1="245.99"
			x2="366.31"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aJ"
			x1="31.29"
			y1="301.58"
			x2="404.85"
			y2="301.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aK"
			x1="34.26"
			y1="290.47"
			x2="407.81"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aL"
			x1="28.33"
			y1="312.7"
			x2="401.88"
			y2="312.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aM"
			x1="84.66"
			y1="257.11"
			x2="387.06"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aN"
			x1="78.73"
			y1="268.23"
			x2="381.13"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aO"
			x1="37.22"
			y1="279.35"
			x2="410.78"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aP"
			x1="81.69"
			y1="179.29"
			x2="312.94"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aQ"
			x1="55.01"
			y1="212.64"
			x2="286.26"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aR"
			x1="63.9"
			y1="201.52"
			x2="295.15"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aS"
			x1="63.9"
			y1="223.76"
			x2="295.15"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aT"
			x1="99.48"
			y1="157.05"
			x2="330.73"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aU"
			x1="90.59"
			y1="168.17"
			x2="321.84"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aV"
			x1="55.01"
			y1="234.88"
			x2="286.26"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aW"
			x1="72.8"
			y1="190.41"
			x2="304.05"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aX"
			x1="46.12"
			y1="245.99"
			x2="277.37"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aY"
			x1="37.22"
			y1="257.11"
			x2="268.47"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="aZ"
			x1="161.74"
			y1="212.64"
			x2="392.99"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ba"
			x1="99.48"
			y1="179.29"
			x2="330.73"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bb"
			x1="90.59"
			y1="190.41"
			x2="321.84"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bc"
			x1="81.69"
			y1="201.52"
			x2="312.94"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bd"
			x1="117.27"
			y1="179.29"
			x2="348.52"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="be"
			x1="126.16"
			y1="168.17"
			x2="357.41"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bf"
			x1="108.37"
			y1="168.17"
			x2="339.63"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bg"
			x1="72.8"
			y1="212.64"
			x2="304.05"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bh"
			x1="46.12"
			y1="223.76"
			x2="277.37"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bi"
			x1="37.22"
			y1="234.88"
			x2="268.47"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bj"
			x1="46.12"
			y1="268.23"
			x2="277.37"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bk"
			x1="179.53"
			y1="157.05"
			x2="339.63"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bl"
			x1="63.9"
			y1="245.99"
			x2="295.15"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bm"
			x1="72.8"
			y1="234.88"
			x2="304.05"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bn"
			x1="81.69"
			y1="223.76"
			x2="312.94"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bo"
			x1="55.01"
			y1="257.11"
			x2="286.26"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bp"
			x1="55.01"
			y1="268.23"
			x2="357.41"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bq"
			x1="72.8"
			y1="234.88"
			x2="375.2"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="br"
			x1="126.16"
			y1="212.64"
			x2="357.41"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bs"
			x1="66.87"
			y1="246"
			x2="369.27"
			y2="246"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bt"
			x1="117.27"
			y1="223.76"
			x2="348.52"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bu"
			x1="60.94"
			y1="257.11"
			x2="363.34"
			y2="257.11"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bv"
			x1="49.08"
			y1="279.35"
			x2="351.48"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bw"
			x1="49.08"
			y1="212.64"
			x2="209.18"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bx"
			x1="191.39"
			y1="145.93"
			x2="351.48"
			y2="145.93"
			xlinkHref="#c"
		/>
		<linearGradient
			id="by"
			x1="135.06"
			y1="201.52"
			x2="366.31"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bz"
			x1="28.33"
			y1="245.99"
			x2="259.58"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bA"
			x1="143.95"
			y1="190.41"
			x2="375.2"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bB"
			x1="203.25"
			y1="179.29"
			x2="363.34"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bC"
			x1="215.11"
			y1="168.17"
			x2="375.2"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bD"
			x1="90.59"
			y1="268.23"
			x2="392.99"
			y2="268.23"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bE"
			x1="143.95"
			y1="123.7"
			x2="304.05"
			y2="123.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bF"
			x1="132.09"
			y1="134.82"
			x2="292.19"
			y2="134.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bG"
			x1="167.67"
			y1="123.7"
			x2="327.77"
			y2="123.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bH"
			x1="155.81"
			y1="134.82"
			x2="315.91"
			y2="134.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bI"
			x1="96.52"
			y1="168.17"
			x2="256.61"
			y2="168.17"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bJ"
			x1="108.38"
			y1="157.05"
			x2="268.47"
			y2="157.05"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bK"
			x1="120.23"
			y1="145.93"
			x2="280.33"
			y2="145.93"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bL"
			x1="1.64"
			y1="307.14"
			x2="446.36"
			y2="307.14"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bM"
			x1="31.29"
			y1="323.82"
			x2="404.85"
			y2="323.82"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bN"
			x1="1.64"
			y1="296.03"
			x2="446.36"
			y2="296.03"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bO"
			x1="1.64"
			y1="318.26"
			x2="446.36"
			y2="318.26"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bP"
			x1="1.64"
			y1="329.38"
			x2="446.36"
			y2="329.38"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bQ"
			x1="1.64"
			y1="340.5"
			x2="446.36"
			y2="340.5"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bR"
			x1="1.64"
			y1="284.91"
			x2="446.36"
			y2="284.91"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bS"
			x1="250.68"
			y1="201.52"
			x2="410.78"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bT"
			x1="238.82"
			y1="212.64"
			x2="398.92"
			y2="212.64"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bU"
			x1="170.63"
			y1="223.76"
			x2="401.88"
			y2="223.76"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bV"
			x1="84.66"
			y1="179.29"
			x2="244.75"
			y2="179.29"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bW"
			x1="34.26"
			y1="312.7"
			x2="407.81"
			y2="312.7"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bX"
			x1="161.74"
			y1="234.88"
			x2="392.99"
			y2="234.88"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bY"
			x1="72.8"
			y1="190.41"
			x2="232.89"
			y2="190.41"
			xlinkHref="#c"
		/>
		<linearGradient
			id="bZ"
			x1="152.85"
			y1="245.99"
			x2="384.1"
			y2="245.99"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ca"
			x1="37.22"
			y1="301.58"
			x2="410.78"
			y2="301.58"
			xlinkHref="#c"
		/>
		<linearGradient
			id="cb"
			x1="84.66"
			y1="279.35"
			x2="387.06"
			y2="279.35"
			xlinkHref="#c"
		/>
		<linearGradient
			id="cc"
			x1="40.19"
			y1="290.47"
			x2="413.74"
			y2="290.47"
			xlinkHref="#c"
		/>
		<linearGradient
			id="cd"
			x1="60.94"
			y1="201.52"
			x2="221.04"
			y2="201.52"
			xlinkHref="#c"
		/>
		<linearGradient
			id="ce"
			x1="143.95"
			y1="257.11"
			x2="375.2"
			y2="257.11"
			xlinkHref="#c"
		/>
	</defs>
);
