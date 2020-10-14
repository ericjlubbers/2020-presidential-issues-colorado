import React from 'react';
// import Bulma from '@vizuaalog/bulmajs';

import './style.scss';
import SunWide from '../images/colorado-sun-web-logo-white.png';
import { FaPaperPlane, FaVoteYea, FaGavel, FaEnvelopeOpenText, FaArrowCircleRight } from 'react-icons/fa';

const NavbarTop = () => (
	<div>
		<nav class="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://coloradosun.com">
      <img alt="Sun Logo" src={SunWide} />
    </a>
    <a class="navbar-item is-hidden-desktop" href="http://coloradosun.com/politics">
        More News&nbsp;&nbsp;<FaArrowCircleRight />
      </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
	<div class="navbar-item"><a class="button is-warning  is-size-6" href="http://coloradosun.com/join">
            <strong>Support local journalism</strong>
          </a></div>
      <div class="navbar-item has-dropdown is-hoverable">
		<a href="http://coloradosun.com/politics" class="is-light navbar-link is-size-6">
         More Colorado Politics News
        </a>

        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item is-size-6 " href="https://coloradosun.com/tag/colorado-legislature/">
		  <FaGavel/>&nbsp;&nbsp;Colorado Legislature
          </a>
          <a class="navbar-item is-size-6" href="https://coloradosun.com/tag/election-2020/">
            <FaVoteYea/>&nbsp;&nbsp;Election 2020
          </a>
          <a class="navbar-item is-size-6" href="http://coloradosun.com/unaffiliated">
		  <FaEnvelopeOpenText/>&nbsp;&nbsp;The Unaffiliated Newsletter
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
	  <div class="buttons">
          <a class="button is-light is-size-6" href="http://coloradosun.com/newsletters">
            <strong><FaPaperPlane/>&nbsp;&nbsp; Get a newsletter!</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>

);

export default NavbarTop;
