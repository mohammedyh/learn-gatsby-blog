import { Link } from 'gatsby';
import React from 'react';

const AboutPage = () => (
	<main>
		<h1>About me</h1>
		<Link to="/">Back to home</Link>
		<p>
			Hi there! I'm the proud creator of this site, which I built with Gatsby.
		</p>
	</main>
);

export default AboutPage;

export const Head = () => <title>About me</title>;
