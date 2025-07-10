import './Footer.css';

function Footer(){

    return(
        <footer id="contact">
            <p>
                <i class="fa-brands fa-linkedin-in fa-xl"></i>
                <a href="https://www.linkedin.com/in/elijah-raphael-gaylan-26988a321/" id="profile-link" target="_blank">linkedin</a>
            </p>

            <p>
                <i class="fa-solid fa-envelope fa-xl"></i>
                <a href="mailto:elijah.gaylan@gmail.com" id="profile-link" target="_blank">email</a>
            </p>

            <p>
                <i class="fa-brands fa-square-github fa-2xl"></i>
                <a href="https://github.com/eli-10-dev" id="profile-link" target="_blank">github</a>
            </p>
        </footer>
    );
};

export default Footer;