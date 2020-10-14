import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookIcon } from 'react-share';
import { faCapsules, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';


const InfoBox = ({ socialConfig, tags }) => (
  <div class="columns is-centered">
    <div class="column is-4">
    <div class="is-post-it notification">
  <p class="subtitle has-text-danger has-text-centered has-text-weight-semibold">IMPORTANT VOTING INFORMATION</p>
  <ul>
    <li><strong>• It's too late to mail in your ballot.</strong> <a href="http://http://www.justvotecolorado.org/">Find your nearest drop-off location here</a> and get your ballot in by 7 p.m. Tuesday, March 3.</li>
    <li><strong>• It's <em>not</em> too late to register.</strong> You may register to vote at any time up to and including Election Day <a href="http://http://www.justvotecolorado.org/">in person at any Voter Service and Polling Center</a>.</li>
    <li><strong>• Did you vote for a candidate that has dropped out?</strong> It’s too late to change if you've turned in your ballot, but if you haven't, <a href="https://coloradosun.com/2020/03/02/colorado-presidential-primary-2020-candidates-dropped-out/">we've got instructions on what to do.</a></li>
  </ul>

</div>
    </div>
  </div>

);



export default InfoBox;

