import { Container } from 'react-bootstrap';
import '../App.css';

export default function Main(props) {
    const {show} = props;
    return(
        <Container style={{display: show?'none': 'block'}}>
            hi
        </Container>
    );
}