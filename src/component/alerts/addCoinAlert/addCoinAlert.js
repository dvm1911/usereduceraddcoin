import tickIcon from './Tick Square.png';

const AddCoinAlert = () => {
    return (<div className="fixed inset-0 backdrop-blur-sm justify-center items-center flex">
        <div className='contentOuter gap-2 h-64 rounded-xl justify-center items-center primaryColorW font-semibold text-xl flex contentWidth'>
            <img className='w-6 h-6' src={tickIcon} alt="CheckMark"></img> 
            <p>Details Recieved, Our team will contact you soon!</p>
        </div>
            
            </div>);
}

export default AddCoinAlert;