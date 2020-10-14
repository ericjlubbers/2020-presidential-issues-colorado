import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import './style.scss';

// import SunLogo from '../images/sun.svg';
// import NavbarTop from './navbar-top';


export default ({ children }) => (
	<StaticQuery
	query={graphql`
	{
	  allGoogleSpreadsheetChatter {
		edges {
		  node {
			deck
			headline
			category
			categoryLink
		  }
		}
	  }
	}
  `}
  
  render={data => (

<div><section class="section">	
	<div class="columns is-centered">
		<div class="column">
		{data.allGoogleSpreadsheetChatter.edges.map(({ node }, index) => (
	  		<div><h4 class="eyebrow title is-6">
			<a href={node.categoryLink} class="eyebrow">
				{node.category}
			</a>
			</h4>
			<h1 class="title is-1 is-size-2-mobile headline">{node.headline}</h1>
			<h2 class="title is-4 is-size-5-mobile headline">{node.deck}</h2></div>
			))}
			{children}
	  </div>
	</div>
</section></div>
	)}
  />
  )
