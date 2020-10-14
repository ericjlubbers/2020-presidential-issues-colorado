import React from 'react';
import './style.scss';
import JohnMug from '../images/johnfrank.jpg';
// import { FaRegArrowAltCircleDown, FaInstagram, FaFacebookSquare, FaTwitter, FaRegEnvelope } from 'react-icons/fa';



const Byline = () => (
<div class="container">
    <hr className="thin" />
    <div class="columns is-centered">
        <div class="column is-10-desktop">
        <div class="columns is-multiline is-mobile">
                    <div class="column is-half-mobile is-one-third-tablet">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48 is-hidden-mobile is-hidden-tablet">
                                        <a href="https://coloradosun.com/author/evan-ochsner/"><img class="is-rounded" alt="John Frank" src="https://coloradosun.com/wp-content/uploads/sites/15/2020/06/Evan-Ochsner.jpg" /></a>
                                    </p>
                                    <p class="image is-24x24 is-block-mobile">
                                        <a href="https://coloradosun.com/author/evan-ochsner/"><img class="is-rounded" alt="John Frank" src="https://coloradosun.com/wp-content/uploads/sites/15/2020/06/Evan-Ochsner.jpg" /></a>
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <h4 class="byline title is-size-6 is-size-6-mobile">Evan Ochsner</h4>
                                        <p class="byline subtitle is-size-6 is-size-7-mobile"><a href="https://coloradosun.com/author/evan-ochsner/"><em>Reporter</em></a></p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column is-half-mobile is-one-third-tablet">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48 is-hidden-mobile is-hidden-tablet">
                                        <a href="https://coloradosun.com/author/john-frank/"><img class="is-rounded" alt="John Frank" src={JohnMug} /></a>
                                    </p>
                                    <p class="image is-24x24 is-block-mobile">
                                        <a href="https://coloradosun.com/author/john-frank/"><img class="is-rounded" alt="John Frank" src={JohnMug} /></a>
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <h4 class="byline title is-size-6 is-size-6-mobile">John Frank</h4>
                                        <p class="byline subtitle is-size-6 is-size-7-mobile"><a href="https://coloradosun.com/author/john-frank/"><em>Reporter</em></a></p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column is-half-mobile is-one-third-tablet">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48 is-hidden-mobile is-hidden-tablet">
                                        <a href="https://coloradosun.com/author/john-frank/"><img class="is-rounded" alt="John Frank" src="https://coloradosun.com/wp-content/uploads/sites/15/2018/07/5EBDA185-D9EC-48F1-BC04-08408D2225F1.jpg" /></a>
                                    </p>
                                    <p class="image is-24x24 is-block-mobile">
                                        <a href="https://coloradosun.com/author/john-frank/"><img class="is-rounded" alt="John Frank" src="https://coloradosun.com/wp-content/uploads/sites/15/2018/07/5EBDA185-D9EC-48F1-BC04-08408D2225F1.jpg" /></a>
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <h4 class="byline title is-size-6 is-size-6-mobile">Eric Lubbers</h4>
                                        <p class="byline subtitle is-size-6 is-size-7-mobile"><a href="https://twitter.com/brofax"><em>Designer</em></a></p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
        </div>
    </div>
                    
                    <hr className="thin" />
                </div>
                
       
)

export default Byline;