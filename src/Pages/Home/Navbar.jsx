import  {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () =>{

    };

    useEffect(() => {
        const handleResize = () =>{
            if(window.innerWidth <= 500) {
                closeMenu()
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu()
        }
    },[])

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img className="navbar--logo" src="./img/Logo1.png" alt="Logoipsum" />
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="home"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="aboutMe"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="myPortfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="testimonial"
                            className="navbar--content"
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;