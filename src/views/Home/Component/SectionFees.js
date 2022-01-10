import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";


const SectionFees = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    
    return (
          <section className="fee_section">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Fees</h1>
                    </div>
                </Row>
               <div className="fee_classification">
                <div className="fee_item">
                  <div className="item_title">Quick Swap</div>
                  <div className="item_content">
                    <div className="sub_title">0.2%</div>
                    <div className="sub_desc">fee on every swap</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools and awarded to  liquidity providers</div>
                    <div className="sub_title">0.03%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Advanced Swap</div>
                  <div className="item_content">
                    <div className="sub_title">0.3%</div>
                    <div className="sub_desc">fee on every swap</div>
                    <div className="sub_title">0.17%</div>
                    <div className="sub_desc">Returned to liquidity pools and awarded to liquidity providers</div>
                    <div className="sub_title">0.13%</div>
                    <div className="sub_desc">to treasury</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Auto-Compound</div>
                  <div className="item_content">
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee on auto-compounded rewards</div>
                    <div className="sub_title">5%</div>
                    <div className="sub_desc">fee used to buy back and burn CRSS</div>
                    <div className="sub_desc">rewards are auto-compounded, we do our own yield optimization</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Transactions</div>
                  <div className="item_content">
                    <div className="sub_title">0.1%</div>
                    <div className="sub_desc">fee on all transactions</div>
                    <div className="sub_desc">Every time CRSS is transferred, whether for staking, creating LP or sending to another wallet, a <b className="textBlue">0.1%</b> transaction fee takes place.</div>
                    <div className="sub_desc">Of this <b className="textBlue">0.04%</b> goes to the development and marketing wallet, <b className="textBlue">0.03%</b> goes into liquidity, and <b className="textBlue">0.03%</b> is used to buy back and burn CRSS.</div>
                    <div className="sub_desc">This adds deflationary pressure and auto-liquidity for the CRSS token, further encouraging users to hold CRSS.</div>
                  </div>
                </div>
                <div className="fee_item">
                  <div className="item_title">Instant Rewards</div>
                  <div className="item_content">
                    <div className="sub_title">25%</div>
                    <div className="sub_desc">fee on instant rewards</div>
                    <div className="sub_desc">Farm and pool rewards are paid in <b className="textBlue">50%</b> CRSS and <b className="textBlue">50%</b> XCRSS, with XCRSS linearly vested within 5 months.</div>
                    <div className="sub_desc">If users prefer, they can choose to claim rewards instantly but will only receive <b className="textBlue">75%</b>, with <b className="textBlue">25%</b> being burned. </div>
                    <div className="sub_desc">This further reduces CRSS circulating supply and potential sell pressure.</div>
                  </div>
                </div>
               </div>
            
            </Container>
          </section>
        );
}

export default SectionFees;