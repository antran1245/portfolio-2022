import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRef } from 'react';
import '../App.css';
import '../sass/main.scss';
import Aboutme from './Aboutme';
import Projects from './Projects';
import FrontPage from './FrontPage';
import Contact from './Contact';
import Skills from './Skills';

export default function Main() {
    const currentRef = useRef([])
    
    const scrollTo = (link) => {
        currentRef.current[link].scrollIntoView({behavior:"smooth"})
    }
    return(
        <Container className="main">
            <Navbar fixed='top'>
                <Container className='justify-content-end'>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={() => scrollTo(0)}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => scrollTo(1)}>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => scrollTo(2)}>Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => scrollTo(3)}>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => scrollTo(4)}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <div id='scrollContainer'>
                <FrontPage refer={currentRef} scrollToProject={() => scrollTo(2)}/>
                <Aboutme refer={currentRef}/>
                <Skills refer={currentRef}/>
                <Projects refer={currentRef}/>
                <Contact refer={currentRef}/>
            </div>
        </Container>
    );
}