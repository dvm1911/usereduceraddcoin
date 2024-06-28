import coinGecko from './assets/coingecko__78343 1.png'
import coinswapLogo from './assets/DNZDqtH2_400x400 1.png'
import pancakeLogo from './assets/Home _ PancakeSwap - $13.450-1 1.png'
import poocoinLogo from './assets/poocoin512 2.png'

import instagramLogo from './assets/instagram-fill (1) 2.png'
import youtubeLogo from './assets/Vector.png'
import redditLogo from './assets/reddit-fill 2.png'
import telegramLogo from './assets/telegram-fill 2.png'
import twitterLogo from './assets/twitter-fill (1) 5.png'
import addImgLogo from './assets/Plus.png'
import webLogo from './assets/Group 599.png'


import AddCoinAlert from '../alerts/addCoinAlert/addCoinAlert'


import axios from 'axios'
import { useReducer } from 'react'
import { logoBannerDb } from '../firebaseConfig/firebaseConfig'




const AddCoin = () => {


    const intialreqFields  = {
        coinName: '',

        coinAcro: '',

        coinAddressBSC: '',

        coinAddressETH: '',
        
        coinAddressTRC: '',

        coinMarketCap: '',

        coinPrice: '',

        coinLaunchDate: '',

        coinDescription: '',

        coinLogo: '',

        coinBanner: '',

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
 
        onPooCoin: false,
        
        onBoggedFinance: false,
        
        onCoingecko: false,

        
    }

   

    const setreqFields = ( state, action ) => {
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
                    coinAddressBSC: action.payload
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
                    coinDescription: action.payload
                }
            
            case "setcoinLogo":
                return {
                    ...state,
                    coinLogo: action.payload
                }
            
            case "setcoinBanner":
                return {
                    ...state,
                    coinBanner: action.payload 
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
                        onCoingecko: true


                    }
        
            case "handleBtnCoinGeckoFalse":
                return {
                    ...state,
                        onCoingecko: false
    
                        }

            case "handleBtnBoggedFinanceTrue":
                return{
                    ...state,
                    onBoggedFinance: true

                }
            
            case "handleBtnBoggedFinanceFalse":
                return{
                    ...state,
                    onBoggedFinance: false
    
                }    

            case "handleBtnPanCakeSwapTrue":
                return{
                    ...state,
                        onPanCakeSwap: true
                    }
            
            case "handleBtnPanCakeSwapFalse":
                return{
                     ...state,
                       onPanCakeSwap: false
                    }        
              
            case "handleBtnPooCoinTrue":
                    return {
                        ...state,
                        onPooCoin: true
                    }

            case "handleBtnPooCoinFalse":
                return {
                    ...state,
                    onPooCoin: false
                }
            case "Submit Success":
                return{
                    ...state,
                    coinName: '',

                    coinAcro: '',

                    coinAddressBSC: '',

                    coinAddressETH: '',
                    
                    coinAddressTRC: '',

                    coinMarketCap: '',

                    coinPrice: '',

                    coinLaunchDate: '',

                    coinDescription: '',

                    coinLogo: '',

                    coinBanner: '',

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
            
                    onPooCoin: false,
                    
                    onBoggedFinance: false,
                    
                    onCoingecko: false

                }

            default:
                return state
        }
    }

    const [ reqFields, reqFieldsDispatch ] = useReducer( setreqFields, intialreqFields );

    const initialuiFields = {
        coinDescCounter: 0,

        coinLogoInpRef: {},
        imgLogoUrl: [],
        showLogoNameonUpload: false,
        errNoCoinNameL: false,

        coinBannerInpRef: {},
        imgBannerUrl: [],
        errNoCoinNameB: false,
        showBannerNameonUpload: false,

        txtColorPanCakeSwap: "#6B5DCC",
        btnColorPanCakeSwap: "#303343",
        
        txtColorPooCoin: "#6B5DCC",
        btnColorPooCoin: "#303343",

        txtColorBoggedFinance: "#6B5DCC",
        btnColorBoggedFinance: "#303343",

        txtColorCoinGecko: "#6B5DCC",
        btnColorCoinGecko: "#303343",

        showPopUp: false,

        errcoinName: false,

        errcoinAcro: false,

        errcoinLogo: false,

        errMsg: false

    }


    const setuiFields = ( state, action ) => {
        switch (action.type) {
           case "coinDescCounterInp":
                return {
                    ...state,
                    coinDescCounter: action.payload.length
                }

            case "onLogoUpload":
                return {
                    ...state,
                    coinLogoInpRef: action.payload,
                    showLogoNameonUpload: true
                }
            case "saveLogo":
                return{
                ...state,
                errNoCoinNameL: false}
                
    
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
                
                return {
                    ...state,
                    errNoCoinNameB: false
                }
        
            case "saveBannerFailure":
                return {
                    ...state,
                    errNoCoinNameB: true
                }
            
            case "handleBtnCoinGeckoTrue":
                return {
                    ...state,
                txtColorCoinGecko: "#D7D7D7",                    
                btnColorCoinGecko: "#6B5DCC"

                }

            case "handleBtnCoinGeckoFalse":
                return {
                    ...state,
                txtColorCoinGecko: "#6B5DCC",
                btnColorCoinGecko: "#303343"
                    }
        
            case "handleBtnBoggedFinanceTrue":
                return {
                    ...state,
                txtColorBoggedFinance:"#D7D7D7",                  
                btnColorBoggedFinance: "#6B5DCC"
                   }

            case "handleBtnBoggedFinanceFalse":
                return{
                    ...state,
                    txtColorBoggedFinance: "#6B5DCC",
                    btnColorBoggedFinance: "#303343"
                }

            case "handleBtnPanCakeSwapTrue":
                return{
                    ...state,
                    txtColorPanCakeSwap: "#D7D7D7", 
                    btnColorPanCakeSwap: "#6B5DCC"
                    }
                    
            case "handleBtnPanCakeSwapFalse":
                return{
                    ...state,
                    txtColorPanCakeSwap: "#6B5DCC", 
                    btnColorPanCakeSwap: "#303343"
                    }    
              
            case "handleBtnPooCoinTrue":
                    return {
                        ...state,
                    txtColorPooCoin: "#D7D7D7",
                    btnColorPooCoin: "#6B5DCC"
                    }

            case "handleBtnPooCoinFalse":
                    return {
                        ...state,
                    txtColorPooCoin: "#6B5DCC",
                    btnColorPooCoin: "#303343"
                    }
            case "Submit failed":
                return {
                    ...state,
                    errMsg: true
                }
            
            case "Submit failed missing coin Name": 
                return {
                    ...state,
                    errcoinName: true
                }
            
            case "Submit failed missing coin Acro": 
                return {
                    ...state,
                    errcoinAcro: true
                }
            
            case "Submit failed missing coin Logo": 
                return {
                    ...state,
                    errcoinLogo: true
                }
            case "Submit Success":
                return {
                    ...state,
                    showPopUp: true,
                    coinDescCounter: 0,

                    coinLogoInpRef: {},
                    showLogoNameonUpload: false,
                    errNoCoinNameL: false,

                    coinBannerInpRef: {},
                    errNoCoinNameB: false,
                    showBannerNameonUpload: false,

                    txtColorPanCakeSwap: "#6B5DCC",
                    btnColorPanCakeSwap: "#303343",
                    
                    txtColorPooCoin: "#6B5DCC",
                    btnColorPooCoin: "#303343",

                    txtColorBoggedFinance: "#6B5DCC",
                    btnColorBoggedFinance: "#303343",

                    txtColorCoinGecko: "#6B5DCC",
                    btnColorCoinGecko: "#303343",

                    errcoinName: false,

                    errcoinAcro: false,

                    errcoinLogo: false,

                    errMsg: false
                    
                }

            default:
              return state;
        }
    }

    const [ uiFields, uiFieldsDispatch ] = useReducer( setuiFields, initialuiFields );

   
   


    const saveLogo = (e) => {
        e.preventDefault();
        if(reqFields.coinName.length !== 0){
                logoBannerDb.ref(`coins/${reqFields.coinName}/logo`)
                .put(uiFields.coinLogoInpRef)
                .on("state_changed", alert("success"), alert, () => {
                    logoBannerDb.ref(`coins/${reqFields.coinName}`).child(`logo`)
                    .getDownloadURL()
                    .then((url) => {reqFieldsDispatch({type: "setcoinLogo", payload: url})})
                });
            uiFieldsDispatch(
                {type: "saveLogo"}
            )
        } else {
            uiFieldsDispatch(
                {type: "saveLogoFailure"}
            )
        }
    }

    const saveBanner = (e) => {
        e.preventDefault();
        if(reqFields.coinName.length !== 0){
                logoBannerDb.ref(`coins/${reqFields.coinName}/banner`)
                .put(uiFields.coinBannerInpRef)
                .on("state_changed", alert("success"), alert,  () => {
                    logoBannerDb.ref(`coins/${reqFields.coinName}`).child(`banner`)
                    .getDownloadURL()
                    .then((url) => {reqFieldsDispatch({type: "setcoinBanner", payload: url})})
                });
            uiFieldsDispatch(
                {type: "saveBanner"}
            )
        } else {
            uiFieldsDispatch(
                {type: "saveBannerFailure"}
            )
        }
    }
    console.log(reqFields.coinName)
        const handleCoinGecko = (e) => {
            e.preventDefault();
            if( uiFields.btnColorCoinGecko === "#303343" && reqFields.onCoingecko === false ){
                reqFieldsDispatch({ type: "handleBtnCoinGeckoTrue"})
                uiFieldsDispatch({ type: "handleBtnCoinGeckoTrue"})
            } else {
                reqFieldsDispatch({ type: "handleBtnCoinGeckoFalse"})
                uiFieldsDispatch({ type: "handleBtnCoinGeckoFalse"})

            }
        } 


      const handleBtnPanCakeSwap = (e) => {
        e.preventDefault();
        if( uiFields.btnColorPanCakeSwap === "#303343" && reqFields.onPanCakeSwap === false ){
            reqFieldsDispatch({ type: "handleBtnPanCakeSwapTrue"})
            uiFieldsDispatch({ type: "handleBtnPanCakeSwapTrue"})
            
        } else {
            reqFieldsDispatch({ type: "handleBtnPanCakeSwapFalse"})
            uiFieldsDispatch({ type: "handleBtnPanCakeSwapFalse"})

        }    
      };

      const handleBtnBoggedFinance = (e) => {
        e.preventDefault();
        if(uiFields.btnColorBoggedFinance === "#303343" && reqFields.onBoggedFinance === false){
            reqFieldsDispatch( {type: "handleBtnBoggedFinanceTrue"})
            uiFieldsDispatch( {type: "handleBtnBoggedFinanceTrue"})
        } else {
            reqFieldsDispatch( {type: "handleBtnBoggedFinanceFalse"} )
            uiFieldsDispatch( {type: "handleBtnBoggedFinanceFalse"})
        }           
      };

      const handleBtnPooCoin = (e) => {
        e.preventDefault();
        if(uiFields.btnColorPooCoin === "#303343" && reqFields.onPooCoin === false){
            reqFieldsDispatch( {type: "handleBtnPooCoinTrue"} )
            uiFieldsDispatch( {type: "handleBtnPooCoinTrue"} )
        } else {
            reqFieldsDispatch( {type: "handleBtnPooCoinFalse"})
            uiFieldsDispatch( {type: "handleBtnPooCoinFalse"})
        }         
      };

    const onClickPost = async (e) => {
        e.preventDefault();
            try{
                
                console.log(reqFields.coinLogo)
                console.log(reqFields.coinBanner)

                await axios.post("https://coinscore-cc-backend.onrender.com/api/collections/coins/add", reqFields);

                console.log("coin captured")

                uiFieldsDispatch( {type : "Submit Success" } )
                reqFieldsDispatch( {type : "Submit Success" } )
                
                
            }
            catch(err)
            {
                console.log(`Couldn't add coin ${err}`);
                if(reqFields.coinName.length === 0){
                    uiFieldsDispatch( {type : "Submit failed missing coin Name" } )
                }

                if(reqFields.coinAcro.length === 0){
                    uiFieldsDispatch( {type : "Submit failed missing coin Acro" } )
                }

                if(reqFields.coinLogo === undefined){
                    uiFieldsDispatch( {type : "Submit failed missing coin Logo" } )
                }

                uiFieldsDispatch( {type : "Submit failed" } )
                
            }       

    }

   
 
    

    return(
        <div>
            
        <div className='flex flex-col items-center justify-center m-16'>
            
         
                        <div className="rounded-xl contentOuter flex flex-col p-8">
                    <div>
                        <h2 className="primaryColorW font-semibold text-3xl">Add your coin</h2>
                        <p className="text-justify primaryColorW font-light tracking-wide text-lg">Fill this quick form, and our team will contact you shortly</p>
                    </div>
                    <div className="addCoinBody">
                        <form className="flex flex-col">

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinName">Coin Name</label>
                            {uiFields.errcoinName && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={reqFields.coinName} onChange={(e) => {reqFieldsDispatch({ type: "coinNameInp", payload: e.target.value})}} className ="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinName" placeholder="enter your coin name" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinAcro">Coin Acronym</label>
                            {uiFields.errcoinAcro && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <input value={reqFields.coinAcro} onChange={(e) => {reqFieldsDispatch({ type: "coinAcroInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinAcro" placeholder="enter your coin acronym" required />

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinBSC">Address BSC</label>
                            <input value={reqFields.coinAddressBSC}  onChange={(e) => {reqFieldsDispatch({ type: "coinAddressBSCInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinBSC" placeholder="enter your coin BSC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinETH">Address ETH</label>
                            <input value={reqFields.coinAddressETH} onChange={(e) => {reqFieldsDispatch({ type: "coinAddressETHInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinETH" placeholder="enter your coin ETH adddress"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinTRC">Address TRC</label>
                            <input value={reqFields.coinAddressTRC} onChange={(e) => {reqFieldsDispatch({ type: "coinAddressTRCInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinTRC" placeholder="enter your coin TRC address"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="addCoinMC">Market Cap</label>
                            <input value={reqFields.coinMarketCap} onChange={(e) => {reqFieldsDispatch({ type: "coinMarketCapInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="addCoinMC" placeholder="What's your coin Market Cap"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinPrice">Price</label>
                            <input value={reqFields.coinPrice} onChange={(e) => {reqFieldsDispatch({ type: "coinPriceInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="coinPrice" placeholder="what's the price of your coin"/>

                            <label className="text-justify primaryColorW font-light tracking-wide text-lg" name="coinLaunch">Launch Date</label>
                            <input value={reqFields.coinLaunchDate} onChange={ (e) => {reqFieldsDispatch({ type: "coinLaunchDateInp", payload: e.target.value})}} className="my-8 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="date" id="coinLaunch" placeholder="enter your coin name"/>

                            <div className="flex flex-col">
                                <label className="text-justify  primaryColorW font-light tracking-wide text-lg" name="coinDescription">Description</label>
                                <textarea maxLength="1800" value={reqFields.coinDescription} onInput ={(e) => {reqFieldsDispatch({ type: "coinDescCounterInp", payload: e.target.value}); uiFieldsDispatch({ type: "coinDescCounterInp", payload: e.target.value})}} id="coinDescription" className="h-64 p-1 rounded-xl rounded-b-none inputFieldColor primaryColorW pl-2.5" placeholder="1800 chars (max)"></textarea>
                                <div className="flex justify-end p-1 rounded-xl border-1 border-t-0 inputFieldColor primaryColorP pl-2.5 mb-6 rounded-t-none primaryColorP font-normal text-xs tracking-wide">
                                    <p>{uiFields.coinDescCounter}/1800</p>
                                </div>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinLogo">Logo</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 512 * 512 px or an image with dimesions in 1:1 ratio.</p>
                            {uiFields.errcoinLogo && <p className = "text-xs font-normal text-justify text-red-600">*Please fill the required fields</p>}
                            <div className="flex m-8 justify-center">
                                <div className="flex-col items-center justify-center w-64 h-64 rounded-xl flex inputFieldColor primaryColorW pl-2.5">
                                    <div className="addCoinLogoUpload">
                                        <input onChange={(e) => {uiFieldsDispatch({ type: "onLogoUpload", payload: e.target.files[0]})}} className="h-64 w-64 opacity-0 absolute flex" id="addCoinLogo" type="file" accept="image/*" required/>
                                        <img className="w-6 h-6" src={addImgLogo} alt="addFileLogo"/>
                                    </div>
                                    { uiFields.showLogoNameonUpload ? <p className='primaryColorW'>{uiFields.coinLogoInpRef.name}</p> : <div>
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }              
                                </div>
                            </div>
                            {uiFields.errNoCoinNameL && <p className = "text-xs font-normal text-justify text-red-600">*Please Enter Coin Name prior and try again.</p>}
                            <button onClick={saveLogo} className='primaryColorW rounded-xl btnBgColor h-11 w-56 text-lg font-bold border border-slate-50 m-2'> Save Logo </button>
                            

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinBanner">Banner</label>
                            <p className="secondaryColorG text-justify text-xs font-normal tracking-wide">Recommended Size: 1920*1080 px (lanscape).</p>
                            <div className="flex-col items-center justify-center rounded-xl inputFieldColor  my-7 h-60  flex">
                                <div className="addCoinBannerUpload">
                                    <input onChange={(e) => {uiFieldsDispatch({ type: "onBannerUpload", payload: e.target.files[0]})}} className="h-64 w-64 opacity-0 absolute flex" id="addCoinBanner" type="file" accept="image/*"/>
                                    <img className="w-6 h-6" src={addImgLogo} alt="addFileBanner"/>
                                </div>
                                { uiFields.showBannerNameonUpload ? <p className='primaryColorW'>{uiFields.coinBannerInpRef.name}</p> : <div>
                                    <span className="primaryColorP text-center text-xs font-semibold tracking-wide">Add file</span> <span className="primaryColorW text-center text-xs font-semibold tracking-wide">or</span><span className="primaryColorP text-center text-xs font-semibold tracking-wide"> Drag and drop here</span>
                                </div> }
                            </div>
                            {uiFields.errNoCoinNameB && <p className = "text-xs font-normal text-justify text-red-600">*Please Enter Coin Name prior and try again.</p>}
                            <button onClick={saveBanner} className='primaryColorW rounded-xl btnBgColor h-11 w-56 text-lg font-bold border border-slate-50 m-2'> Save Banner </button>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg " name="addCoinSocial">Your socials</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">attach link to your coin account socials</span>

                            <div className="my-4 flex items-center">
                                <img className="w-7 h-7 mx-4" src={twitterLogo} alt="twitter logo"/>
                                <input value={reqFields.coinTwitter} onChange={(e) => {reqFieldsDispatch({ type: "coinTwitterInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTwitter" placeholder="your twitter social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={instagramLogo} alt="instagram logo"/>
                                <input value={reqFields.coinInstagram} onChange={(e) => {reqFieldsDispatch({ type: "coinInstagramInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialInstagram" placeholder="your instagram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={redditLogo} alt="reddit logo"/>
                                <input value={reqFields.coinReddit} onChange={(e) => {reqFieldsDispatch({ type: "coinRedditInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialReddit" placeholder="your reddit social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-7 mx-4" src={telegramLogo} alt="telegram logo"/>
                                <input value={reqFields.coinTelegram} onChange={(e) => {reqFieldsDispatch({ type: "coinTelegramInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialTelegram" placeholder="your telegram social"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-6 h-6 mx-5" src={webLogo} alt="website logo"/>
                                <input value={reqFields.coinWebsite} onChange={(e) => {reqFieldsDispatch({ type: "coinWebsiteInp", payload: e.target.value})}}  className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialWebsite" placeholder="your website"/>
                            </div>

                            <div className="my-4 flex items-center align-center">
                                <img className="w-7 h-6 mx-5" src={youtubeLogo} alt="youtube logo"/>
                                <input value={reqFields.coinYoutube} onChange={(e) => {reqFieldsDispatch({ type: "coinYoutubeInp", payload: e.target.value})}} className="h-12 rounded-xl inputFieldColor primaryColorW w-full pl-2.5" type="text" id="addCoinSocialYoutube" placeholder="your youtube channle"/>
                            </div>

                            <label className="text-justify primaryColorW font-semibold tracking-wide text-lg" name="addCoinListing">Listings</label>
                            <span className="text-justify text-xs font-normal secondaryColorG">Please select all platforms where your coin is listed</span>

                                <div className="flex">
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleCoinGecko} style={{ backgroundColor: uiFields.btnColorCoinGecko, color: uiFields.txtColorCoinGecko }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingCoinGecko">
                                            <img className="mr-2.5 w-6 h-6" src={coinGecko} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">coingecko</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPanCakeSwap} style={{ backgroundColor: uiFields.btnColorPanCakeSwap, color: uiFields.txtColorPanCakeSwap }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPancakeSwap">
                                            <img className="mr-2.5 w-6 h-6" src={pancakeLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">pancakeswap</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnBoggedFinance} style={{ backgroundColor: uiFields.btnColorBoggedFinance, color: uiFields.txtColorBoggedFinance }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingBoggedFinance">
                                            <img className="mr-2.5 w-6 h-6" src={coinswapLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">bogged.finance</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPooCoin} style={{ backgroundColor: uiFields.btnColorPooCoin, color: uiFields.txtColorPooCoin }} className="flex items-center rounded-xl justify-between m-3 p-3" id="addCoinListingPoocoin">
                                            <img className="mr-2.5 w-6 h-6" src={poocoinLogo} alt=""/>
                                            <p className="text-justify text-xs font-semibold tracking-wide">poocoin</p>
                                        </button>
                                    </div>
                                </div>

                            <div className='self-end'>
                            <button onClick={onClickPost} className="primaryColorW rounded-xl btnBgColor h-11 w-64 text-lg font-bold border border-slate-50 m-2" >Submit Coin Info</button>
                            {uiFields.errMsg && <p className = "text-xs font-normal text-justify text-red-600">*couldn't add coin please try again or contact our team</p>}
                            </div>    
                            
                        </form>

                        {uiFields.showPopUp && <AddCoinAlert />}
                    </div>
                </div>

    </div>

    </div>
    );
}

export default AddCoin;