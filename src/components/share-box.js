import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookIcon } from 'react-share';
import { faCapsules, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';


const Share = ({ socialConfig, tags }) => (
    <div class="columns is-centered">
        <div class="column is-narrow">
            <p>&nbsp;</p>
        <nav class="breadcrumb is-centered is-medium" aria-label="breadcrumbs">
   <ul>
       <li><strong><span class="has-text-grey-light">SHARE</span></strong>&nbsp;&nbsp;&nbsp;&nbsp;</li>
     <li><a href="https://www.facebook.com/sharer.php?s=100&p[url]=Before%20you%20cast%20your%20primary%20ballot%2C%20see%20where%20the%20Senate%20candidates%20stand%20on%20key%20issues.%20Via%20%40TheColoradoSun%20http%3A%2F%2Fprojects.coloradosun.com%2F2020-colorado-senate-primary-hickenlooper-romanoff-issues%2F" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
     <a href="https://twitter.com/share?url=http%3A%2F%2Fprojects.coloradosun.com%2F2020-colorado-senate-primary-hickenlooper-romanoff-issues%2F&text=Before%20you%20cast%20your%20primary%20ballot%2C%20see%20where%20the%20Senate%20candidates%20stand%20on%20key%20issues.&via=%40ColoradoSun" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
     <a href="mailto:?subject=Where Hickenlooper and Romanoff stand on key issues&body=Before you cast your primary ballot, see where the Senate candidates stand on key issues with this tool created by The Colorado Sun: http://projects.coloradosun.com/2020-colorado-senate-primary-hickenlooper-romanoff-issues/" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
     <a href="http://reddit.com/submit?url=http%3A%2F%2Fprojects.coloradosun.com%2F2020-colorado-senate-primary-hickenlooper-romanoff-issues%2F&title=Colorado%20Senate%20primary%3A%20Where%20Hickenlooper%2C%20Romanoff%20stand%20on%20key%20issues" rel="noopener noreferrer"><FontAwesomeIcon icon={faReddit} size="lg"/></a>
     </li>
   </ul>
 </nav>

    </div>
  </div>
);



export default Share;

