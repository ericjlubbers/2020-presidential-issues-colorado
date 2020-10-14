import React from 'react';
import HeadlineBox from '../../components/headline-box';
import Byline from '../../components/byline';
import Layout from '../../components/layout';
import NavbarTop from '../../components/navbar-top';
import IssueTiles from '../../components/issue-tiles';
import CandidateCardsLive from '../../components/candidate-cards-live';
import Footer from '../../components/footer';
import '../../components/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from "gatsby"
import Breadcrumbs from '../../components/breadcrumbs';
import CannabisLegalAnswer from '../../components/cannabis-legal-answer';
import CannabisLegalQuestion from '../../components/cannabis-legal-question';
import CannabisBankingQuestion from '../../components/cannabis-banking-question';
import CannabisBankingAnswer from '../../components/cannabis-banking-answer';





export default ({ data }) => {
  const intro = data.allGoogleSpreadsheetCategories


  // const questions = data.allGoogleSpreadsheetQuestions
  return (
    <Layout>
    <NavbarTop/>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9-desktop">
        <HeadlineBox>
    <Byline/>
    </HeadlineBox>
    <Breadcrumbs/>
        </div>
      </div>
    </div>

    <div id="candidates">
    <section class="section">
    {/* CATEGORY INTRO */}
    {intro.edges.map(({ node }, index) => (
      <div><div class="container" id="start">
      <h2 class="title is-2 has-rule has-text-centered"><FontAwesomeIcon icon={node.iconId} size="1x" />&nbsp;&nbsp;{node.categoryName}</h2>
      <hr class="level has-text-centered"/>
      <p>&nbsp;</p>
      </div></div>
      ))}
      </section></div>
      <div class="container">
      <div class="columns is-centered">
      <div class="column is-full-mobile is-full-tablet is-9-desktop is-6-fullscreen">
      <div class="columns is-multiline is-mobile is-centered">
    <CannabisLegalQuestion/>
      <CannabisLegalAnswer/>
      <CannabisBankingQuestion/>
      <CannabisBankingAnswer/>
      </div>   
      </div></div></div>
      
        <IssueTiles />
        <CandidateCardsLive />
        <Footer />
        </Layout>
        )
      }
      export const query = graphql`
      {
        allGoogleSpreadsheetCategories(filter: {categorySlug: {eq: "marijuana"}}) {
          edges {
            node {
              categoryName
              categorySlug
              iconId
            }
          }
        }
    }
      `