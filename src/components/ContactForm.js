import React from 'react';

const ContactForm = () => {
	return (
		<section className="contact-form">
			<h1>Let's Talk</h1>
			<form
				name="Contact Form"
				method="POST"
				data-netlify="true"
				action="/thank-you"
				className="form"
				id="contact"
			>
				<input type="hidden" name="form-name" value="Contact Form" />
				<div className="form__inline-inputs">
					<div className="input-group">
						<input type="text" name="name" required />
						<label>Name</label>
					</div>
					<div className="input-group">
						<input type="email" name="email" required />
						<label>Email</label>
					</div>
				</div>
				<div className="input-group">
					<textarea name="message" />
					<label>What can Craft Pixel do for you?</label>
				</div>
				<div className="button__wrapper">
					<button className="button--outline" type="submit">
						Send
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
