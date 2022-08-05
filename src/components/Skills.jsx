import { Row, Col } from 'react-bootstrap';
import MessageBox from "../design/MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faSquareJs, faPython, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import '../sass/skill.scss';

export default function Skills(props) {
    return(
        <section id="skills" ref={e => props.refer.current[2] = e}>
            <MessageBox box="otherMessageBox" size={"w-75"}>
                <p>What are some of the technologies you used?</p>
            </MessageBox>
            <MessageBox box="messageBox">
                <Row>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faReact}  size="6x"/>
                        <p>React</p>
                    </Col>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faJava}  size="6x"/>
                        <p>Java</p>
                    </Col>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faPython} size="6x"/>
                        <p>Python</p>
                    </Col>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faSquareJs} size="6x"/>
                        <p>JavaScript</p>
                    </Col>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faHtml5} size="6x"/>
                        <p>HTML</p>
                    </Col>
                    <Col xs={6} sm={3} md={2} className="skill-group">
                        <FontAwesomeIcon icon={faCss3Alt} size="6x"/>
                        <p>CSS</p>
                    </Col>
                </Row>
            </MessageBox>
        </section>
    );
}