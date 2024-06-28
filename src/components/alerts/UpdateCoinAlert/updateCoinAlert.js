import tickIcon from '../assets/Tick Square.png';

const UpdateCoinAlert = () => {
    return (<div className="fixed inset-0 backdrop-blur-sm justify-center items-center flex">
        <div className='contentOuter gap-2 h-64 rounded-xl justify-center items-center primaryColorW font-semibold text-xl flex contentWidth'>
            <img className='w-6 h-6' src={tickIcon} alt="CheckMark"></img> 
            <p>Coin Values have been updated!</p>
        </div>
            
            </div>);
}

export default UpdateCoinAlert;