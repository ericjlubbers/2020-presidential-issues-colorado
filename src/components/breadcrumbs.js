import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Link } from "gatsby"
import Share from '../components/share-box';
// import InfoBox from './info-box';

export default ()  => (
   <div><div id="start"><p>&nbsp;</p><nav class="breadcrumb is-centered is-medium" aria-label="breadcrumbs">
   <ul>
     <li><Link to="/"><FontAwesomeIcon icon="home" />&nbsp;Home</Link></li>
     <li><Link to="#issues"><FontAwesomeIcon icon="envelope-open-text" />&nbsp;Issues</Link></li>
     <li><Link to="#candidates"><FontAwesomeIcon icon="users" />&nbsp;Candidates</Link></li>
     <li><Link to="/all-questions#start"><FontAwesomeIcon icon="clipboard-check" />&nbsp;Questions</Link></li>
   </ul>
 </nav></div>
 <Share/>
 {/* <InfoBox /> */}
 </div> 
  )