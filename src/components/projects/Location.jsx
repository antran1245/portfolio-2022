import { Card, Row, Col } from 'react-bootstrap';
import crime_report from "../../img/crime_report.png";

export default function CrimeReport() {
    return(
        <Card>
            <Card.Img src={crime_report} fluid="true" variant="top" height={300}/>
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Text className="text-center">
                    A mobile application to help prevent users from being ticketed for not moving their cars when there is street cleaning by notification.
                </Card.Text>
                <Card.Text as={Row}>
                    <Col xs={6} md={{span: 6, offset: 1}} lg={{span: 6, offset: 1}}>
                        <b>Front End</b>
                        <br/><ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>React</li>
                            <li>Expo</li>
                        </ul>
                    </Col>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}