import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import '../sass/main.scss';
import Aboutme from './Aboutme';
import Projects from './Projects';
import FrontPage from './FrontPage';

export default function Main() {
    return(
        <Container className="main">
            <Navbar fixed='top'>
                <Container className='justify-content-end'>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href='#aboutme'>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <FrontPage />
            <Aboutme />
            <Projects/>
        </Container>
    );
}