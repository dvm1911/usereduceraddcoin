import coinGecko from './coingecko__78343 1.png'
import coinswapLogo from './DNZDqtH2_400x400 1.png'
import pancakeLogo from './Home _ PancakeSwap - $13.450-1 1.png'
import poocoinLogo from './poocoin512 2.png'

import instagramLogo from './instagram-fill (1) 2.png'
import youtubeLogo from './Vector.png'
import redditLogo from './reddit-fill 2.png'
import telegramLogo from './telegram-fill 2.png'
import twitterLogo from './twitter-fill (1) 5.png'
import addImgLogo from './Plus.png'
import webLogo from './Group 599.png'


import AddCoinAlert from '../alerts/addCoinAlert/addCoinAlert'


import axios from 'axios'
import { useReducer, useState } from 'react'
import { logoBannerDb } from '../firebaseConfig/firebaseConfig'
import { ref, uploadBytes } from 'firebase/storage'



const AddCoin = () => {

    const initialArgs = {
        coinName: '',

        coinAcro: '',

        coinAddressBSC: '',

        coinAddressETH: '',
        
        coinAddressTRC: '',

        coinMarketCap: '',

        coinPrice: '',

        coinLaunchDate: '',

        coinDescription: '',

        coinDescCounter: 0,

        coinLogoInpRef: {},
        imgLogoUrl: [],
        coinLogo: 'kar rha hu bhai',
        showLogoNameonUpload: false,
        errNoCoinNameL: false,

        coinBannerInpRef: {},
        imgBannerUrl: [],
        coinBanner: 'kar rha hu bhai',
        errNoCoinNameB: false,
        showBannerNameonUpload: false,

        coinVote: 0,
        isReviewed: false,
        isActive: true,
        isPromoted: false,

        coinTwitter: '',
        
        coinInstagram: '',

        coinReddit: '',

        coinTelegram: '', 
        
        coinWebsite: '',

        coinYoutube: '',

        onPanCakeSwap: false,
        txtColorPanCakeSwap: "#6B5DCC",
        btnColorPanCakeSwap: "#303343", 
        
        onPooCoin: false,
        txtColorPooCoin: "#6B5DCC",
        btnColorPooCoin: "#303343",
        
        onBoggedFinance: false,
        txtColorBoggedFinance: "#6B5DCC",
        btnColorBoggedFinance: "#303343",
        
        onCoingecko: false,
        txtColorCoinGecko: "#6B5DCC",
        btnColorCoinGecko: "#303343",

        
}

    const reducerFunc = ( state, action ) => {
        switch (action.type) {
            case "coinNameInp":
                return {
                    ...state,
                    coinName: action.payload
                }
            case "coinAcroInp": 
                return {
                    ...state,
                    coinAcro: action.payload
                }
            case "coinAddressBSCInp": 
                return {
                    ...state,
                    coinAddressBSCInp: action.payload
                }
            case "coinAddressETHInp": 
                return {
                    ...state,
                    coinAddressETH: action.payload
                }
            case "coinAddressTRCInp": 
                return {
                    ...state,
                    coinAddressTRC: action.payload
                }
            case "coinMarketCapInp": 
                return {
                    ...state,
                    coinMarketCap: action.payload
                }
            case "coinPriceInp": 
                return {
                    ...state,
                    coinPrice: action.payload
                }
            case "coinLaunchDateInp": 
                return {
                    ...state,
                    coinLaunchDate: action.payload
                }

            case "coinDescCounterInp":
                return {
                    ...state,
                    coinDescription: action.payload,
                    coinDescCounter: action.payload.length
                }

            case "onLogoUpload":
                return {
                    ...state,
                    coinLogoInpRef: action.payload,
                    showLogoNameonUpload: true

                }
            case "saveLogo":
                const logoRef = ref(logoBannerDb, `coins/${addState.coinName}/logo`)
                uploadBytes(logoRef, addState.coinLogoInpRef);
                return

            case "saveLogoFailure":
                return {
                    ...state,
                    errNoCoinNameL: true
                }

            
            case "onBannerUpload":
                return {
                    ...state,
                    coinBannerInpRef: action.payload,
                    showBannerNameonUpload: true
                }
                    
            case "saveBanner":
                const bannerRef = ref(logoBannerDb, `coins/${addState.coinName}/banner`);
                uploadBytes(bannerRef, addState.coinBannerInpRef);
                return
    
            case "saveBannerFailure":
                return {
                    ...state,
                    errNoCoinNameB: true
                }
            
            case "coinTwitterInp": 
                return {
                    ...state,
                    coinTwitter: action.payload
                } 
            
            case "coinInstagramInp": 
                return {
                    ...state,
                    coinInstagram: action.payload
                } 
                
            case "coinRedditInp": 
                return {
                    ...state,
                    coinReddit: action.payload
                } 

            case "coinTelegramInp": 
                return {
                    ...state,
                    coinTelegram: action.payload
                } 
                
            case "coinWebsiteInp": 
                return {
                    ...state,
                    coinWebsite: action.payload
                }

            case "coinYoutubeInp": 
                return {
                    ...state,
                    coinYoutube: action.payload
                }

            case "handleBtnCoinGeckoTrue":
                    return {
                        ...state,
                        txtColorCoinGecko: "#D7D7D7",
                        btnColorCoinGecko: "#6B5DCC",
                        onCoingecko: true,

                    }
            
            case "handleBtnCoinGeckoFalse":
                return{
                    ...state,
                    txtColorCoinGecko: "#6B5DCC",
                    btnColorCoinGecko: "#303343",
                    onCoingecko: false,
                }

            case "handleBtnBoggedFinanceTrue":
                return{
                    ...state,
                    txtColorBoggedFinance: "#D7D7D7",
                    btnColorBoggedFinance: "#6B5DCC",
                    onBoggedFinance: true,

                }

            case "handleBtnBoggedFinanceFalse":
                return{
                    ...state,
                    txtColorBoggedFinance: "#6B5DCC",
                    btnColorBoggedFinance: "#303343",
                    onBoggedFinance: false,
    
                }

            case "handleBtnPanCakeSwapTrue":
                return{
                    ...state,
                        txtColorPanCakeSwap: "#D7D7D7", 
                        btnColorPanCakeSwap: "#6B5DCC",
                        onPanCakeSwap: true, 
                    }
                
            case "handleBtnPanCakeSwapFalse":
                return{
                    ...state,
                        txtColorPanCakeSwap: "#6B5DCC",
                        btnColorPanCakeSwap: "#303343",
                        onPanCakeSwap: false, 
                }
              
            case "handleBtnPooCoinTrue":
                    return {
                        ...state,
                        txtColorPooCoin: "#D7D7D7",
                        btnColorPooCoin: "#6B5DCC",
                        onPooCoin: true
                    }
            
            case "handleBtnPooCoinFalse":
                    return {
                         ...state,
                        txtColorPooCoin: "#6B5DCC",
                        btnColorPooCoin: "#303343",
                        onPooCoin: false
                    }

            
            case "coinSubmit":
                
                return{
                    ...state,
                    initialArgs
                }

            default:
                return state
        }
    }


    const [ addState, addStateDispatch ] = useReducer( reducerFunc, initialArgs)


    const saveLogo = (e) => {
        e.preventDefault();
        if(addState.coinName){
            addStateDispatch(
                {type: "saveLogo"}
            )
        } else {
            addStateDispatch(
                {type: "saveLogoFailure"}
            )
        }
    }

    const saveBanner = (e) => {
        e.preventDefault();
        if(addState.coinName){
            addStateDispatch(
                {type: "saveBanner"}
            )
        } else {
            addStateDispatch(
                {type: "saveBannerFailure"}
            )
        }
    }
   
        const handleCoinGecko = (e) => {
            e.preventDefault();
            if( addState.btnColorCoinGecko === "#303343" && addState.onCoingecko === false ){
                addStateDispatch({ type: "handleBtnCoinGeckoTrue"})
            } else {
                addStateDispatch({ type: "handleBtnCoinGeckoFalse"})

            }
        } 


      const handleBtnPanCakeSwap = (e) => {
        e.preventDefault();
        if( addState.btnColorPanCakeSwap === "#303343" && addState.onPanCakeSwap === false ){
            addStateDispatch({ type: "handleBtnPanCakeSwapTrue"})
        } else {
            addStateDispatch({ type: "handleBtnPanCakeSwapFalse"})

        }    
      };

      const handleBtnBoggedFinance = (e) => {
        e.preventDefault();
        if(addState.btnColorBoggedFinance === "#303343" && addState.onBoggedFinance === false){
            addStateDispatch(
                {type: "handleBtnBoggedFinanceTrue"})
        } else {
            addStateDispatch(
                {type: "handleBtnBoggedFinanceFalse"})
        }           
      };

      const handleBtnPooCoin = (e) => {
        e.preventDefault();
        if(addState.btnColorPooCoin === "#303343" && addState.onPooCoin === false){
            addStateDispatch(
                {type: "handleBtnPooCoinTrue"})
        } else {
            addStateDispatch(
                {type: "handleBtnPooCoinFalse"})
        }         
      };


       console.log(addState)
    const [errMsg, seterrMsg] =useState(false);
    const [errcoinName, seterrcoinName] =useState(false);
    const [errcoinAcro, seterrcoinAcro] =useState(false);
    const [errcoinLogo, seterrcoinLogo] =useState(false);
    const [showPopUp, setshowPopUp ] = useState(false);

    const onClickPost = async (e) => {
        e.preventDefault();
            try{

               
                await axios.post("https://coinscore-cc-backend.onrender.com/api/collections/coins/add", addState);
                setshowPopUp(true)
            }
            catch(err)
            {
               
                console.log(`Couldn't add coin ${err}`);
                if(addState.coinName.length === 0){
                    seterrcoinName(true);
                }else{
                    seterrcoinName(false);
                }

                if(addState.coinAcro.length === 0){
                    seterrcoinAcro(true);
                }else{
                    seterrcoinAcro(false);
                }

                if(addState.coinLogoInpRef === undefined){
                    seterrcoinLogo(true);
                }else{
                    seterrcoinLogo(false);
                }
                
                seterrMsg(true);
            }       

    }

   
    const closePopUp = () => {
        if(showPopUp){
            setshowPopUp(false);
        }
    }
    

    return(
        <div onClick={closePopUp}  className='flex flex-col items-center justify-center'>
         
                        <div className="contentOuter flex flex-col px-8 py-8 shadow-md">
                    <div>
                        <h2 className="primaryColorW font-semibold text-3xl">Add your coin</h2>
                        <p className="text-justify primaryColorW font-light tracking-wide text-lg">Fill this quick form, and our team will contact you shortly</p>
                    </div>
                    <div className="addCoinBody">
                        <form className="flex flex-col">

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinName">Coin Name</label>
                            {errcoinName && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={addState.coinName} onChange={(e) => {addStateDispatch({ type: "coinNameInp", payload: e.target.value})}} className ="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinName" placeholder="enter your coin name" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinAcro">Coin Acronym</label>
                            {errcoinAcro && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={addState.coinAcro} onChange={(e) => {addStateDispatch({ type: "coinAcroInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinAcro" placeholder="enter your coin acronym" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinBSC">Address BSC</label>
                            <input value={addState.coinAddressBSC} onChange={(e) => {addStateDispatch({ type: "coinAddressBSCInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinBSC" placeholder="enter your coin BSC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinETH">Address ETH</label>
                            <input value={addState.coinAddressETH} onChange={(e) => {addStateDispatch({ type: "coinAddressETHInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinETH" placeholder="enter your coin ETH adddress"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinTRC">Address TRC</label>
                            <input value={addState.coinAddressTRC} onChange={(e) => {addStateDispatch({ type: "coinAddressTRCInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinTRC" placeholder="enter your coin TRC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="addCoinMC">Market Cap</label>
                            <input value={addState.coinMarketCap} onChange={(e) => {addStateDispatch({ type: "coinMarketCapInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="addCoinMC" placeholder="What's your coin Market Cap"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinPrice">Price</label>
                            <input value={addState.coinPrice} onChange={(e) => {addStateDispatch({ type: "coinPriceInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinPrice" placeholder="what's the price of your coin"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinLaunch">Launch Date</label>
                            <input value={addState.coinLaunchDate} onChange={ (e) => {addStateDispatch({ type: "coinLaunchDateInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 w-135 rounded-xl inputFieldColor primaryColorW pl-2.5" type="date" id="coinLaunch" placeholder="enter your coin name"/>

                            <div className="flex flex-col">
                                <label className="text-justify  primaryColorW font-light tracking-wide text-lg" name="coinDescription">Description</label>
                                <textarea maxLength="1800" value={addState.coinDescription} onInput ={(e) => {addStateDispatch({ type: "coinDescCounterInp", payload: e.target.value})}} id="coinDescription" className="h-64 p-1 rounded-xl rounded-b-none inputFieldColor primaryColorW pl-2.5" placeholder="1800 chars (max)"></textarea>
                                <div className="flex justify-end p-1 w-135 rounded-xl border-1 border-t-0 inputFieldColor primaryColorP pl-2.5 mb-6 rounded-t-none primaryColorP font-normal text-xs tracking-wide">
                                    <p>{addState.coinDescCounter}/1800</p>
                                </div>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinLogo">Logo</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 512 * 512 px or an image with dimesions in 1:1 ratio.</p>
                            {errcoinLogo && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <div className="flex m-8 justify-center">
                                <div className="flex-col items-center justify-center w-64 h-64 rounded-xl flex inputFieldColor primaryColorW pl-2.5">
                                    <div className="addCoinLogoUpload">
                                        <input onChange={(e) => {addStateDispatch({ type: "onLogoUpload", payload: e.target.files[0]})}} className="h-64 w-64 opacity-0 absolute flex" id="addCoinLogo" type="file" accept="image/*" required/>
                                        <img className="w-6 h-6" src={addImgLogo} alt="addFileLogo"/>
                                    </div>
                                    { addState.showLogoNameonUpload ? <p className='primaryColorW'>{addState.coinLogoInpRef.name}</p> : <div>
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }              
                                </div>
                            </div>
                            {addState.errNoCoinNameL && <p className = "text-xs font-normal text-justify text-red-600">*Please Enter Coin Name prior and try again.</p>}
                            <button onClick={(e) => {addStateDispatch({ type: "saveLogo"})}} className='primaryColorW rounded-xl btnBgColor h-11 w-56 text-lg font-bold border border-slate-50 m-2'> Save Logo </button>
                            

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinBanner">Banner</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 1920*1080 px (lanscape).</p>
                            <div className="flex-col items-center justify-center rounded-xl inputFieldColor  my-7 h-60  flex">
                                <div className="addCoinBannerUpload">
                                    <input onChange={saveLogo} className="h-64 w-64 opacity-0 absolute flex" id="addCoinBanner" type="file" accept="image/*"/>
                                    <img className="w-6 h-6" src={addImgLogo} alt="addFileBanner"/>
                                </div>
                                { addState.showBannerNameonUpload ? <p className='primaryColorW'>{addState.coinBannerInpRef.name}</p> : <div>
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }
                            </div>
                            {addState.errNoCoinNameB && <p className = "text-xs font-normal text-justify text-red-600">*Please Enter Coin Name prior and try again.</p>}
                            <button onClick={saveBanner} className='primaryColorW rounded-xl btnBgColor h-11 w-56 text-lg font-bold border border-slate-50 m-2'> Save Banner </button>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg " name="addCoinSocial">Your socials</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">attach link to your coin account socials</span>

                            <div className="my-4 flex items-center">
                                <img className="w-7 h-7 mx-4" src={twitterLogo} alt="twitter logo"/>
                                <input value={addState.coinTwitter} onChange={(e) => {addStateDispatch({ type: "coinTwitterInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTwitter" placeholder="your twitter social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={instagramLogo} alt="instagram logo"/>
                                <input value={addState.coinInstagram} onChange={(e) => {addStateDispatch({ type: "coinInstagramInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialInstagram" placeholder="your instagram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={redditLogo} alt="reddit logo"/>
                                <input value={addState.coinReddit} onChange={(e) => {addStateDispatch({ type: "coinRedditInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialReddit" placeholder="your reddit social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={telegramLogo} alt="telegram logo"/>
                                <input value={addState.coinTelegram} onChange={(e) => {addStateDispatch({ type: "coinTelegramInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTelegram" placeholder="your telegram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-6 h-6 mx-5" src={webLogo} alt="website logo"/>
                                <input value={addState.coinWebsite} onChange={(e) => {addStateDispatch({ type: "coinWebsiteInp", payload: e.target.value})}}  className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialWebsite" placeholder="your website"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-6 mx-5" src={youtubeLogo} alt="youtube logo"/>
                                <input value={addState.coinYoutube} onChange={(e) => {addStateDispatch({ type: "coinYoutubeInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialYoutube" placeholder="your youtube channle"/>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinListing">Listings</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">Please select all platforms where your coin is listed</span>

                                <div className="flex">
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleCoinGecko} style={{ backgroundColor: addState.btnColorCoinGecko, color: addState.txtColorCoinGecko }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingCoinGecko">
                                            <img className="mr-2.5 w-6 h-6" src={coinGecko} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">coingecko</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPanCakeSwap} style={{ backgroundColor: addState.btnColorPanCakeSwap, color: addState.txtColorPanCakeSwap }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPancakeSwap">
                                            <img className="mr-2.5 w-6 h-6" src={pancakeLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">pancakeswap</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnBoggedFinance} style={{ backgroundColor: addState.btnColorBoggedFinance, color: addState.txtColorBoggedFinance }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingBoggedFinance">
                                            <img className="mr-2.5 w-6 h-6" src={coinswapLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">bogged.finance</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPooCoin} style={{ backgroundColor: addState.btnColorPooCoin, color: addState.txtColorPooCoin }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPoocoin">
                                            <img className="mr-2.5 w-6 h-6" src={poocoinLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">poocoin</p>
                                        </button>
                                    </div>
                                </div>

                            <div className='self-end'>
                            <button onClick={onClickPost} className="primaryColorW rounded-xl btnBgColor h-11 w-64 text-lg font-bold border border-slate-50 m-2" >Submit Coin Info</button>
                            {errMsg && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            </div>    
                            
                        </form>

                        {showPopUp && <AddCoinAlert />}
                    </div>
                </div>

        </div>
    );
}

export default AddCoin;