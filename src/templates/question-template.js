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

import CandidateMug from '../components/mug';
import CandidatePageLink from '../components/candidate-link';
import IssuePageLink from '../components/issue-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import QuestionPageLink from '../components/question-link';
import { graphql } from "gatsby"

export default ({ data }) => {
    const question = data.allGoogleSpreadsheetQuestions
    const answers = data.allGoogleSpreadsheetAnswers
    return (
        <Layout>
        <NavbarTop/>
        <HeadlineBox>
            <Byline/>
        </HeadlineBox>
        <Breadcrumbs/>

        <div id="candidates">
      <section class="section">    
      <div class="container">
          <div class="columns is-centered">
              <div class="column is-full-mobile is-full-tablet is-9-desktop is-6-fullscreen">
              {question.edges.map(({ node }) => (<h2 class="title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-rule has-text-centered"><QuestionPageLink id={node.questionSlug}/>Q: {node.questionLabel}</h2>
                      ))}
      <hr class="level has-text-centered"/>
      <p>&nbsp;</p>
              <div class="columns is-multiline is-mobile is-centered">
                {/* QUESTION INTRO */}
                {question.edges.map(({ node }) => (
          
          <div class="tile is-ancestor ">
            <div class="tile is-parent is-vertical">
              <article class="tile notification is-primary is-child is-vertical">
                <article class="media">
                  <figure class="media-left">
                    <p class="title has-text-warning is-size-3 is-inline is-size-5-mobile">Q:</p>
                  </figure>
                  <div class="media-content">
                  <div class="content">
                    {/* <p class="title label is-size-6">{node.questionLabel}</p> */}
                    <h3 class="title question nopadtop is-size-4 is-size-5-mobile"> {node.questionText}</h3>
                    <div class="container has-text-left"><IssuePageLink id={node.categorySlug}><button class="button is-small is-primary is-outlined is-hoverable is-inverted is-fullwidth"><FontAwesomeIcon icon={"arrow-circle-right"} />&nbsp;&nbsp;{node.category}&nbsp;&nbsp;<FontAwesomeIcon icon={node.iconId} /></button></IssuePageLink></div>
                    
                    
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
                {/* ANSWERS */}
                <div>
                {answers.edges.map(({ node }) => (
                <div class={node.questionSlug}>
            <p>&nbsp;</p>
            <div class="columns is-centered box">
            <div class="column is-2 is-3-tablet is-3-desktop is-2-fullhd">
            <figure class="image container is-96x96">
            <CandidatePageLink id={node.candidateId}><CandidateMug id={node.candidateId} alt={node.candidateName} status={node.campaignStatus}/></CandidatePageLink>
            </figure>
            <p class="title is-size-6 toppad has-text-centered"><CandidatePageLink id={node.candidateId}>{node.candidateName}</CandidatePageLink></p>
            </div>
            <div class="column">
            <p class="title is-size-4-desktop is-size-5-tablet is-size-5-mobile">{node.shortAnswer}</p>
            <p class="is-size-6-desktop is-size-6-tablet is-size-6-mobile"><strong>A: </strong><span dangerouslySetInnerHTML={{ __html: node.longAnswer }}/></p>
            </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            ))}
              </div>
                
        {/* END CARDS */}
        </div></div></div></div></section></div>
        <IssueTiles />
        <CandidateCardsLive />
        <Footer />
        </Layout>
    )
  }
  export const query = graphql`
  query($questionSlug: String!){
    sitePage {
      context {
        questionSlug
      }
    }
    allGoogleSpreadsheetQuestions(filter: {questionSlug: {eq: $questionSlug}}) {
      edges {
        node {
            background
            category
            categorySlug
            questionLabel
            questionOrder
            questionSlug
            questionText
            iconId
        }
      }
    }
    allGoogleSpreadsheetAnswers(filter: {questionSlug: {eq: $questionSlug}}) {
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
            campaignStatus
        }
      }
    }
  }
`