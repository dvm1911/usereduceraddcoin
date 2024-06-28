/**
 *Aronyms
*Sym - symbol 
*/
import { Link } from 'react-router-dom';

import coinScoreLogo from './assets/logo logo.png';
import addSym from './assets/Plus.png';
import walletSym from './assets/Wallet.png';
import profileSym from './assets/Profile.png';
import searchSym from './assets/Search.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Header = () => {

    const token = localStorage.getItem("token");
    const [ user, setuser ] = useState({});
    const [ userFetched, setuserFetched ] = useState(false);

    useEffect(() => {
       if(!userFetched){
        const userDetails = async () => {
            try {
                const res = await fetch("https://coinscore-cc-backend.onrender.com/api/auth/getUser", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await res.json();
                console.log(data)
                setuser(data);
                setuserFetched(true);
            } catch (error) {
                console.log(error)
            }

           
        }

        if(token){
            userDetails();
        }
       }

    })

    const navigateHeader = useNavigate();

    const logOutHandler = () => {
        localStorage.removeItem("token");
        navigateHeader("/")
    }
    
    return(
        <header>

            <div className="items-center contentOuter h-32 flex">
                    
                <div className="items-center grow  flex">
                <Link className='no-underline items-center justify-center flex' to={'/'}>
                        <div className="w-8 h-10">
                            <img  src={coinScoreLogo} alt="coinscore_logo"/>
                        </div>
                        <div className="primaryColorW text-2xl font-semibold">
                            <h1>coinscore</h1>
                        </div>
                </Link>         
                </div>
                { user.isAdmin && <Link to={"/adminPanel"} className="no-underline primaryColorW flex items-center justify-center">Admin Panel</Link> }

                { token ? (
                    <div className="headListDiv">
                    <ul className="gap-8 list-none flex">
                        <li className="items-center flex"><img src={walletSym} alt=""/><Link className="no-underline primaryColorW flex items-center justify-center" href="/">Promotion</Link></li>
                        <li className="items-center flex"><img src={addSym} alt=""/><Link to={"/addcoin"} className="no-underline primaryColorW flex items-center justify-center">Add your coin</Link></li>
                        <li className="items-center flex"><img src={profileSym} alt="login"/><Link to={"/updateDetails/"+user._id} className="no-underline primaryColorW flex items-center justify-center" href="/">{user.userName}</Link></li>
                        <li className="items-center flex"><button onClick={logOutHandler} className="no-underline primaryColorW flex items-center justify-center w-32 h-11 rounded-xl bg-red-600" href="">Log out</button></li>
                        <li className="items-center flex"><input className="h-11 w-64 rounded-xl inputFieldColor p-1" type="text" placeholder="Find your next gem"/><img className="absolute right-2" src={searchSym} alt="searchIcon"/></li>
                    </ul>
                    </div>
                ) : (
                    <div className="headListDiv">
                    <ul className="gap-8 list-none flex">
                        <li className="items-center flex"><img src={walletSym} alt=""/><Link className="no-underline primaryColorW flex items-center justify-center" href="/">Promotion</Link></li>
                        <li className="items-center flex"><img src={addSym} alt=""/><Link to={"/addcoin"} className="no-underline primaryColorW flex items-center justify-center">Add your coin</Link></li>
                        <li className="items-center flex"><img src={profileSym} alt="login"/><Link to={"/login"} className="no-underline primaryColorW flex items-center justify-center" href="/">Login</Link></li>
                        <li className="items-center flex"><Link to={"/signup"} className="no-underline primaryColorW flex items-center justify-center w-32 h-11 rounded-xl btnBgColor" href="">Sign Up</Link></li>
                        <li className="items-center flex"><input className="h-11 w-64 rounded-xl inputFieldColor p-1" type="text" placeholder="Find your next gem"/><img className="absolute right-2" src={searchSym} alt="searchIcon"/></li>
                    </ul>
                    </div>
                )}                
            </div>
        </header>
    );
          
}

export default Header;