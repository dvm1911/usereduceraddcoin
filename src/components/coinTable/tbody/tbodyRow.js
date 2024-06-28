import upVoteArw from './assets/Arrow - Right.png';
import { Link } from 'react-router-dom';



const TbodyRow = ({coin, coinUpVoteOn }) => {

    let age = 0;
        let detAge = '';

    if(coin.coinLaunchDate){
        const coinDate = coin.coinLaunchDate.split("-");
        let currDate = new Date();
        let month = currDate.getMonth();
        let date = currDate.getDate();
        let year = currDate.getFullYear();

        if(year > coinDate[0]){
            age = year - coinDate[0];
            detAge = `${age} Years`; 
        }
        else if( year === coinDate[0]){
            if(month > coinDate[1]){
                age = month - coinDate[1];
                detAge = `${age} Months`; 
            }
            else if(month === coinDate[1]){
                if(date > coinDate[2]){
                    age = date - coinDate[2];
                    detAge = `${age} Days`; 
                }
                else if(date === coinDate[2]){
                    detAge = `< 1 Day`; 
                } else {
                    detAge = `Not yet Launched`; 
                }  
            } else {
                detAge = `Not yet Launched`; 
            }  
        } else {
            detAge = `Not yet Launched`; 
        }
    } 
   

    return (
        
        <tr>        
                
                <td className="crypto flex"> 
                    <Link className="noDec" to={`/coinInfo/${coin._id}`}>
                        <div className='flex flex-start'>
                        <div className="coinLogo w-4 h-4">
                            <img className='w-full h-full rounded-full' src={coin.coinLogo} alt="coin-logo"/>
                        </div>
                        <div className="coinName">
                            <p>{coin.coinName}</p>
                        </div>
                        <div className="coinAcro flex">
                            <p>{coin.coinAcro}</p>
                        </div> 
                        </div>
                    </Link>  
                    </td>
                   
                
                    <td className="marketCap flex">
                        <div className="coinValue">
                            <p>{`$` + coin.coinMarketCap}</p>
                        </div>                        
                    </td>
                    <td className="age flex">
                        <div className="coinAge">
                            <p>{ age ? detAge : "Not yet Launched"}</p>
                        </div>     
                    </td>
                    <td className="vote">
                        <div className="coinVote flex">
                            <div className="voteNum">
                                <p>{coin.coinVote}</p>
                            </div>
                            <div onClick={coinUpVoteOn} className="upVote-sym flex">
                                <img id="upVote-arw" src={upVoteArw} alt="upVote-arw"/>
                            </div>
                        </div>
                    </td>
                    <td className="rank flex">
                        <div className="coinRank flex">
                            <p>{coin.coinRank}</p>
                        </div>
                    </td>
        </tr>
        
           
    )
}

export default TbodyRow;