import React from 'react';
import HeadlineBox from '../components/headline-box';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import Byline from '../components/byline';
import NavbarTop from '../components/navbar-top';
import IssueTiles from '../components/issue-tiles';
import CandidateCardsLive from '../components/candidate-cards-live';
import Footer from '../components/footer';
import QuestionList from '../components/question-list';

const IndexPage = () => <Layout>
    <NavbarTop/>
    <div class="columns is-centered">
<div class="column is-8-desktop is-full-tablet">
    <HeadlineBox>
    <Byline />
    </HeadlineBox>
    </div></div>
    <Breadcrumbs/>
    <QuestionList/>
    <CandidateCardsLive />
    <IssueTiles />
    <Footer />
    </Layout>;

export default IndexPage;
