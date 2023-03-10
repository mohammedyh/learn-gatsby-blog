/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: 'Learn Gatsby by Building a Blog',
		description: 'A blog built with Gatsby JS',
		siteUrl: 'https://inquisitive-bunny-9f8702.netlify.app/',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
	],
};
