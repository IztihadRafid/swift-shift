import { Link } from 'react-router';
import error from '../../assets/errorpage.png';

const Errorpage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div>
                <img src={error} alt="err" />
                <div className='flex justify-center items-center my-10'>
                    <Link to={'/'}><button className="btn bg-[#CAEB66] px-8 py-4 rounded-4xl ">Go Home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Errorpage;