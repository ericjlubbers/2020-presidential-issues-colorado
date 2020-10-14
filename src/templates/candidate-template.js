import React from 'react';
import HeadlineBox from '../components/headline-box';
import Byline from '../components/byline';
import Layout from '../components/layout';
import NavbarTop from '../components/navbar-top';
import IssueTiles from '../components/issue-tiles';
import CandidateCardsLive from '../components/candidate-cards-live';
import Footer from '../components/footer';
import '../components/style.scss';
import Breadcrumbs from '../components/breadcrumbs';
import IssuePageLink from '../components/issue-link';
import QuestionPageLink from '../components/question-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import CandidateMug from '../components/mug';
import CandidatePageLink from '../components/candidate-link';
import { graphql } from "gatsby"

export default ({ data }) => {
    const intro = data.allGoogleSpreadsheetCandidates
    const qa = data.allGoogleSpreadsheetAnswers
    return (
        <Layout>
        <NavbarTop/>
        <HeadlineBox>
            <Byline/>
        </HeadlineBox>
        <Breadcrumbs/>

        <div id="candidates">
      <section class="section">
      {/* CANDIDATE INTRO */}
      {intro.edges.map(({ node }, index) => (
      <div class="container" id="start">
      <figure class="image container is-128x128">
      <CandidateMug id={node.candidateId} alt={node.candidateName} status={node.campaignStatus}/>
      </figure>
      <p>&nbsp;</p>
      <h2 class="title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-rule has-text-centered"><CandidatePageLink id={node.candidateId} name={node.candidateName}/></h2>
      <p class="is-size-4-desktop is-size-5-tablet is-size-5-mobile has-rule has-text-centered"><em>{node.candidateInfo}</em></p>
      <p>&nbsp;</p>
      <hr class="level has-text-centered"/>
      <p>&nbsp;</p>
      </div>
      ))} 
      
      
      <div class="container">
          <div class="columns is-centered">
              <div class="column is-full-mobile is-full-tablet is-9-desktop is-6-fullscreen">
              <div class="columns is-multiline is-mobile is-centered">
                {/* CARDS */}
                {qa.edges.map(({ node }, index) => (
                    <div id="questionsandanswers">
                    <div class="tile is-ancestor">
                    <div class="tile is-parent is-vertical">
                      <article class="tile notification is-primary is-child is-vertical">
                        <article class="media">
                        <figure class="media-left">
                          <p class="title has-text-warning is-size-3 is-size-5-mobile">Q:</p>
                        </figure>
                        <div class="media-content">
                      <div class="content">
                        <QuestionPageLink id={node.questionSlug}><p class="title label is-size-6">{node.questionLabel}</p></QuestionPageLink>
                      <h3 class="title question is-size-4 is-size-5-mobile">{node.questionText}</h3>
                      <div class="container has-text-left"><IssuePageLink id={node.categorySlug}><button class="button is-small is-primary is-outlined is-hoverable is-inverted is-fullwidth"><FontAwesomeIcon icon={"arrow-circle-right"} />&nbsp;&nbsp;{node.category}&nbsp;&nbsp;<FontAwesomeIcon icon={node.iconId} /></button></IssuePageLink></div>
                        </div></div>
                      
                      </article></article>
                    </div>
                    <div class="tile is-parent is-vertical">
                      <div class="container">
                      <article class="tile is-child is-vertical notification is-light">
                      <p class="is-size-6"><strong>Background:</strong>&nbsp;<span dangerouslySetInnerHTML={{ __html: node.background }}/></p>
                      </article>
                      </div>
                    </div>
                  </div>
                  <p>&nbsp;</p>
              <div class="columns is-centered box">
              <div class="column">
              <p class="title is-size-4-desktop is-size-5-tablet is-size-5-mobile">{node.shortAnswer}</p>
              <p class="is-size-6-desktop is-size-6-tablet is-size-6-mobile"><strong>A:</strong> <span dangerouslySetInnerHTML={{ __html: node.longAnswer }}/></p>
              </div>
              </div><p>&nbsp;</p></div>
                    ))}
                
        {/* END CARDS */}
        </div></div></div></div></section></div>
        <IssueTiles />
        <CandidateCardsLive />
        <Footer />
        </Layout>
    )
  }
  export const query = graphql`
  query($candidateId: String!){
    sitePage {
      context {
        candidateId
      }
    }
    allGoogleSpreadsheetCandidates(filter: {candidateId: {eq: $candidateId}}) {
      edges {
        node {
          candidateId
          candidateInfo
          campaignStatus
          candidateName
        }
      }
    }
    allGoogleSpreadsheetAnswers(filter: {candidateId: {eq: $candidateId}}) {
      edges {
        node {
            background
            candidateName
            category
            categorySlug
            questionLabel
            questionSlug
            questionText
            shortAnswer
            longAnswer
            candidateId
            candidateInfo
            iconId
        }
      }
    }
  }
`