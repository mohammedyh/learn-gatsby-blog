import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map(node => (
				<article key={node.id}>
					<h2>{node.frontmatter.title}</h2>
					<p>{node.excerpt}</p>
					<p>Posted: {node.frontmatter.date}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					title
					slug
					date(formatString: "MMMM Do YYYY")
				}
				body
				excerpt
				id
			}
		}
	}
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
