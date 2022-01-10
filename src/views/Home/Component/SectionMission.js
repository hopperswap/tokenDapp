import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img1 from '../../../assets/images/crosswise/image-1.png';
import Icon1 from '../../../assets/images/crosswise/feature/img_advanced_exchange.png';
import Icon2 from '../../../assets/images/crosswise/feature/img_interoperable_swap_exchange.png';
import Icon3 from '../../../assets/images/crosswise/feature/img_order_books.png';
import Icon4 from '../../../assets/images/crosswise/feature/img_analytics.png';
import Icon5 from '../../../assets/images/crosswise/feature/img_price_chart.png';
import Icon6 from '../../../assets/images/crosswise/feature/img_account_stats.png';
import Icon7 from '../../../assets/images/crosswise/feature/img_referral_affiliate_commissions.png';

import Lan1 from '../../../assets/images/crosswise/launchpad/launchpad_project.png';
import Lan2 from '../../../assets/images/crosswise/launchpad/launchpad-token_pool.png';
import Lan3 from '../../../assets/images/crosswise/launchpad/launchpad-token_area.png';
import Lan4 from '../../../assets/images/crosswise/launchpad/launchpad-development.png';

import Dex1 from '../../../assets/images/crosswise/dex/img_tokens_crss_xcrss.png';
import Dex2 from '../../../assets/images/crosswise/dex/img_emissions.png';
import Dex3 from '../../../assets/images/crosswise/dex/img_gasless_mode.png';
import Dex4 from '../../../assets/images/crosswise/dex/img_voting_options.png';
import Dex5 from '../../../assets/images/crosswise/dex/img_subgraph_graph.png';
import Dex6 from '../../../assets/images/crosswise/dex/img_dex_mech.png';
import Dex7 from '../../../assets/images/crosswise/dex/dex-mech-04.png';
import Dex8 from '../../../assets/images/crosswise/dex/dex-mech_1.png';
import Dex9 from '../../../assets/images/crosswise/dex/dex-mech-02.png';

import pointerImg from '../../../assets/images/crosswise/pointer.png';

const SectionMission = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section">
            <Container>
                <Row>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img1} />
                        </div>
                        <div className="item_content">
                            <h1>Why Crosswise?</h1>
                            <p>DeFi is relatively new and packed with untapped utility. Crosswise is extending DEX functionality, tightening security and vetting, adding trading and portfolio tracking tools, as well as bringing back customers support, to enhance the overall DEX experience. Our native CRSS token has been carefully designed with sustainability in mind, benefitting from ample deflationary mechanisms to ensure price stability.</p>
                        </div>
                    </div>

                   <div className="platform_features">
                    <div className="title">
                        <h1>Platform Features</h1>
                    </div>
                    {/* <div className="" data-title="Hypertext Markup Language">HTML</div> */}
                    <div className="feature_item_group">
                        <div className="feature_item ">
                            <div className="feature_item_icon tooltip expand" data-title="A seamless way of swapping tokens. Swap Exchange uses automated liquidity pools to execute your swap in an instant.">
                              <img src={Icon1} />
                              
                            </div>
                            <div className="desc">
                             <h6>Interoperable Swap Exchange</h6>
                            </div>
                            <img src={pointerImg} className="vert-move" />
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Advanced exchange functions arm you with tools to set and manage limit orders, executing swaps at specific price levels, to optimize your trading strategy.">
                              <img src={Icon2} />
                            </div>
                            <div className="desc">
                             <h6>Advanced Exchange</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Track all your trades using the orderbook. Here you will find all your past and pending trades for both Quick Swap & Advanced Swap orders.">
                              <img src={Icon3} />
                            </div>
                            <div className="desc">
                             <h6>Order Book</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Keep track of global as well as personal data using the analytics dashboard. Trade volume, liquidity, historical value of your LP  for your favorite tokens can be found here.">
                              <img src={Icon4} />
                            </div>
                            <div className="desc">
                             <h6>Analytics</h6>
                            </div>
                        </div>
                    
                
                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Crosswise uses it's own price charts. Get accurate live price data for all tokens traded on crosswise DEX.">
                          <img src={Icon5} />
                        </div>
                        <div className="desc">
                          <h6>Price Chart</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Dive deeper into the numbers that matter. Personal account statistics allow you to track your assets and see their historical evolution. Much like a portfolio tracker, it provides an overview of assets in your wallet, as well as assets held in our pools and farms.">
                          <img src={Icon6} />
                        </div>
                        <div className="desc">
                          <h6>Account Statistics</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Tell your friends about crosswise and earn 1% of the new users' lifetime earnings! A unique link will be given to all users to track their commissions.">
                          <img src={Icon7} />
                        </div>
                        <div className="desc">
                          <h6>Lifetime Referral Commissions</h6>
                        </div>
                    </div>
                    </div>
                    
                   </div>

                   <div className="launchpad_features">
                    <div className="title">
                        <h1>Launchpad</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan1} />
                            </div>
                            <div className="desc">
                             <h6>Verified Projects Launchpad</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan2} />
                            </div>
                            <div className="desc">
                             <h6>Native & Cross-Chain Token Pools</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan3} />
                            </div>
                            <div className="desc">
                             <h6>Token Owners Area</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan4} />
                            </div>
                            <div className="desc">
                             <h6>Incubation Program for Ecosystem Growth & Development</h6>
                            </div>
                        </div>
                    </div>
                   </div>

                  <div className="dex_mechanics">
                    <div className="title">
                        <h1>Dex Mechanics</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="CRSS is our native token used for both rewards and governance, whilst XCRSS is our vesting token.
">
                              <img src={Dex1} />
                            </div>
                            <div className="desc">
                             <h6>CRSS & XCRSS Tokens</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise uses a constant emission of 1 CRSS per block, and is capped to a max supply 50 million CRSS.">
                              <img src={Dex2} />
                            </div>
                            <div className="desc">
                             <h6>Emissions</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Gasless Swap mode allows users to trade without having to pay for gas. Trade with confidence without worrying about transaction fees.">
                              <img src={Dex3} />
                            </div>
                            <div className="desc">
                             <h6>Gasless Mode</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Your opinions matter. Add proposals and vote on protocol changes. We're building this DEX with our community!">
                              <img src={Dex4} />
                            </div>
                            <div className="desc">
                             <h6>Governance & Voting</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Flawless indexing and up to date data. Our subgraph is powered by The Graph to query networks like Ethereum & IPFS. Our open subgraph API makes our data easily accessible.">
                              <img src={Dex5} />
                            </div>
                            <div className="desc">
                             <h6>The Graph Subgraph</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="We're partnering with Chainlink and have implemented their price oracle to avoid flash loan attacks and any other price manipulation on crosswise.">
                              <img src={Dex6} />
                            </div>
                            <div className="desc">
                             <h6>Chainlink Price Oracle</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="CRSS token has anti-whale protection that limits transaction size as a proportion of total supply. Projects listing on crosswise also have the option to enable anti-whale protection for their tokens.">
                              <img src={Dex7} />
                            </div>
                            <div className="desc">
                             <h6>Anti-Whale Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise uses virtual rates provided by the Chainlink price oracle, making front-running unprofitable. We also use a transaction limiter that is able to throttle bot activity.">
                              <img src={Dex8} />
                            </div>
                            <div className="desc">
                             <h6>Anti-Bot Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise will offer generous farming rewards from the start, with a 1.2 multiplier for the first 2 weeks.">
                              <img src={Dex9} />
                            </div>
                            <div className="desc">
                             <h6>Farms & Pools Upon Launch</h6>
                            </div>
                        </div>
                    </div>
                   </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionMission;