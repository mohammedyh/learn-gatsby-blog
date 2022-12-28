import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.hero_image);
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.frontmatter.date}</p>
			<GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
			<p>{children}</p>
		</Layout>
	);
};

export default BlogPost;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM Do, YYYY")
				hero_image_alt
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
