import { Row, Col } from "react-bootstrap";
import '../sass/aboutme.scss';

export default function Aboutme() {
    return(
        <Row className="mt-4 mt-md-5 text-center aboutme">
            <Col xs={{span:10, offset:1}} md={{span:4, offset: 4}}>
                <span>
                    Hey there.
                    I'm An.
                    <br/>
                    I enjoy coding. I've made website and mobile application.
                    <br/>
                    I also like gaming.
                </span>
            </Col>
        </Row>
    );
}