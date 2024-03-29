import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import MessageBox from "../design/MessageBox";
import resume from "../An_Tran_Resume.pdf";
import '../sass/aboutme.scss';

export default function Aboutme(props) {
    return(
        <section id="aboutme" ref={e => props.refer.current[1] = e}>
            <MessageBox box="otherMessageBox" size="w-md-50">
                <p>Tell us about yourself.</p>
            </MessageBox>
            <MessageBox box="messageBox">
                <Row className="mt-4 mt-md-5 text-center aboutme">
                    <Col xs={{span:10, offset:1}} md={{span:6, offset: 3}} lg={{span: 4, offset: 4}}>
                        <span>
                            Hey there. I'm An.
                            <br/>
                            I enjoy coding. I've made website and mobile application.
                            <br/>
                            I also like gaming.
                        </span>
                    </Col>
                </Row>
                <Row className="mt-1 mt-md-2 text-center aboutme">
                    <Col>
                        <b>
                            <a href="https://github.com/antran1245">
                                <FontAwesomeIcon icon={faGithub} />&nbsp;
                                Github</a> | &nbsp;
                            <a href="https://www.linkedin.com/in/an-tran1245/">
                                <FontAwesomeIcon icon={faLinkedin} />&nbsp;
                                Linkedin</a> | &nbsp;
                            <a href={resume} download>
                                <FontAwesomeIcon icon={faFilePdf} />&nbsp;
                                Resume</a>
                        </b>
                    </Col>
                </Row>
            </MessageBox>
        </section>
    );
}