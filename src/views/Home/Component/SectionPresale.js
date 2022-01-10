import React, { Component, Fragment, useState, useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Container, Tooltip } from 'reactstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import BigNumber from 'bignumber.js';
import useRefresh from '../../../redux/useRefresh'
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import "react-step-progress-bar/styles.css";
import { useForm } from "react-hook-form";
import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import Planet8 from '../../../assets/images/crosswise/planet-8.png';
import { web3 } from "../../../crosswise/web3";
import {
  getUserDetail,
  getAmountUnlocked,
  deposit,
  withdrawToken,
  checkAllowanceBusd,
  approveBusd,
  checkWhitelistMember
} from "../../../crosswise/token";

const SectionHeader = (props) => {
  const address = useSelector(state => state.authUser.address);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [copyText, setCopytext] = useState('Click to copy.');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fastRefresh } = useRefresh()
  const [amountToDeposit, setAmountToDeposit] = useState();

  const [totalRewardAmount, setTotalRewardAmount] = useState(new BigNumber(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BigNumber(0));
  const [depositTime, setDepositTime] = useState();
  const [depositAmount, setDepositAmount] = useState(new BigNumber(0));
  const [unlockedAmount, setUnlockedAmount] = useState(new BigNumber(0));
  const [crssAllowrance, setCrssAllowrance] = useState(web3.utils.toBN(0));

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  }

  useEffect(() => {
    loadUserDetail();
  }, [address, fastRefresh]);

  const loadUserDetail = useCallback(async () => {
    const result = await getUserDetail(address);
    const tokenAllowrance = await checkAllowanceBusd(address);
    // console.log("tokenAllowrance", tokenAllowrance.toString());
    setCrssAllowrance(tokenAllowrance);
    // console.log("tokenAllowrance ", tokenAllowrance);
    // console.log("tokenallowrance1", crssAllowrance.toString());

    setTotalRewardAmount(web3.utils.fromWei(web3.utils.toBN(result.totalRewardAmount)));
    setWithdrawAmount(web3.utils.fromWei(web3.utils.toBN(result.withdrawAmount)));
    setDepositTime(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(result.depositTime * 1000));
    // console.log(result.depositTime)
    setDepositAmount(web3.utils.fromWei(web3.utils.toBN(result.depositAmount)));
    // setCrssAllowrance(web3.utils.fromWei())
    const amountUnlocked = await getAmountUnlocked(address);
    setUnlockedAmount(web3.utils.fromWei(amountUnlocked));
  });

  const approveTokens = async () => {
    await approveBusd(address);
  }

  const buyTokens = async () => {
    const checkWhitelist = await checkWhitelistMember(address);
    if (!checkWhitelist) {
      alert("Before buying tokens, You must be added as a whitelist member. You can see 'Get Whitelisted' button at the header");
      return;
    }
    try {
      const result = await deposit(web3.utils.toWei(amountToDeposit), address);
    } catch (error) {
      console.log(error);
      alert('Transaction has been reverted by the EVM. Please take a look at broswer console and refresh page.');
    }
  }

  const claimToken = async () => {
    const result = await withdrawToken(unlockedAmount, address);
  }

  return (
    // <section className="header_section section-presale" style={isDark? {backgroundImage: 'url('+ backgroundCloud +')'}: {}}>

    <section className="header_section section-presale">
      <Tooltip placement="top" isOpen={tooltipOpen} target="address-tooltip" toggle={toggle}>
        {copyText}
      </Tooltip>

      <Container className="buy-token-container">
        <Row className="w-100">
          <div className="presale-wrap w-100 mt-3">
            <div className="presale-info">
              <h5 className="title"> Buy Tokens</h5>
              <p>Wallet address</p>
              <div className="wallet-address">
                <span>{address}</span>
              </div>
              <form onSubmit={(crssAllowrance > web3.utils.toBN(100)) ? handleSubmit(buyTokens) : handleSubmit(approveTokens)}>
                <p>Amount</p>
                <div className="input-group custom-address-section">
                  <input {...register('amount', { required: true, pattern: /\d+/ })} className="form-control buy-token-amount" value={amountToDeposit} onChange={event => setAmountToDeposit(event.target.value)} />
                  <div className="input-group-append">
                    <span className="input-group-text buy-token-currency">
                      <p>BUSD</p>
                      <img src="assets/images/busdsm.png" className="rounded-circle" style={{ width: "20px", height: "20px" }} />
                    </span>
                  </div>
                </div>
                {
                  crssAllowrance.toString() !== "0" ? (errors.amount && <p style={{ color: "red" }}>Please enter the amount of BUSD you wish to invest.</p>) :
                    (<p></p>)
                }

                <div className="buy-tokens">
                  {
                    crssAllowrance.toString() === "0" ? (<button className="btn btn_primary presale-btns" onClick={approveTokens}>
                      Approve Contract </button>) :
                      (
                        <button className="btn btn_primary buy-token-btn presale-btns" type="submit">
                          Buy Tokens
                        </button>
                      )
                  }

                </div>
              </form>
            </div>
            <div className="presale-info mobile">
              <h5 className="title">My Tokens</h5>
              <div className="presale_info">

                <div className="rectangle">
                  <p>Total Deposited</p>
                  <h6>{parseFloat(depositAmount.toString()).toFixed(2)} BUSD</h6>
                </div>
                <div className="rectangle">
                  <p>Total Received</p>
                  <h6>{parseFloat(totalRewardAmount.toString()).toFixed(2)} CRSS</h6>
                </div>

              </div>
              <div className="presale_info">
                <div className="rectangle">
                  <p>Unlocked Tokens</p>
                  <h6>{parseFloat(unlockedAmount.toString()).toFixed(2)} CRSS</h6>
                </div>
                <div className="rectangle">
                  <p>Total Withdrawn</p>
                  <h6>{parseFloat(withdrawAmount.toString()).toFixed(2)} CRSS</h6>
                </div>
              </div>

              {/* <div className="presale_info">
            <div className="rectangle">
                <p>Deposit Time</p>
                <h6>{depositTime}</h6>
              </div>
            </div> */}

              <div className="claim_section">
                <button className="btn btn_primary claim-button presale-btns" onClick={claimToken}>Withdraw Tokens</button>
              </div>
            </div>
          </div>
          <div className="presale-desc w-100">
            <p className="presale-sub-desc">
              All transactions are anonymous and secure. Tokens are vested within <b className="textBlue">5</b> months linearly, with <b className="textBlue">20%</b> unlocked every <b className="textBlue">30</b> days, starting from time of purchase. That means every <b className="textBlue">30</b> days, <b className="textBlue">20%</b> of that batch of tokens will be unlocked. Once unlocked, you can withdraw them to your wallet.Please add our token address to your wallet so that you see them in your assets when you withdraw them:
              <p className="presale-address mt-3">
                <CopyToClipboard
                  text={'0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1'}
                  id="address-tooltip"
                  onCopy={() => {
                    setCopytext('Copied');
                  }}
                  onMouseOut={() => {
                    setCopytext('Click to copy.');
                  }}
                >
                  <b className="textBlue">0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1</b>
                </CopyToClipboard>
              </p>
              We recommend leaving your tokens until we launch in December. At that point you can withdraw the unlocked balance and use it to farm or provide liquidity to earn more <b className="textBlue">CRSS</b>!
            </p>
          </div>
        </Row>
      </Container>
    </section >
  );
}

export default SectionHeader;