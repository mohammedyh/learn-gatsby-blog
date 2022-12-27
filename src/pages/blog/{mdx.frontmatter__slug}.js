import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
	return (
		<Layout pageTitle="Super Cool Blog Posts">
			<h1>{data.mdx.frontmatter.title}</h1>
			<p>{data.mdx.frontmatter.date}</p>
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
				date(formatString: "MMMM Do YYYY")
			}
		}
	}
`;
