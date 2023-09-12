import './Header.css';
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border border-b-2'>
            <h1 
            className='text-4xl font-semibold'
            >Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;