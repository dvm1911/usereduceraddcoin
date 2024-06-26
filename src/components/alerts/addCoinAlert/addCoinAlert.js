import tickIcon from '../assets/Tick Square.png';
import { useNavigate } from 'react-router-dom';

const AddCoinAlert = () => {

    const navigateAddCoin = useNavigate();

    const redirectToHomePageAddCoin = () =>{
        navigateAddCoin("/")
    }

    return (
        <div onClick={redirectToHomePageAddCoin} className="fixed inset-0 backdrop-blur-sm justify-center items-center flex">
        <div className='contentOuter gap-2 h-64 rounded-xl justify-center items-center primaryColorW font-semibold text-xl flex contentWidth'>
            <img className='w-6 h-6' src={tickIcon} alt="CheckMark"></img> 
            <p>Details Recieved, Our team will contact you soon!</p>
        </div>    
        </div>);
}

export default AddCoinAlert;