import { Link } from 'react-router-dom';
import Logo from "../assests/freepik-logo-film-locations-blog.png"

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <img src={Logo} alt="LOGO"/>
            </Link>
            <nav>
                <Link to="/about" className="custom-link"><b>About Us</b></Link>
            </nav>
            <p>© Copyright <b>Film Locations APP 2024</b>. All rights reserved</p>
        </footer>
    );
}

export default Footer;
