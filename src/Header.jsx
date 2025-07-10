import './Header.css';

function Header() {

    return(
        <header id="navbar">
        <ul>
            <li id="about-link"><a href="#welcome-section">About</a></li>
            <li id="projects-link"><a href="#buttons-container">Projects</a></li>
            <li id="contacts-link"><a href="#contact">Contact</a></li>
        </ul>
        </header>
    );
};

export default Header;

