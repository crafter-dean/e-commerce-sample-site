import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import WithArrow from '../components/WithArrow';
import { EnvelopeIcon } from '../utils/icons';

const ThankYou = () => {
	const [displayInitialIcon, setDisplayInitialIcon] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setDisplayInitialIcon(false);
		}, 1000);
	}, []);
	const svgSize = 160;

	return (
		<>
			<LandingHeader />
			<main className="thank-you">
				{displayInitialIcon ? (
					<EnvelopeIcon size={svgSize} fill="#000" />
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={svgSize}
						height={svgSize}
						viewBox="0 0 512 512"
						aria-labelledby="title"
					>
						<title id="title">Envelope Open Icon</title>

						<path
							fill="#fff"
							stroke="#231f20"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
							d="M32 224L256 64l224 160v256H32V224z"
						/>
						<motion.g animate={{ y: 0 }} initial={{ y: 30 }}>
							{/* Page frame */}
							<path
								fill="#fff"
								stroke="#231f20"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
								d="M96 96h320v351.5H96z"
							/>
							{/* Page lines */}
							<path
								fill="none"
								stroke="#231f20"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
								d="M160 160h192M160 224h192M160 288h192M160 352h192"
							/>
						</motion.g>
						<path
							d="M480 224v256H32V224l224 128z"
							fill="#fff"
							stroke="#231f20"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/>
					</svg>
				)}
				<h1>Thanks for your message!</h1>
				<p>Expect to hear from us soon.</p>
				<Link to="/">
					<WithArrow leftSide size={14} color="#000">
						Go Home
					</WithArrow>
				</Link>
			</main>
			<Footer />
		</>
	);
};

export default ThankYou;
