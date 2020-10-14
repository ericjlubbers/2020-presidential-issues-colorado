import React from 'react';
import './style.scss';
import Helmet from './helmet';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCapsules, faFistRaised, faCannabis, faMountain, faGasPump, faLandmark, faWallet, faGraduationCap, faBeer, faHome, faUsers, faEnvelopeOpenText, faArrowCircleRight, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCapsules, faFistRaised, faLandmark, faCannabis, faMountain, faGasPump, faWallet, faGraduationCap, faBeer, faHome, faUsers, faEnvelopeOpenText, faArrowCircleRight, faClipboardCheck )

// import Header from './header';
// import Midsection from './midsection';
// import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		{children}
	</div>
);

export default Layout;
