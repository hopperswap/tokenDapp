import React, { Component, Fragment, useState, useContext, useCallback, useEffect } from "react";
import { Row } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./css/style.css";
import "../../assets/scss/index.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { isMobile } from 'react-device-detect';

import useActiveWeb3React from '../../widgets/useActiveWeb3React'

import useAuth from "../../widgets/useAuth";

import { useDispatch, useSelector } from 'react-redux';

// Components
import SectionHeader from "./Component/SectionHeader";
import SectionAbout from "./Component/SectionAbout";
import SectionMission from "./Component/SectionMission";
import SectionExchange from "./Component/SectionExchange";
import SectionTeamwork from "./Component/SectionTeamwork";
import SectionNews from "./Component/SectionNews";
import SectionHelp from "./Component/SectionHelp";
import SectionFooter from "./Component/SectionFooter";
// import SectionRoadmap from "./Component/SectionRoadmap/index";
import SectionRoadmapV2 from "./Component/SectionRoadmapV2";
import SectionTokenomic from "./Component/SectionTokenomic";
import SectionTokenomicV2 from "./Component/SectionTokenomicV2";
import SectionPresale from "./Component/SectionPresale";
import SectionCrosswiseFeature from "./Component/SectionCrosswiseFeatures";
import SectionPresaleBottom from "./Component/SectionPresaleBottom";
import SectionFees from "./Component/SectionFees";
import SectionPartner from "./Component/SectionPartner";

import ConnectModal from "../../widgets/WalletModal/ConnectModal";
import { setAddress, setNetworkId } from '../../redux/actions';
import useEagerConnect from "../../widgets/useEagerConnect";

const Home = () => {
  useEagerConnect();

  const address = useSelector(state => state.authUser.address)

  const dispatch = useDispatch();
  const [showPresaleInfo, setShowPresaleInfo] = useState(false)
  const [wallletOpen, setWallletOpen] = useState(false)

  const { account, chainId } = useActiveWeb3React()

  const { login, logout } = useAuth()

  const minimum = (address) => {
    const temp = String(address);
    return temp.slice(0, 4) + '...' + temp.slice(39, 42);
  }

  const { isDark, toggleTheme } = useContext(ThemeContext)

  const handleLogout = () => {
    logout();
    setShowPresaleInfo(false);
    showHome()
  }
  const showPresale = () => setShowPresaleInfo(true)
  const showHome = () => setShowPresaleInfo(false)

  const onConnectHandle = () => {
    setWallletOpen(true);
  }

  const toogleToolbar = () => {
    setShowPresaleInfo(false)
    showHome()
  }

  useEffect(() => {
    if (account) {
      dispatch(setAddress(account))
    }
  }, [account])

  useEffect(() => {
    if (chainId) {
      dispatch(setNetworkId(chainId))
    }
  }, [chainId])

  useEffect(() => {
    document.body.addEventListener('click', () => {
      if (window.innerHeight > window.innerWidth && document.querySelector('.collapsibleNavbar').getAttribute('aria-expanded') === 'true') {
        document.querySelector('.collapsibleNavbar').click();
      }
    })
  }, [])

  return (
    <Fragment>
      <ConnectModal login={login} wallletOpen={wallletOpen} setWallletOpen={setWallletOpen} setShowPresaleInfo={setShowPresaleInfo} />
      <div className={isDark ? 'main_body' : 'main_body light-theme'}>
        <header className="nav_wrapper">
          {/** nav header starts */}
          <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top shadow-sm crosswise-nav">
            {/* <!-- Brand --> */}
            <div className="container">
              <a className="navbar-brand header-navbar-brand" href="/">
                {

                  isDark ? (<img src="assets/images/logo@3x.png" className="nav_logo" id="crosswise_logo" />) :
                    <img src="assets/images/logo-light-theme-2.png" className="nav_logo" id="crosswise_logo" />
                }
              </a>
              {address === null ?
                (<a className="nav-link btn btn_signIN btn_primary mobile-btn" onClick={onConnectHandle}>Connect</a>
                ) : (
                  <>
                    {showPresaleInfo ? <a className="nav-link btn btn_signIN btn_primary mobile-btn" onClick={handleLogout}>
                      Logout
                    </a> : (
                      <button onClick={showPresale} className="btn btn_primary buy-token-button btn_signIN mobile-btn">Buy Tokens</button>
                    )}
                  </>
                )}
              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler collapsibleNavbar" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
              </button>

              {/* <!-- Navbar links --> */}
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
  

                  {
                    address === null ?
                      (<li className="nav-item">
                        <a className="nav-link btn btn_signIN btn_primary" onClick={onConnectHandle}>Connect</a>
                      </li>
                      ) : (
                        <>
                          <li className="nav-item">
                            <div className="nav-link connected-wallet m-auto">
                              <span>{minimum(address)}</span>
                            </div>
                          </li>
                          {
                            <li className="nav-item">
                              <a className="nav-link btn btn_signIN btn_primary" onClick={handleLogout}>
                                Logout
                              </a>
                            </li>
                          }

                          <li className="nav-item">
                            {/* <ModalBuyTokens buttonLabel="Buy Tokens" className={isDark ? "dark-theme" : "light-theme"}></ModalBuyTokens> */}
                            {showPresaleInfo ? <></> : (
                              <button onClick={showPresale} className="btn btn_primary buy-token-button btn_signIN">Buy Tokens</button>
                            )}
                          </li>
                        </>
                      )
                  }
                </ul>
              </div>
            </div>
          </nav>
        </header>
       
      </div>
    </Fragment>
  );
}

export default Home;