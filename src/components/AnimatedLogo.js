import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
	const [hoveredPixels, setHoveredPixels] = useState([]);
	const pixelAniStates = {
		start: {
			y: 0,
			transition: {
				// delay: 0.5,
				// duration: 1,
			},
		},
		hover: {
			y: -36,
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
					d="M224 86.4L0 220.8v268.8L224 624l74.67-44.8V512L448 422.4V220.8z"
					fill="url(#bgGradient)"
				/>

				<path
					fill="#6a2c70"
					d="M298.67 444.8l74.66-44.8L336 377.6 298.67 400v44.8z"
				/>
				<path fill="url(#ax)" d="M336 377.6l37.33 22.4v-44.8L336 377.6z" />
				<path
					d="M224 355.2V624l74.67-44.8V512L448 422.4V220.8zM373.33 400l-74.66 44.8V400l74.66-44.8z"
					fill="url(#aw)"
				/>
				<path
					fill="url(#av)"
					d="M224 534.4L74.67 444.8l74.66-44.8L224 444.8v89.6z"
				/>
				<path fill="url(#b)" d="M74.67 444.8l74.66-44.8-74.66-44.8v89.6z" />
				<path
					fill="url(#c)"
					d="M224 444.8v-89.6L0 220.8v268.8L224 624v-89.6L74.67 444.8v-89.6L224 444.8z"
				/>
				{/* END STATIC PATHS */}

				{pixelPaths.map(({ fill, d }, i) => (
					<motion.path
						className="animated-logo__pixel"
						fill={fill}
						d={d}
						key={i}
						onHoverEnd={() => {
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
		fill: 'url(#a)',
		d: 'M280 142.4l-18.67 11.2L280 164.8l18.67-11.2L280 142.4z',
	},
	{
		fill: 'url(#d)',
		d: 'M130.67 209.6L112 220.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#e)',
		d: 'M298.67 153.6L280 164.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#f)',
		d: 'M336 176l-18.67 11.2L336 198.4l18.67-11.2L336 176z',
	},
	{
		fill: 'url(#g)',
		d: 'M317.33 164.8L298.67 176l18.66 11.2L336 176l-18.67-11.2z',
	},
	{
		fill: 'url(#h)',
		d: 'M112 176l-18.67 11.2L112 198.4l18.67-11.2L112 176z',
	},
	{
		fill: 'url(#i)',
		d: 'M112 198.4l-18.67 11.2L112 220.8l18.67-11.2L112 198.4z',
	},
	{
		fill: 'url(#j)',
		d: 'M149.33 198.4l-18.66-11.2L112 198.4l18.67 11.2 18.66-11.2z',
	},
	{
		fill: 'url(#k)',
		d: 'M242.67 254.4L224 265.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#l)',
		d: 'M261.33 265.6l-18.66 11.2 18.66 11.2L280 276.8l-18.67-11.2z',
	},
	{
		fill: 'url(#m)',
		d: 'M186.67 243.2L168 254.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#n)',
		d: 'M280 276.8L261.33 288 280 299.2l18.67-11.2L280 276.8z',
	},
	{
		fill: 'url(#j)',
		d: 'M354.67 187.2L336 198.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#o)',
		d: 'M205.33 276.8L224 288l18.67-11.2L224 265.6l-18.67 11.2z',
	},
	{
		fill: 'url(#k)',
		d: 'M205.33 254.4l-18.66 11.2 18.66 11.2L224 265.6l-18.67-11.2z',
	},
	{
		fill: 'url(#p)',
		d: 'M298.67 288L280 299.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M392 209.6l-18.67 11.2L392 232l18.67-11.2L392 209.6z',
	},
	{
		fill: 'url(#i)',
		d: 'M373.33 198.4l-18.66 11.2 18.66 11.2L392 209.6l-18.67-11.2z',
	},
	{
		fill: 'url(#q)',
		d: 'M410.67 220.8L392 232l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#r)',
		d: 'M149.33 220.8L130.67 232l18.66 11.2L168 232l-18.67-11.2z',
	},
	{
		fill: 'url(#g)',
		d: 'M93.33 164.8L74.67 176l18.66 11.2L112 176l-18.67-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M168 232l-18.67 11.2L168 254.4l18.67-11.2L168 232z',
	},
	{
		fill: 'url(#r)',
		d: 'M205.33 232L224 243.2l18.67-11.2L224 220.8 205.33 232z',
	},
	{
		fill: 'url(#m)',
		d: 'M298.67 243.2L280 254.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M280 232l-18.67 11.2L280 254.4l18.67-11.2L280 232z',
	},
	{
		fill: 'url(#u)',
		d: 'M149.33 153.6l-18.66 11.2 18.66 11.2L168 164.8l-18.67-11.2z',
	},

	{
		fill: 'url(#q)',
		d: 'M261.33 220.8L242.67 232l18.66 11.2L280 232l-18.67-11.2z',
	},
	{
		fill: 'url(#l)',
		d: 'M336 265.6l-18.67 11.2L336 288l18.67-11.2L336 265.6z',
	},
	{
		fill: 'url(#k)',
		d: 'M317.33 254.4l-18.66 11.2 18.66 11.2L336 265.6l-18.67-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M242.67 209.6L224 220.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#w)',
		d: 'M186.67 176L168 187.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#x)',
		d: 'M205.33 209.6L224 220.8l18.67-11.2L224 198.4l-18.67 11.2z',
	},
	{
		fill: 'url(#j)',
		d: 'M224 198.4l-18.67-11.2-18.66 11.2 18.66 11.2L224 198.4z',
	},
	{
		fill: 'url(#k)',
		d: 'M354.67 254.4L336 265.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#y)',
		d: 'M186.67 198.4L168 209.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M205.33 209.6l-18.66 11.2 18.66 11.2L224 220.8l-18.67-11.2z',
	},
	{
		fill: 'url(#a)',
		d: 'M130.67 142.4L112 153.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#m)',
		d: 'M261.33 243.2l-18.66 11.2 18.66 11.2L280 254.4l-18.67-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M242.67 232L224 243.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#z)',
		d: 'M205.33 254.4L224 265.6l18.67-11.2L224 243.2l-18.67 11.2z',
	},
	{
		fill: 'url(#k)',
		d: 'M280 254.4l-18.67 11.2L280 276.8l18.67-11.2L280 254.4z',
	},
	{
		fill: 'url(#n)',
		d: 'M317.33 276.8L298.67 288l18.66 11.2L336 288l-18.67-11.2z',
	},
	{
		fill: 'url(#l)',
		d: 'M298.67 265.6L280 276.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M205.33 232l-18.66 11.2 18.66 11.2L224 243.2 205.33 232z',
	},
	{
		fill: 'url(#A)',
		d: 'M112 153.6l-18.67 11.2L112 176l18.67-11.2L112 153.6z',
	},
	{
		fill: 'url(#B)',
		d: 'M149.33 176l-18.66 11.2 18.66 11.2L168 187.2 149.33 176z',
	},
	{
		fill: 'url(#g)',
		d: 'M130.67 164.8L112 176l18.67 11.2 18.66-11.2-18.66-11.2z',
	},

	{
		fill: 'url(#d)',
		d: 'M168 209.6l-18.67 11.2L168 232l18.67-11.2L168 209.6z',
	},
	{
		fill: 'url(#j)',
		d: 'M186.67 198.4L168 187.2l-18.67 11.2L168 209.6l18.67-11.2z',
	},
	{
		fill: 'url(#D)',
		d: 'M186.67 220.8L168 232l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#x)',
		d: 'M149.33 198.4l-18.66 11.2 18.66 11.2L168 209.6l-18.67-11.2z',
	},
	{
		fill: 'url(#k)',
		d: 'M130.67 254.4L112 265.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M317.33 209.6l-18.66 11.2 18.66 11.2L336 220.8l-18.67-11.2z',
	},
	{
		fill: 'url(#q)',
		d: 'M336 220.8L317.33 232 336 243.2l18.67-11.2L336 220.8z',
	},
	{
		fill: 'url(#m)',
		d: 'M336 243.2l-18.67 11.2L336 265.6l18.67-11.2L336 243.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M354.67 232L336 243.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#E)',
		d: 'M280 299.2l-18.67 11.2L280 321.6l18.67-11.2L280 299.2z',
	},
	{
		fill: 'url(#F)',
		d: 'M261.33 288l-18.66 11.2 18.66 11.2L280 299.2 261.33 288z',
	},
	{
		fill: 'url(#m)',
		d: 'M74.67 243.2L56 254.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M56 232l-18.67 11.2L56 254.4l18.67-11.2L56 232z',
	},
	{
		fill: 'url(#q)',
		d: 'M37.33 220.8L18.67 232l18.66 11.2L56 232l-18.67-11.2z',
	},
	{
		fill: 'url(#n)',
		d: 'M242.67 276.8L224 288l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#H)',
		d: 'M18.67 209.6L0 220.8 18.67 232l18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#k)',
		d: 'M93.33 254.4l-18.66 11.2 18.66 11.2L112 265.6l-18.67-11.2z',
	},

	{
		fill: 'url(#J)',
		d: 'M205.33 299.2L224 310.4l18.67-11.2L224 288l-18.67 11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M93.33 209.6l-18.66 11.2L93.33 232 112 220.8l-18.67-11.2z',
	},
	{
		fill: 'url(#i)',
		d: 'M74.67 198.4L56 209.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#h)',
		d: 'M74.67 176L56 187.2l18.67 11.2 18.66-11.2L74.67 176z',
	},
	{
		fill: 'url(#M)',
		d: 'M112 198.4l-18.67-11.2-18.66 11.2 18.66 11.2L112 198.4z',
	},
	{
		fill: 'url(#k)',
		d: 'M168 254.4l-18.67 11.2L168 276.8l18.67-11.2L168 254.4z',
	},
	{
		fill: 'url(#N)',
		d: 'M186.67 265.6L168 276.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#q)',
		d: 'M112 220.8L93.33 232 112 243.2l18.67-11.2L112 220.8z',
	},
	{
		fill: 'url(#n)',
		d: 'M205.33 276.8L186.67 288l18.66 11.2L224 288l-18.67-11.2z',
	},
	{
		fill: 'url(#m)',
		d: 'M149.33 243.2l-18.66 11.2 18.66 11.2L168 254.4l-18.67-11.2z',
	},
	{
		fill: 'url(#s)',
		d: 'M130.67 232L112 243.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#P)',
		d: 'M186.67 131.2L168 142.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#l)',
		d: 'M112 265.6l-18.67 11.2L112 288l18.67-11.2L112 265.6z',
	},
	{
		fill: 'url(#S)',
		d: 'M168 120l-18.67 11.2L168 142.4l18.67-11.2L168 120z',
	},

	{
		fill: 'url(#aa)',
		d: 'M74.67 198.4L56 187.2l-18.67 11.2L56 209.6l18.67-11.2z',
	},
	{
		fill: 'url(#ab)',
		d: 'M186.67 310.4L168 321.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#a)',
		d: 'M205.33 142.4l-18.66 11.2 18.66 11.2L224 153.6l-18.67-11.2z',
	},
	{
		fill: 'url(#ac)',
		d: 'M205.33 321.6l-18.66 11.2 18.66 11.2L224 332.8l-18.67-11.2z',
	},
	{
		fill: 'url(#J)',
		d: 'M149.33 288l-18.66 11.2 18.66 11.2L168 299.2 149.33 288z',
	},
	{
		fill: 'url(#ad)',
		d: 'M205.33 344L224 355.2l18.67-11.2L224 332.8 205.33 344z',
	},
	{
		fill: 'url(#n)',
		d: 'M130.67 276.8L112 288l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#E)',
		d: 'M168 299.2l-18.67 11.2L168 321.6l18.67-11.2L168 299.2z',
	},
	{
		fill: 'url(#g)',
		d: 'M242.67 164.8L224 176l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#w)',
		d: 'M261.33 176l-18.66 11.2 18.66 11.2L280 187.2 261.33 176z',
	},
	{
		fill: 'url(#ac)',
		d: 'M242.67 321.6L224 332.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#e)',
		d: 'M224 153.6l-18.67 11.2L224 176l18.67-11.2L224 153.6z',
	},
	{
		fill: 'url(#i)',
		d: 'M298.67 198.4L280 209.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#j)',
		d: 'M280 187.2l-18.67 11.2L280 209.6l18.67-11.2L280 187.2z',
	},
	{
		fill: 'url(#m)',
		d: 'M373.33 243.2l-18.66 11.2 18.66 11.2L392 254.4l-18.67-11.2z',
	},
	{
		fill: 'url(#ae)',
		d: 'M298.67 176L280 187.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#j)',
		d: 'M317.33 187.2l-18.66 11.2 18.66 11.2L336 198.4l-18.67-11.2z',
	},
	{
		fill: 'url(#g)',
		d: 'M280 164.8L261.33 176 280 187.2l18.67-11.2L280 164.8z',
	},
	{
		fill: 'url(#i)',
		d: 'M336 198.4l-18.67 11.2L336 220.8l18.67-11.2L336 198.4z',
	},
	{
		fill: 'url(#d)',
		d: 'M354.67 209.6L336 220.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#af)',
		d: 'M261.33 153.6l-18.66 11.2 18.66 11.2L280 164.8l-18.67-11.2z',
	},
	{
		fill: 'url(#ag)',
		d: 'M224 131.2l-18.67 11.2L224 153.6l18.67-11.2L224 131.2z',
	},

	{
		fill: 'url(#i)',
		d: 'M410.67 198.4L392 209.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#ai)',
		d: 'M186.67 108.8L168 120l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#a)',
		d: 'M242.67 142.4L224 153.6l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#i)',
		d: 'M37.33 198.4l-18.66 11.2 18.66 11.2L56 209.6l-18.67-11.2z',
	},
	{
		fill: 'url(#S)',
		d: 'M205.33 120l-18.66 11.2 18.66 11.2L224 131.2 205.33 120z',
	},
	{
		fill: 'url(#q)',
		d: 'M298.67 220.8L280 232l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#i)',
		d: 'M261.33 198.4l-18.66 11.2 18.66 11.2L280 209.6l-18.67-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M280 209.6l-18.67 11.2L280 232l18.67-11.2L280 209.6z',
	},
	{
		fill: 'url(#j)',
		d: 'M242.67 187.2L224 198.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#s)',
		d:
			'M392 232l-18.67 11.2L392 254.4l18.67-11.2L392 232zM317.33 232l-18.66 11.2 18.66 11.2L336 243.2 317.33 232z',
	},
	{
		fill: 'url(#ae)',
		d: 'M224 176l-18.67 11.2L224 198.4l18.67-11.2L224 176z',
	},
	{
		fill: 'url(#j)',
		d: 'M392 187.2l-18.67 11.2L392 209.6l18.67-11.2L392 187.2z',
	},

	{
		fill: 'url(#P)',
		d: 'M149.33 131.2l-18.66 11.2 18.66 11.2L168 142.4l-18.67-11.2z',
	},
	{
		fill: 'url(#ak)',
		d: 'M429.33 209.6l-18.66 11.2 18.66 11.2L448 220.8l-18.67-11.2z',
	},
	{
		fill: 'url(#g)',
		d: 'M205.33 164.8L186.67 176l18.66 11.2L224 176l-18.67-11.2z',
	},
	{
		fill: 'url(#af)',
		d: 'M186.67 153.6L168 164.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#a)',
		d: 'M168 142.4l-18.67 11.2L168 164.8l18.67-11.2L168 142.4z',
	},
	{
		fill: 'url(#q)',
		d: 'M373.33 220.8L354.67 232l18.66 11.2L392 232l-18.67-11.2z',
	},
	{
		fill: 'url(#al)',
		d: 'M205.33 321.6L224 332.8l18.67-11.2L224 310.4l-18.67 11.2z',
	},
	{
		fill: 'url(#f)',
		d: 'M379.83 179.9l-6.5-3.9-18.66 11.2 18.66 11.2L392 187.2l-12.17-7.3z',
	},
	{
		fill: 'url(#E)',
		d: 'M205.33 299.2l-18.66 11.2 18.66 11.2L224 310.4l-18.67-11.2z',
	},

	{
		fill: 'url(#an)',
		d: 'M186.67 288L168 299.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#ao)',
		d: 'M261.33 310.4l-18.66 11.2 18.66 11.2L280 321.6l-18.67-11.2z',
	},
	{
		fill: 'url(#ap)',
		d: 'M205.33 97.6l-18.66 11.2 18.66 11.2L224 108.8l-18.67-11.2z',
	},
	{
		fill: 'url(#n)',
		d: 'M168 276.8L149.33 288 168 299.2l18.67-11.2L168 276.8z',
	},
	{
		fill: 'url(#q)',
		d: 'M74.67 220.8L56 232l18.67 11.2L93.33 232l-18.66-11.2z',
	},
	{
		fill: 'url(#d)',
		d: 'M56 209.6l-18.67 11.2L56 232l18.67-11.2L56 209.6z',
	},
	{
		fill: 'url(#s)',
		d: 'M93.33 232l-18.66 11.2 18.66 11.2L112 243.2 93.33 232z',
	},
	{
		fill: 'url(#o)',
		d: 'M149.33 265.6l-18.66 11.2 18.66 11.2L168 276.8l-18.67-11.2z',
	},
	{
		fill: 'url(#m)',
		d: 'M112 243.2l-18.67 11.2L112 265.6l18.67-11.2L112 243.2z',
	},
	{
		fill: 'url(#E)',
		d: 'M242.67 299.2L224 310.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#a)',
		d: 'M317.33 142.4l-18.66 11.2 18.66 11.2L336 153.6l-18.67-11.2z',
	},
	{
		fill: 'url(#ag)',
		d: 'M298.67 131.2L280 142.4l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#ai)',
		d: 'M261.33 108.8L242.67 120l18.66 11.2L280 120l-18.67-11.2z',
	},
	{
		fill: 'url(#S)',
		d: 'M280 120l-18.67 11.2L280 142.4l18.67-11.2L280 120z',
	},
	{
		fill: 'url(#aq)',
		d: 'M336 153.6l-18.67 11.2L336 176l18.67-11.2L336 153.6z',
	},
	{
		fill: 'url(#g)',
		d: 'M354.67 164.8L336 176l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#as)',
		d: 'M261.33 131.2l-18.66 11.2 18.66 11.2L280 142.4l-18.67-11.2z',
	},
	{
		fill: 'url(#g)',
		d: 'M168 164.8L149.33 176 168 187.2l18.67-11.2L168 164.8z',
	},
	{
		fill: 'url(#S)',
		d: 'M242.67 120L224 131.2l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#at)',
		d: 'M224 108.8L205.33 120 224 131.2l18.67-11.2L224 108.8z',
	},
	{
		fill: 'url(#ap)',
		d: 'M242.67 97.6L224 108.8l18.67 11.2 18.66-11.2-18.66-11.2z',
	},
	{
		fill: 'url(#au)',
		d: 'M224 86.4l-18.67 11.2L224 108.8l18.67-11.2L224 86.4z',
	},
];

const getDefs = () => (
	<defs>
		<linearGradient
			id="bgGradient"
			x1="215.3"
			y1="30.04"
			x2="226.77"
			y2="458.74"
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
			id="a"
			y1="153.6"
			x2="448"
			y2="153.6"
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
			x1="0"
			y1="220.8"
			x2="448"
			y2="220.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="e"
			x1="0"
			y1="164.8"
			x2="448"
			y2="164.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="f"
			x1="0"
			y1="187.2"
			x2="448"
			y2="187.2"
			xlinkHref="#a"
		/>
		<linearGradient id="g" x1="0" y1="176" x2="448" y2="176" xlinkHref="#a" />
		<linearGradient
			id="h"
			x1="0"
			y1="187.2"
			x2="448"
			y2="187.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="i"
			x1="0"
			y1="209.6"
			x2="448"
			y2="209.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="j"
			x1="0"
			y1="198.4"
			x2="448"
			y2="198.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="k"
			x1="0"
			y1="265.6"
			x2="448"
			y2="265.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="l"
			x1="0"
			y1="276.8"
			x2="448"
			y2="276.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="m"
			x1="0"
			y1="254.4"
			x2="448"
			y2="254.4"
			xlinkHref="#a"
		/>
		<linearGradient id="n" x1="0" y1="288" x2="448" y2="288" xlinkHref="#a" />
		<linearGradient
			id="o"
			x1="0"
			y1="276.8"
			x2="448"
			y2="276.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="p"
			x1="0"
			y1="299.2"
			x2="448"
			y2="299.2"
			xlinkHref="#a"
		/>
		<linearGradient id="q" x1="0" y1="232" x2="448" y2="232" xlinkHref="#a" />
		<linearGradient id="r" x1="0" y1="232" x2="448" y2="232" xlinkHref="#a" />
		<linearGradient
			id="s"
			x1="0"
			y1="243.2"
			x2="448"
			y2="243.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="t"
			x1="0"
			y1="148"
			x2="448"
			y2="148"
			gradientTransform="rotate(30.96 121.332 148.012)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="u"
			x1="0"
			y1="164.8"
			x2="448"
			y2="164.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="v"
			x1="0"
			y1="170.4"
			x2="448"
			y2="170.4"
			gradientTransform="rotate(30.96 83.996 170.424)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="w"
			x1="0"
			y1="187.2"
			x2="448"
			y2="187.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="x"
			x1="0"
			y1="209.6"
			x2="448"
			y2="209.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="y"
			x1="0"
			y1="209.6"
			x2="448"
			y2="209.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="z"
			x1="0"
			y1="254.4"
			x2="448"
			y2="254.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="A"
			x1="0"
			y1="164.8"
			x2="448"
			y2="164.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="B"
			x1="0"
			y1="187.2"
			x2="448"
			y2="187.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="C"
			x1="0"
			y1="159.2"
			x2="448"
			y2="159.2"
			gradientTransform="rotate(30.96 102.666 159.227)"
			xlinkHref="#a"
		/>
		<linearGradient id="D" x1="0" y1="232" x2="448" y2="232" xlinkHref="#a" />
		<linearGradient
			id="E"
			x1="0"
			y1="310.4"
			x2="448"
			y2="310.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="F"
			x1="0"
			y1="299.2"
			x2="448"
			y2="299.2"
			xlinkHref="#a"
		/>
		<linearGradient id="G" x1="0" y1="204" x2="448" y2="204" xlinkHref="#a" />
		<linearGradient
			id="H"
			x1="0"
			y1="220.8"
			x2="448"
			y2="220.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="I"
			x1="0"
			y1="215.2"
			x2="448"
			y2="215.2"
			gradientTransform="rotate(30.96 9.32 215.229)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="J"
			x1="0"
			y1="299.2"
			x2="448"
			y2="299.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="K"
			x1="0"
			y1="192.8"
			x2="448"
			y2="192.8"
			gradientTransform="rotate(30.96 46.655 192.817)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="L"
			x1="0"
			y1="181.6"
			x2="448"
			y2="181.6"
			gradientTransform="rotate(30.96 65.326 181.62)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="M"
			x1="0"
			y1="198.4"
			x2="448"
			y2="198.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="N"
			x1="0"
			y1="276.8"
			x2="448"
			y2="276.8"
			xlinkHref="#a"
		/>
		<linearGradient id="O" x1="0" y1="148" x2="448" y2="148" xlinkHref="#a" />
		<linearGradient
			id="P"
			x1="0"
			y1="142.4"
			x2="448"
			y2="142.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="Q"
			x1="0"
			y1="177.95"
			x2="448"
			y2="177.95"
			xlinkHref="#a"
		/>
		<linearGradient
			id="R"
			x1="0"
			y1="159.2"
			x2="448"
			y2="159.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="S"
			x1="0"
			y1="131.2"
			x2="448"
			y2="131.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="T"
			x1="0"
			y1="125.6"
			x2="448"
			y2="125.6"
			gradientTransform="rotate(30.96 158.695 125.632)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="U"
			x1="0"
			y1="170.4"
			x2="448"
			y2="170.4"
			xlinkHref="#a"
		/>
		<linearGradient id="V" x1="0" y1="92" x2="448" y2="92" xlinkHref="#a" />
		<linearGradient
			id="W"
			x1="0"
			y1="103.2"
			x2="448"
			y2="103.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="X"
			x1="0"
			y1="125.6"
			x2="448"
			y2="125.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="Y"
			x1="0"
			y1="136.8"
			x2="448"
			y2="136.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="Z"
			x1="0"
			y1="114.4"
			x2="448"
			y2="114.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="aa"
			x1="0"
			y1="198.4"
			x2="448"
			y2="198.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ab"
			x1="0"
			y1="321.6"
			x2="448"
			y2="321.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ac"
			x1="0"
			y1="332.8"
			x2="448"
			y2="332.8"
			xlinkHref="#a"
		/>
		<linearGradient id="ad" x1="0" y1="344" x2="448" y2="344" xlinkHref="#a" />
		<linearGradient
			id="ae"
			x1="0"
			y1="187.2"
			x2="448"
			y2="187.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="af"
			x1="0"
			y1="164.8"
			x2="448"
			y2="164.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ag"
			x1="0"
			y1="142.4"
			x2="448"
			y2="142.4"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ah"
			x1="0"
			y1="114.4"
			x2="448"
			y2="114.4"
			gradientTransform="rotate(30.96 177.343 114.422)"
			xlinkHref="#a"
		/>
		<linearGradient id="ai" x1="0" y1="120" x2="448" y2="120" xlinkHref="#a" />
		<linearGradient
			id="aj"
			x1="0"
			y1="136.8"
			x2="448"
			y2="136.8"
			gradientTransform="rotate(30.96 140.002 136.816)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ak"
			x1="0"
			y1="220.8"
			x2="448"
			y2="220.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="al"
			x1="0"
			y1="321.6"
			x2="448"
			y2="321.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="am"
			x1="0"
			y1="103.2"
			x2="448"
			y2="103.2"
			gradientTransform="rotate(30.96 196.013 103.226)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="an"
			x1="0"
			y1="299.2"
			x2="448"
			y2="299.2"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ao"
			x1="0"
			y1="321.6"
			x2="448"
			y2="321.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ap"
			x1="0"
			y1="108.8"
			x2="448"
			y2="108.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="aq"
			x1="0"
			y1="164.8"
			x2="448"
			y2="164.8"
			xlinkHref="#a"
		/>
		<linearGradient
			id="ar"
			x1="0"
			y1="92"
			x2="448"
			y2="92"
			gradientTransform="rotate(30.96 214.678 92.01)"
			xlinkHref="#a"
		/>
		<linearGradient
			id="as"
			x1="0"
			y1="142.4"
			x2="448"
			y2="142.4"
			xlinkHref="#a"
		/>
		<linearGradient id="at" x1="0" y1="120" x2="448" y2="120" xlinkHref="#a" />
		<linearGradient
			id="au"
			x1="0"
			y1="97.6"
			x2="448"
			y2="97.6"
			xlinkHref="#a"
		/>
		<linearGradient
			id="c"
			x1="149"
			y1="352.9"
			x2="69.89"
			y2="501.49"
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
			id="b"
			x1="82.17"
			y1="418.42"
			x2="125.88"
			y2="358.61"
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
			id="av"
			x1="141.6"
			y1="494.97"
			x2="215.94"
			y2="443.38"
			xlinkHref="#a"
		/>
		<linearGradient
			id="aw"
			x1="296.19"
			y1="346.04"
			x2="418.66"
			y2="580.94"
			xlinkHref="#b"
		/>
		<linearGradient
			id="ax"
			x1="369.56"
			y1="388.32"
			x2="348.88"
			y2="357.89"
			xlinkHref="#c"
		/>
	</defs>
);
