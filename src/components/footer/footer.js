import coinScoreLogo from './assets/logo logo.png';
import twitterLogo from './assets/twitter-fill (1) 5.png';
import redditLogo from './assets/reddit-fill 2.png';
import telegramLogo from './assets/telegram-fill 2.png';
import instagramLogo from './assets/instagram-fill (1) 2.png';

const Footer = () => {
    return (
        <footer className="flex">
        <div className="footmain flex">
            <div className="foothero flex">
                <div className="brandLogo">
                    <img src={coinScoreLogo} alt="logo"/>
                </div>
                <div className="brandMark">
                    <h1>coinscore</h1>
                </div>
            </div>    
                <div className="brandText">
                    <p>Copyright © 2024 Coinscore - All rights reserved</p>
                </div>
        </div>    
                <div className="footerlist">
                    <ul className="flex footListTag">
                        <li><a href="/"><img className="footListImg" src={twitterLogo} alt="twitter-Logo"/></a></li>
                        <li><a href="/"><img className="footListImg" src={redditLogo} alt="reddit-logo"/></a></li>
                        <li><a href="/"><img className="footListImg" src={telegramLogo} alt="telegram-logo"/></a></li>
                        <li><a href="/"><img className="footListImg" src={instagramLogo} alt="instagram.logo"/></a></li>
                    </ul>
                </div>      
    </footer>
    );
}

export default Footer;