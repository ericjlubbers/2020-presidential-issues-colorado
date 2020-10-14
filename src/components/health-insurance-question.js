import React from 'react';
import './style.scss';
// import { FaCannabis, FaCapsules, FaMountain, FaGasPump, FaWallet, FaGraduationCap, FaBeer } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
// import IssuePageLink from '../components/issue-link';
import QuestionPageLink from './question-link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default () => (
  <StaticQuery
  query={graphql`
  {
  allGoogleSpreadsheetQuestions(filter: {questionSlug: {regex: "/health-insurance/"}}) {
     edges {
      node { category  
      categorySlug
      background
      questionLabel
      questionOrder
      questionSlug
      questionText
      iconId
    }
  }
}
  }
`}

render={data => (

<div>
     {data.allGoogleSpreadsheetQuestions.edges.map(({ node }) => (
       <div class="tile is-ancestor ">
         <div class="tile is-parent is-vertical">
           <article class="tile notification is-primary is-child is-vertical">
             <article class="media">
               <figure class="media-left">
                 <p class="title has-text-warning is-size-3 is-size-5-mobile">Q:</p>
               </figure>
               <div class="media-content">
               <div class="content">
               <QuestionPageLink id={node.questionSlug}><p class="title label is-size-6">{node.questionLabel}</p></QuestionPageLink>
                 <h3 class="title question is-size-4 is-size-5-mobile"> {node.questionText}</h3>
                 
               </div>
               </div>
             </article>
           </article>
         </div>
         <div class="tile is-parent is-vertical">
           <div class="container">
             <article class="tile is-child is-vertical notification is-light">
              <p class="is-size-6"><strong>Background:</strong>&nbsp;<span dangerouslySetInnerHTML={{ __html: node.background }} /></p>
            </article>
           </div>
         </div>
       </div>
     ))}
   </div>
)}
/>
);

  