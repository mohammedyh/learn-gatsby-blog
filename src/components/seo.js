import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ title }) => {
	const { title: siteTitle, description } = useSiteMetadata();
	return (
		<>
			<title>
				{title} | {siteTitle}
			</title>
			<meta name="description" content={description} />
		</>
	);
};

export default Seo;
