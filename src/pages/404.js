import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/Seo';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import WithArrow from '../components/WithArrow';
import '../styles/styles.scss';

const NotFoundPage = () => (
	<>
		<LandingHeader />

		<SEO title="Thanks for the message" />
		<main className="not-found">
			<h1>404: Page Not Found</h1>
			<p>Whoops! We couldn't find that page</p>
			<Link to="/">
				<WithArrow leftSide size={14} color="#000">
					Go Home
				</WithArrow>
			</Link>
		</main>
		<Footer />
	</>
);

export default NotFoundPage;
