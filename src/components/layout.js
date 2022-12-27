import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import {
	container,
	heading,
	navLinkItem,
	navLinks,
	navLinkText,
	siteTitle,
} from './layout.module.css';

const Layout = ({ children, pageTitle }) => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div className={container}>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/blog" className={navLinkText}>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
