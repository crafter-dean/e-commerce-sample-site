import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import AboutImage from '../images/aboutImage@2x.png';

const About = () => {
	return (
		<Layout>
			<SEO title="About" />
			<div className="about__wrapper">
				<img src={AboutImage} alt="" />
				<div>
					<h1 className="page-header">About Us</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco poriti
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in uienply voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin
						proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default About;
