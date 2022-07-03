import { Col, Container, Row } from "react-bootstrap";
import JokeBoard from "./projects/JokeBoard";
import ToDo from "./projects/ToDo";
import CrimeReport from "./projects/CrimeReport";
import Location from './projects/Location';
import "../sass/project.scss";

export default function Projects() {

    return(
        <>
            <br id="projects"></br>
            <Container className="mt-0 mt-sm-5">
                <hr/>
                <Row className="project">
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
                <hr/>
            </Container>
        </>
    );
}