import React from 'react';
import HeadlineBox from '../components/headline-box';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import Byline from '../components/byline';
import IntroBox from '../components/intro-box';
import NavbarTop from '../components/navbar-top';
import IssueTiles from '../components/issue-tiles';
import CandidateCardsLive from '../components/candidate-cards-live';
import Footer from '../components/footer';

const IndexPage = () => <Layout>
<NavbarTop/>
<div class="columns is-centered">
<div class="column is-8-desktop is-full-tablet">
<HeadlineBox>
<Byline />
</HeadlineBox>
<Breadcrumbs/>
<IntroBox />
</div>
</div>
<div class="columns">
<div class="column">
<CandidateCardsLive />
</div>
<div class="column">
<IssueTiles />
</div>
</div>
<Footer />
</Layout>;

export default IndexPage;
