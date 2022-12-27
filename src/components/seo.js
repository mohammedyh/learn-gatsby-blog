import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ title }) => {
	const { title: metaTitle } = useSiteMetadata();
	return (
		<title>
			{title} | {metaTitle}
		</title>
	);
};

export default Seo;
