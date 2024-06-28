
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import TbodyRow from "./tbody/tbodyRow";




const Tbody = ({coinUpVoteOn}) => {
    const [ coinsArray, setcoinsArray ] = useState([]);
    const [ coinfetched, setcoinfetched ] = useState(false)

    useEffect( () => {
        if(!coinfetched){
        axios.get('https://coinscore-cc-backend.onrender.com/api/collections/coins/allcoin')
        .then(data => {setcoinsArray(data.data.data); setcoinfetched(true)})
        .catch(err => console.log(err))
        }
    })
 
    
    const reviewedArr = (coinsArray.filter((item) => item.isReviewed && item.isActive))
    return (
        <>  
            {
                reviewedArr.map( (coin) => 
                    { return <TbodyRow coin={coin} coinUpVoteOn={coinUpVoteOn} key={coin._id} />} )
            }
          </>          
    );
}

export default Tbody;