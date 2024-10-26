import {} from 'react';
import image from '../../../public/online-image.jpg';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <img src={image} alt="image of logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/mission">Mission</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/sign_up">Sing Up</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;