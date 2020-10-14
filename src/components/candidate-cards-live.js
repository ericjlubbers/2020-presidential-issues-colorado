import React from 'react';
import './style.scss';
import { StaticQuery, graphql } from "gatsby"
import { FaArrowCircleRight } from 'react-icons/fa';
import CandidateMug from '../components/mug';
import CandidatePageLink from './candidate-link';

export default ( { candidateSlug } ) => (
  <StaticQuery
  query={graphql`
  {
    allGoogleSpreadsheetCandidates(sort: {fields: candidateId, order: ASC}) {
      edges {
        node {
          candidateId
          candidateInfo
          campaignStatus
          candidateName
        }
      }
    }
  }
`}

render={data => (
<div id="candidates">
<section class="section">
<div class="container">
<h2 class="title is-2 has-rule has-text-centered">The Candidates</h2>
      <hr class="level has-text-centered"/>
      <h3 class="subtitle is-5 has-text-centered">Click a candidate to see where they stand.</h3>
      <hr class="level has-text-centered"/>
<p>&nbsp;</p>
</div>

<div class="container">
    <div class="columns is-centered">
        <div class="column">
        <div class="columns is-multiline is-mobile is-centered">
          {/* CARDS */}
          {data.allGoogleSpreadsheetCandidates.edges.map(({ node }, index) => (    
<div class="column is-4-widescreen is-3-fullhd is-4-tablet is-half-mobile">
<div class="card">
<div class="card-image card-round">
  <figure class="image">
    <CandidateMug id={node.candidateId} alt={node.candidateName} status={node.campaignStatus}/>
  </figure>
</div>
<div class="card-content">
<p class="title is-size-6"><CandidatePageLink id={node.candidateId} name={node.candidateName}/></p>
<p class="subtitle is-size-7">{node.candidateInfo} <CandidatePageLink id={node.candidateId}>&nbsp;&nbsp;<FaArrowCircleRight class="has-text-danger"/></CandidatePageLink></p>
</div>
</div>
</div>
  ))}
  {/* END CARDS */}
  </div></div></div>
  </div>
  </section>
</div> )}
/>
);