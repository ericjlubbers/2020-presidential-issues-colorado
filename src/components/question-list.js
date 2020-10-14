import React from 'react';
import './style.scss';
// import { FaCannabis, FaCapsules, FaMountain, FaGasPump, FaWallet, FaGraduationCap, FaBeer } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import IssuePageLink from '../components/issue-link';
import QuestionPageLink from '../components/question-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default () => (
  <StaticQuery
  query={graphql`
  {
  allGoogleSpreadsheetQuestions(sort: {fields: categorySlug}) {
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
<p>&nbsp;</p>
<h2 class="title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-rule has-text-centered">Questions</h2>
<hr class="level has-text-centered"/>
<div class="section">
        {data.allGoogleSpreadsheetQuestions.edges.map(({ node }) => (
            <div><div class="columns is-centered">
    <div class="column is-12-tablet is-8-desktop">
        <div class="columns is-centered">
                <div class="column is-9">
                    <QuestionPageLink id={node.questionSlug}><p class="title has-text-primary is-size-7">{node.questionLabel}</p></QuestionPageLink><h3 class="is-size-6"> {node.questionText}&nbsp;&nbsp;<QuestionPageLink id={node.questionSlug}><FontAwesomeIcon icon={"arrow-circle-right"} /></QuestionPageLink></h3>
                </div>
            <div class="column is-3">
                <p class="is-hidden-mobile">&nbsp;</p>
                        <IssuePageLink id={node.categorySlug}><button class="button is-small is-primary is-outlined is-fullwidth is-hoverable">{node.category}&nbsp;&nbsp;<FontAwesomeIcon icon={node.iconId} /></button></IssuePageLink>
                    </div>
                </div>
            </div>
            </div>
            <hr class="thin" />
        </div>
                  ))}  

    </div></div>

)}
/>
);

  