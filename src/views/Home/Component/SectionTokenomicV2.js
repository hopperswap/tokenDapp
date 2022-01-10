import React, { Component, Fragment, useState, useContext } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import crss from '../../../assets/images/crosswise/CRSS-b.png';
import xcrss from '../../../assets/images/crosswise/XCRSS.png';
import gradientCircle from '../../../assets/images/crosswise/ellipse.png';
import crssAvatarImg from '../../../assets/images/crosswise/tokenomic-img-v1.png';
import xcrssAvatarImg from '../../../assets/images/crosswise/tokenomic-img-v2.png';

const SectionTokenomicV2 = (props) => {

  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <section className="tokenomic_section" id="tokenomic">
      <Container>
        <Row>
          <div className="title">
            <h1>Tokenomics</h1>
          </div>
        </Row>
        <div className="tokenomic_content">
          <div className="tokenomic_block pb-5">
            <div className="token_avata_wrap">
              <img src={crss} className="tokenMainImg" />
              <img src={crssAvatarImg} className="tokenAvatar" />
              <div className="tokenName">
                <img src={gradientCircle} />
                <div className="desc">CRSS</div>
              </div>
            </div>
            <div className="token_desc pb-5">
              <div className="max_supply pb-5">
                <h5 className="topic">Maximum Supply</h5>
                <div className="content">
                  <h6>50,000,000 <b className="textBlue">CRSS</b></h6>
                </div>
              </div>
              <div className="emission_rate pb-5">
                <h5 className="topic">Emission Rate</h5>
                <div className="content">
                  <h6>first 14 days <b className="textBlue">1.2</b></h6>
                </div>
                <div className="content">
                  <h6>after 14 days <b className="textBlue">1</b></h6>
                </div>
              </div>
              <div className="teamToken">
                <h5>No VC or Team Tokens</h5>
                <h6>share of emission going to team wallet <b className="textBlue">8%</b></h6>
              </div>

            </div>
          </div>

          <div className="tokenomic_block pb-5">
            <div className="token_avata_wrap">
              <img src={xcrss} className="tokenMainImg" />
              <img src={xcrssAvatarImg} className="tokenAvatar" />
              <div className="tokenName">
                <img src={gradientCircle} />
                <div className="desc">XCRSS</div>
              </div>
            </div>
            <div className="token_desc pb-5">
              <div className="desc pb-5">
                <h5>Pre-Sale Tokens</h5>
                <h6>maximum amount for sale <b className="textBlue">3M</b> or <b className="textBlue">6%</b></h6>
              </div>
              <div className="desc pb-5">
                <h5>Rewards Vesting</h5>
                <h6><b className="textBlue">50%</b> of rewards distributed in farms and pools are paid out in XCRSS token, which is linearly vested into CRSS within 5 months, with <b className="textBlue">20%</b> unlocked every 30 days.</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTokenomicV2;