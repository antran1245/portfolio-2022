import { Col, Row } from "react-bootstrap";
import JokeBoard from "./projects/JokeBoard";
import ToDo from "./projects/ToDo";
import CrimeReport from "./projects/CrimeReport";
import Location from './projects/Location';
import MessageBox from "../design/MessageBox";
import "../sass/project.scss";
import SpaceTourism from "./projects/SpaceTourism";

export default function Projects(props) {

    return(
        <section id="projects" ref={e => props.refer.current[3] = e}>
            <br />
            <br />
            <MessageBox box="otherMessageBox" size="w-md-50">
                <p>Can I hear about some of your Projects?</p>
            </MessageBox>
            <MessageBox box="messageBox">
                <Row className="project">
                    <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                        <SpaceTourism />
                    </Col>
                    <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                        <JokeBoard />
                    </Col>
                    <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                        <ToDo />
                    </Col>
                    <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                        <CrimeReport />
                    </Col>
                    <Col xs={12} md={{span: 6}} lg={4} className="mt-3">
                        <Location />
                    </Col>
                </Row>
            </MessageBox>
        </section>
    );
}