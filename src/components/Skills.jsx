import { Row, Col } from 'react-bootstrap';
import MessageBox from "../design/MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faSquareJs, faPython, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import '../sass/skill.scss';

export default function Skills(props) {
    return(
        <section id="skills" ref={e => props.refer.current[2] = e}>
            <MessageBox box="otherMessageBox" size={"w-md-75"}>
                <p>What are some of the technologies you used?</p>
            </MessageBox>
            <MessageBox box="messageBox">
                <Row>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faReact}/>
                        <p>React</p>
                    </Col>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faJava}/>
                        <p>Java</p>
                    </Col>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faPython}/>
                        <p>Python</p>
                    </Col>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faSquareJs}/>
                        <p>JavaScript</p>
                    </Col>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faHtml5}/>
                        <p>HTML</p>
                    </Col>
                    <Col xs={4} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faCss3Alt}/>
                        <p>CSS</p>
                    </Col>
                </Row>
            </MessageBox>
        </section>
    );
}