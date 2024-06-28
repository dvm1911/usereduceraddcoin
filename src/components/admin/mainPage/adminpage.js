
import axios from 'axios'
import { useEffect, useState } from 'react';
import CoinSlots from './coinslot/coinslot'
import EditCoinSlots from './coinslot/editCoinSlot';
import ActivateCoinSlots from './coinslot/deActiveCoinSlot';

const AdminPage = () => {

    const [ coinsArray, setcoinsArray ] = useState([]);

    useEffect( () => {
     axios.get('https://coinscore-cc-backend.onrender.com/api/collections/coins/allcoin')
      .then(data => { setcoinsArray(data.data.data)})
      .catch(err => console.log(err))
    })

    const [ isReviewed , setisReviewed ] = useState(false)
    const [ isActive, setisActive ] = useState(false)

    const newcoinsArr = (coinsArray.filter((item) => !(item.isReviewed)))
    const reviewedArr = (coinsArray.filter((item) => item.isReviewed && item.isActive))
    const deactivatedArr = (coinsArray.filter((item) => !(item.isActive)))

    const deletecoin = async (id ) => {
       await axios.delete(`https://coinscore-cc-backend.onrender.com/api/collections/coins/delete/${id}`)
    }
    
    const reviewcoin = ( id ) => {
        setisReviewed(true);
        axios.put(`https://coinscore-cc-backend.onrender.com/api/collections/coins/update/${id}`, {isReviewed})

    }

    const deactivatecoin = ( id ) => {
        setisActive(false);
        axios.put(`https://coinscore-cc-backend.onrender.com/api/collections/coins/update/${id}`, {isActive})
    }

    const activatecoin = ( id ) => {
        setisActive(true);
        axios.put(`https://coinscore-cc-backend.onrender.com/api/collections/coins/update/${id}`, {isActive})
    }



    return(
    <div className="flex-col contentOuter p-12 rounded-xl outerContentWidth flex">
        <div className="adminHead">
            <div className="primaryColorW text-3xl font-semibold mb-3.5">
                <h1>Admin Panel</h1>
            </div>
            <div className= "mb-6 primaryColorW text-base font-light text-justify">
                <p>CRUD for crypto coin Database!</p>
            </div>
        </div>
        <div className="toBeReviewOuter">
            <div className="primaryColorW  text-justify text-lg font-semibold">
                <h2>Review Coins</h2>
            </div>
            { 

                newcoinsArr.map( (coin) => 
                   { return <CoinSlots key={coin._id} coin={coin} deletecoin={deletecoin} reviewcoin={reviewcoin} ></CoinSlots>} )
            }
            <hr /> 
        </div>
        <div>
            <div className="primaryColorW  text-justify text-lg font-semibold">
                <h2>Deactivated Coins</h2>
            </div>
            { 

                deactivatedArr.map( (coin) => 
                   { return <ActivateCoinSlots key={coin._id} coin={coin} deletecoin={deletecoin} activatecoin={activatecoin} ></ActivateCoinSlots>} )
            }
            <hr /> 
        </div>
        <div>
            <div className="primaryColorW  text-justify text-lg font-semibold">
                <h2>Edit Coins</h2>
            </div>
            { 

                reviewedArr.map( (coin) => 
                   { return <EditCoinSlots key={coin._id} coin={coin} deletecoin={deletecoin} deactivatecoin={deactivatecoin} ></EditCoinSlots>} )
            }
            <hr /> 
        </div>                      
    </div>
    );
} 

export default AdminPage;