import { Col, Container, Row } from "react-bootstrap";
import JokeBoard from "./projects/JokeBoard";
import ToDo from "./projects/ToDo";
import CrimeReport from "./projects/CrimeReport";
import Location from './projects/Location';
import "../sass/project.scss";

export default function Projects() {

    return(
        <Container className="mt-0 mt-sm-5" id="projects">
            <hr/>
            <Row className="project">
                <Col xs={12} md={{span: 6}} lg={6} className="mt-3">
                    <JokeBoard />
                </Col>
                <Col xs={12} md={{span: 6}} lg={6} className="mt-3">
                    <ToDo />
                </Col>
            </Row>
            <Row className="project">
                <Col xs={12} md={{span: 6}} lg={6} className="mt-3">
                    <CrimeReport />
                </Col>
                <Col xs={12} md={{span: 6}} lg={6} className="mt-3">
                    <Location />
                </Col>
            </Row>
            <hr/>
        </Container>
    );
}