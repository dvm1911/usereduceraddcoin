import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import coinLogo from "./assets/Ellipse 14.png";
import copyLogo from "./assets/Paper Negative.png"
import upVoteArrow from './assets/Arrow - Right.png'
import infoCircle from './assets/Info Circle.png'
import twitterLogo from './assets/twitter-fill (1) 5.png'
import redditLogo from './assets/reddit-fill 2.png'
import telegramLogo from './assets/telegram-fill 2.png'
import pooCoinLogo from './assets/svgg.png'
import coinSwapLogo from './assets/Group 582.png'
import dangerSym from './assets/Danger.png'
import shareSym from './assets/Vector.png'

const CoinInfo = () => {

   const { id }= useParams();
    const [ coin, setCoin ] = useState();

    useEffect( () => {
        axios.get('https://coinscore-cc-backend.onrender.com/api/collections/coins/'+id)
        .then(data => setCoin(data.data))
        .catch(err => console.log(err))
      })
    
    console.log(coin)


    return (
        <div className="coinInfoOuter flex">
            <div className="coinInfoLogoName marginBtm flex">
                <div className="coinInfoLogo">
                    <img src={coinLogo} alt="coinInfoLogo"/>
                </div>
                <div className="coinInfoName">
                    <h2>ACoolToken</h2>
                </div>
            </div>
    
            <div className="coinInfoAcro marginBtm flex">
                <h3>ACT</h3>
            </div>
    
            <div className="BSCAddress marginBtm flex">
                <div className="coinInfoBSCAdd flex itmCenter">
                    <div className="coinInfoBSCAddTxt flex itmCenter">
                        <h4>BSC :</h4>
                    </div>
                    <div className="coinInfoBSCAddVal flex itmCenter">
                        <p>0x4AFc8c2Be6a0783ea16E16066fde140d15979296</p>
                    </div>
                </div>
                <div className="coinInfoBSCCopy">
                    <img src={copyLogo} alt=""/>
                </div>
            </div>
           
    
            <div className="coinAdditionalInfo marginBtm">
    
                <div className="coinInfoRateRank flex spaceBtwn marginBtm">
                    <div className="coinInfoRate">
                        <p>$0.0056</p>
                    </div>
                    <div className="coinInfoRank flex">
                        <p>001</p>
                    </div>
    
                </div>
    
                <div className="coinInfoVote flex spaceBtwn marginBtm">
                    <div className="coinInfoVoteTxt coinAdditionalInfoLV">
                        <p>Vote Now</p>
                    </div>
                    <div className="coinInfoVoteCounter flex">
                        <div className="voteNum">
                            <p>68</p>
                        </div>
                        <div className="upVote-sym flex">
                            <img id="upVote-arw" src={upVoteArrow} alt="upVote-arw"/>
                        </div>
                    </div>                
                </div>
    
                <div className="coinInfoMarketCap flex spaceBtwn marginBtm">
                    <div className="coinInfoMarketCapTxt flex coinAdditionalInfoLV">
                        <p>Market Cap</p>
                        <img src={infoCircle} alt="InfoCircle"/>
                    </div>
                    <div className="coinInfoMarketCapVal coinAdditionalInfoRV">
                        <p>$117,506,384</p>
                    </div>
    
                </div>
                <div className="coinInfoLaunch flex spaceBtwn marginBtm">
                    <div className="coinInfoLaunchTxt coinAdditionalInfoLV">
                        <p>Launch</p>
                    </div>
                    <div className="coinInfoLaunchDate coinAdditionalInfoRV">
                        <p>June 08, 2021</p>
                    </div>
                </div>
    
                <div className="coinInfoOwner flex spaceBtwn">
                    <div className="coinInfoOwnerTxt coinAdditionalInfoLV">
                        <p>Owner</p>
                    </div>
                    <div className="coinInfoOwnerName coinAdditionalInfoRV">
                        <p>Anonymous</p>
                    </div>
                </div>
            </div>
    
            <div className="coinInfoAbout marginBtm">
                <div className="coinInfoAboutTxt">
                    <p>About</p>
                </div>
                <div className="coinInfoAboutDescription">
                    <p>Welcome to the world of Hare Token~ The Details of the project are as follows?
                    <br/> 
                    HARE is launching in June 2021 and aiming to become one of the fastest growing cryptocurrencies of 2021. Here is the prelaunch information. Lets not missed this after DOGE success!
                    <br/> 
                    Total Supply 100,000,000,000,000,000,000,000
                    <br/> 
                    - 80% of the total supply will go into LP.
                    <br/> 
                    - 10% of the total supply into staking, locking up the assets to ensure integrity, security and continuity of the network.
                    <br/> 
                    - 5% will be air dropped to initial supporters and random wallet holders in the world of cryptocurrency.
                    <br/> 
                    - 5% of the total supply will be going into liquidity Staking Pool</p>
                </div>
                <div className="coinInfoAboutSocials flex">
                    <div className="coinInfoAboutTwitter">
                        <img src={twitterLogo} alt="TwitterLogo"/>
                    </div>
                    <div className="coinInfoAboutReddit">
                        <img src={redditLogo} alt="RedditLogo"/>
                    </div>
                    <div className="coinInfoAboutTelegram">
                        <img src={telegramLogo} alt="TelegramLogo"/>
                    </div>
                    <div className="coinInfoAboutPooCoin">
                        <img src={pooCoinLogo} alt="PooCoinLogo"/>
                    </div>
                    <div className="coinInfoAboutCoinSwap">
                        <img src={coinSwapLogo} alt="coinSwapLogo"/>
                    </div>
                </div>
            </div>
            <div className="coinInfoReportShare flex spaceBtwn">
                <div className="coinInfoReport">
                    <button className="coinInfoReportBtn flex">
                        <p>Report</p>
                        <img src={dangerSym} alt="coinInfoReport"/>
                    </button>
                </div>
                <div className="coinInfoShare">
                    <button className="coinInfoShareBtn flex">
                        <p>Share</p>
                        <img src={shareSym} alt="coinInfoShare"/>
                    </button>
                </div>
            </div>
        </div>
        );
    
}

export default CoinInfo;