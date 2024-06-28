import play from '../assets/play-button-arrowhead.png'
import edit from '../assets/draw.png';
import trash from '../assets/trash-bin.png';
import { Link } from 'react-router-dom';

const ActivateCoinSlots = ({coin, deletecoin, activatecoin}) => {
    console.log(coin.coinName)
 return (
    <div key={coin._id} className="rounded-lg inputFieldColor items-center flex-col mb-2 p-3.5 flex">

    <div className="items-center w-full flex">
        <div className="items-center grow flex">
            <div className="w-8 h-8 mr-1.5">
                <img className='w-full h-full rounded-full' src={coin.coinLogo} alt="coinLogo" />
            </div>
            <div className="primaryColorW text-lg font-medium mr-1.5">
                <p>{coin.coinName}</p>
            </div>
            <div className="mr-1.5 h-8 w-20 rounded-lg contentOuter primaryColorP text-lg justify-center items-center flex font-medium">
                <p>{coin.coinAcro}</p>
            </div>
        </div>
        <div className="items-center  flex">
            <Link id={coin._id} to={`/updateCoin/`+coin._id} className="w-8 h-8 rounded-lg contentOuter ml-1 p-1.5">
                <img className='h-full' src={edit} alt="editBtn" />
            </Link>
            <button onClick={() => activatecoin(coin._id)} className="w-8 h-8 rounded-lg contentOuter ml-1 p-1.5">
                <img className='h-full ' src={play} alt="checkBtn" />
            </button>
            <button onClick={() => deletecoin(coin._id, coin.coinName)} className="w-8 h-8 rounded-lg contentOuter ml-1 p-1.5">
                <img className='h-full ' src={trash} alt="trash-bin" />
            </button>                    
        </div>
    </div>
    </div>
 )
}

export default ActivateCoinSlots;