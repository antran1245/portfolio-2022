import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import '../sass/main.scss';
import Aboutme from './Aboutme';
import Projects from './Projects';

export default function Main(props) {
    const {show} = props;
    return(
        <Container fluid="true" style={{display: show?'none': 'block'}}>
            <Navbar fixed='top'>
                <Container className='justify-content-end'>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href='#aboutme'>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link>Contact Me</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Container>
            </Navbar>
            <Aboutme />
            <Projects/>
        </Container>
    );
}