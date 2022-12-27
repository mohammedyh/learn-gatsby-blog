import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => (
	<Layout pageTitle="Home Page">
		<p>I'm making this by following the Gatsby Tutorial.</p>
		<StaticImage
			src="../images/clifford.webp"
			alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
		/>
	</Layout>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
