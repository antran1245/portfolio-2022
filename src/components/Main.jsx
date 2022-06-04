import { Container, Nav } from 'react-bootstrap';
import '../App.css';
import '../sass/main.scss';
import Aboutme from './Aboutme';
import Projects from './Projects';

export default function Main(props) {
    const {show} = props;
    return(
        <Container fluid style={{display: show?'none': 'block'}}>
            <Container>
                <Nav className='justify-content-end'>
                    <Nav.Item>
                        <Nav.Link>About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Contact Me</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Aboutme />
            <Projects/>
        </Container>
    );
}