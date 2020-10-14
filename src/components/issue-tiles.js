import React from 'react';
import './style.scss';
// import { FaCannabis, FaCapsules, FaMountain, FaGasPump, FaWallet, FaGraduationCap, FaBeer } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import IssuePageLink from '../components/issue-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default () => (
  <StaticQuery
  query={graphql`
  {
    allGoogleSpreadsheetCategories {
      edges {
        node {
          categoryName
          iconId
          categorySlug
        }
      }
    }
  }
`}

render={data => (

<div id="issues">
<section class="section">
<div class="container">
<h2 class="title is-2 has-rule has-text-centered">The Issues</h2>
      <hr class="level has-text-centered"/>
      <h3 class="subtitle is-5 has-text-centered">Pick a card to see stances from the candidates.</h3>
      <hr class="level has-text-centered"/>
<p>&nbsp;</p>
</div>
<div class="container">
    <div class="columns is-centered">
        <div class="column is-full-mobile is-full-tablet is-9-desktop is-full-widescreen">
        <div class="columns is-multiline is-mobile is-centered">
{data.allGoogleSpreadsheetCategories.edges.map(({ node }, index) => (    
<div class="column is-3-tablet is-half-mobile">
<div class="card">
  <div class="card-content">
  <IssuePageLink id={node.categorySlug}>
    <h4 class="tileLabel has-text-centered has-text-grey-dark is-size-7">  <FontAwesomeIcon icon={node.iconId} size="3x" className="has-text-centered" /><br /><br />
{node.categoryName}</h4></IssuePageLink>
  </div>
</div>
</div>
  ))}
  </div>
</div>
</div>
</div>
</section>
</div>
)}
/>
);