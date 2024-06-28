import adLogo from './assets/adlogo.png'

const AdWindow = () => {
    return (
        <div className="adOuter flex">
        <div className="adInner flex">
            <div className="adLogo">
                <img src={adLogo} alt="brand-logo"/>
            </div>
            <div className="adText">
                <p>Get NOTICED! 100x better than competition, Advertise Today</p>
            </div>
            <div className="adPromo">
                <p>Promotion</p>
            </div>
        </div>
    </div>
    );
}

export default AdWindow;