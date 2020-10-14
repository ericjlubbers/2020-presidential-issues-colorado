import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						author
      description
      github
      imageUrl
      keywords
      siteUrl
      title
      twitter
      twitterHandle
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="keywords" content={data.site.siteMetadata.keywords} />
				<title>{data.site.siteMetadata.title}</title>
				<html lang="en"/>
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				<meta itemprop="image" content={data.site.siteMetadata.imageUrl} />
				<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content={data.site.siteMetadata.twitterHandle} />
<meta name="twitter:title" content={data.site.siteMetadata.title} />
<meta name="twitter:description" content={data.site.siteMetadata.description} />
<meta name="twitter:image" content={data.site.siteMetadata.imageUrl} />
<script>
        {`(function(p,i,c,o){var n=new Event("pico-init");i[p]=i[p]||function(){(i[p].queue=i[p].queue||[]).push(arguments)},i.document.addEventListener("pico-init",function(e){var t=i.Pico.getInstance(e,{publisherId:o,picoInit:n},i);t.handleQueueItems(i[p].queue),i[p]=function(){return t.handleQueueItems([arguments])}},!1);var e=i.document.createElement("script"),t=i.document.getElementsByTagName("script")[0];e.async=1,e.src=c,e.onload=function(e){return i.Pico.getInstance(e,{publisherId:o,picoInit:n},i)},t.parentNode.insertBefore(e,t)})("pico",window,"https://widget.pico.tools/wrapper.min.js","a01f048a-3cf3-4ba9-9321-daf749012fe1");`}
    </script>
			</Helmet>
		)}
	/>
);
