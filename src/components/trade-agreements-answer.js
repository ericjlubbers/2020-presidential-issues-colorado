        import React from 'react';
        import './style.scss';
        // import { FaCannabis, FaCapsules, FaMountain, FaGasPump, FaWallet, FaGraduationCap, FaBeer } from 'react-icons/fa';
        import { StaticQuery, graphql } from 'gatsby';
        import CandidateMug from '../components/mug';
        import CandidatePageLink from '../components/candidate-link';
      
        export default () => (
          <StaticQuery
          query={graphql`
          {
            allGoogleSpreadsheetAnswers(filter: {questionSlug: {regex: "/trade-agreements/"}}, sort: {fields: candidateId, order: ASC}) {
              edges {
                node {
                  background
                  candidateName
                  category
                  categorySlug
                  questionLabel
                  questionSlug
                  questionOrder
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
        `}
        
        render={data => (
        
        <div>
                {data.allGoogleSpreadsheetAnswers.edges.map(({ node }) => (
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
        )}
        />
        );
        
          