import React from 'react'
// import { FaTwitter, FaFacebookSquare, FaInstagram, FaArrowCircleRight } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby'
import SunWideLogo from '../images/sun-white-logo-400px.png';
import './style.scss';
// import Emoji from './emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-dark has-text-light'>
        <div class="columns is-centered">
          <div class="column is-one-third">
          <a href="http://coloradosun.com/"><img class="image is-level has-text-centered" alt="Colorado Sun Logo" src={SunWideLogo}/></a><br />
          <p class="has-text-centered"><a class="button is-warning" href="http://coloradosun.com/join">
            <strong>Become a member!</strong>
          </a></p>
          </div>
          <div class="column has-text-light is-one-third"> 
        <ul class="has-text-light footertext">
              <li><a href="https://coloradosun.com/about-us/" class="footertext">About Us</a></li>
              <li><a href="https://coloradosun.com/frequently-asked-questions/" class="footertext">FAQs</a></li>
              <li ><a href="https://coloradosun.com/about-sunlit/" class="footertext">SunLit</a></li>
              <li ><a href="https://coloradosun.com/ethics/" class="footertext">Ethics Policy</a></li>
              <li ><a href="https://coloradosun.com/members-sponsors/" class="footertext">Members &amp; Sponsors</a></li>
        </ul>
          </div>
            <div class="column is-narrow">
                <p class="has-text-light is-size-7">Copyright © 2020 The Colorado Sun</p>
            </div>
        </div>
      </footer>
    )}
  />
)

export default Footer