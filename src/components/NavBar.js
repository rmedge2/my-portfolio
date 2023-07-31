import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

 export const NavBar = () => {
    const [activeLinnk, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }

        window.addEventListener("Scroll", onScroll);

        return () => window.removeEventListener("Scroll", onScroll)
    }, [])

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="">Home</Nav.Link>
                        <Nav.Link href="#Skills">Link</Nav.Link>
                        <Nav.Link href="#Projects">Link</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#" src={} alt=""></a>
                            <a href="#" src={} alt=""></a>
                            <a href="#" src={} alt=""></a>
                        </div>
                    </span>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

