import { useNavigate } from 'react-router-dom';
import tickIcon from '../assets/Tick Square.png';

const EditUserAlert = () => {

    const navigateEditUser = useNavigate();

    const redirectToHomePageEditUser = () =>{
        navigateEditUser("/")
    }

    return (
    <div onClick={redirectToHomePageEditUser} className="fixed inset-0 backdrop-blur-sm justify-center items-center flex flex-col">
        <div className='contentOuter gap-2 h-64 rounded-xl justify-center items-center font-semibold text-xl flex flex-col contentWidth'>
            <div className='flex primaryColorP'>
            <img className='w-6 h-6' src={tickIcon} alt="CheckMark"></img> 
            <p>Details Updated!</p>
            </div>
        </div>        
     </div>);
}

export default EditUserAlert;