import React from 'react';
import './style.scss';
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"


const IssueContentLive = () => (

<div>
<section class="section">
<div class="container" id="start">
<h2 class="title is-2 has-rule has-text-centered"><FaCapsules />&nbsp;&nbsp;Health care</h2>
      <hr class="level has-text-centered"/>
      {/* <h3 class="subtitle is-5 has-text-centered">Pick a card to see stances from the candidates.</h3>
      <hr class="level has-text-centered"/> */}
      <p>&nbsp;</p>
</div>
  <div class="columns is-centered">
    <div class="column is-10-desktop">
    
      {/* BEGIN QUESTION */}
      <div class="tile is-ancestor">
  <div class="tile is-parent is-vertical">
    <article class="tile notification is-primary is-child is-vertical">
      <article class="media">
      <figure class="media-left">
        <p class="title has-text-warning is-size-3 is-size-5-mobile">Q:</p>
      </figure>
      <div class="media-content">
    <div class="content">
      <p class="title label is-size-6">STATE SINGLE-PAYER</p>
    <h3 class="title question nopadtop is-size-4 is-size-5-mobile"> If your federal health care agenda does not advance, would you support state efforts to create single-payer systems and would you grant approval for federal dollars to help fund those systems?</h3></div></div>
    
    </article></article>
  </div>
  <div class="tile is-parent is-vertical">
    <div class="container">
    <article class="tile is-child is-vertical notification is-light">
    <p class="is-size-6"><strong>Background:</strong> An expansion of Medicare -- whether “For All,” or just for those who choose to buy into it -- has become the defining policy debate of this year’s Democratic primary. But having a plan and passing it through Congress are two very different things. If the next administration fails to pass its health care initiative, expect states like Colorado to continue to try their hand at state-level programs. Colorado is working on a planned public option that would compete for customers on the private insurance market, while a handful of other states have expressed interest in developing fully government-run, single-payer plans.</p>
    </article>
    </div>
    
  </div>
</div>


<p>&nbsp;</p>


<div class="columns is-centered box">
<div class="column is-1 is-2-tablet is-2-desktop is-1-fullhd">
<figure class="image container is-96x96">
<a href="/candidate/warren/"><img class="is-rounded" src={WarrenMug} alt="Elizabeth Warren"/></a>
</figure>
<p class="title is-size-6 toppad has-text-centered"><a href="/candidate/warren/">Elizabeth Warren</a></p>
</div>
<div class="column">
<p class="title is-size-4-desktop is-size-5-tablet is-size-5-mobile">Short punchy answer that is about ten words long</p>
<p><strong>A: </strong>Steyer did not respond directly to whether his administration would assist state-run plans. But his campaign positions suggest he may be more supportive of a state-level public option like what’s being pushed in Colorado than a state-run single-payer system. At the federal level, he opposes a single-payer system, he said, “because I don’t like the idea of telling Americans who are getting their health care through their employee that they don’t have a choice.” Instead, he’s proposing a public option that would be available to all Americans. He argues that competition from the government will drive down the costs of private insurance, drugs and hospital bills.</p>
</div>
<div class="column">
<p>I’m calling for a public option, where you use the power of government to drive down the cost of insurance, drugs, and hospital bills for the American people. One of the reasons I oppose going to a single payer-system is because I don’t like the idea of telling Americans who are getting their health care through their employee that they don’t have a choice. I believe that health care is a right and so I support expanding coverage to all Americans.</p>
</div>
</div>
<p>&nbsp;</p>



<p>&nbsp;</p>
    </div>
  </div>





</section>
</div>
      

)

export default IssueContentLive;