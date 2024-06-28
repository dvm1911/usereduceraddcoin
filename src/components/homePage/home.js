import AdWindow from '../adWindow/adWindow';
import TheadRow from '../coinTable/thead/theadRow'
import Tbody from '../coinTable/coinTable';
import { useReducer } from 'react';
import CoinUpAlert from '../alerts/coinUpvoted/coinUpVoted';

const Home = () => {


    const initialalerts = {
        coinUpVote: false
    }

    const setalerts = ( state, action ) => {
        switch (action.type) {
            case "coinUpVoteOn":
                return({
                    ...state,
                    coinUpVote: true
                })
            
            case "coinUpVoteOf":
                return({
                    ...state,
                    coinUpVote: false
                })
        
            default:
                return state
        }
    }
    const [ alerts , alertsDispatch ] = useReducer( setalerts, initialalerts );

    
    const coinUpVoteOn = () => {  
        alertsDispatch({ type: "coinUpVoteOn"})
        
    }
     

    const coinUpVoteOf = () => {
        alertsDispatch({ type: "coinUpVoteOf"})
    }

    return (
        <div onClick={coinUpVoteOf} className='flex justify-center items-center flex-col'>   
            <AdWindow />
            <div className='contentOuter p-8 rounded-xl w-max'>
            <table>
                <thead className='thead'>
                <TheadRow />
                </thead>
                <tbody className='tbody'>
                <Tbody coinUpVoteOn={coinUpVoteOn} />          
                </tbody>
            </table>
            </div>
        { alerts.coinUpVote &&  <CoinUpAlert />}
        </div>
        

    );
}

export default Home;