import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Contact = () => {
	return (
		<Layout>
			<SEO title="Contact Us" />
			<div className="contact">
				<div className="contact__content">
					<div className="contact__title">
						<h1>Contact Us</h1>
					</div>
					<div className="contact__empty"></div>
					<div className="contact__form">
						<form action="" className="form">
							<label htmlFor="name">Full Name</label>
							<input type="text" id="name" />
							<label htmlFor="email">Email Address</label>
							<input type="text" id="email" />
							<label htmlFor="subject">Subject</label>
							<input type="text" id="subject" />
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="10"
							></textarea>
							<div className="button__wrapper">
								<button className="button--outline">Send</button>
							</div>
						</form>
					</div>
					<div className="contact__info">
						<h3>Hours</h3>
						<p>Monday-Friday 10am-8pm, Saturday 10am-6pm</p>
						<h3>Phone</h3>
						<p>(555) 555 - 5555</p>
						<h3>E-mail</h3>
						<p>businessname@placeholder.biz</p>
						<h3>Address</h3>
						<p>555 Main Street - Lexington, KY 40500</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100611.74412526676!2d-84.46969385713852!3d37.9977312628753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244ebfb652e7d%3A0x89d7d00305c42458!2sLexington%20Public%20Library%2C%20Central%20Library!5e0!3m2!1sen!2sus!4v1603672069731!5m2!1sen!2sus"
							width="600"
							height="450"
							frameborder="0"
							style={{ border: 0 }}
							allowfullscreen=""
							aria-hidden="false"
							tabindex="0"
							title="store map"
						></iframe>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
