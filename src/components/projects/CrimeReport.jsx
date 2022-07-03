import { Card, Row, Col } from 'react-bootstrap';
import crime_report from "../../img/crime_report.png";

export default function CrimeReport() {
    return(
        <Card>
            <Card.Img src={crime_report} fluid="true" variant="top" height={250}/>
            <Card.Body>
                <Card.Title className='text-center'>Crime Report</Card.Title>
                <Card.Text className="text-center">
                    Display a portion of the crime reports in San Francisco onto a Google Map. Users are then be able to view some details about the crime.
                </Card.Text>
                <Card.Text as={Row}>
                    <Col xs={6} md={{span: 6, offset: 1}} lg={{span: 6, offset: 1}}>
                        <b>Front End</b>
                        <br/><ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={5}>
                        <b>Back End</b>
                        <br/><ul>
                            <li>Flask</li>
                            <li>MySQL</li>
                        </ul>
                    </Col>
                </Card.Text>
                <Card.Text as={Row} className="text-center">
                    <b>
                        <a  href='https://github.com/antran1245/crime_project'>Github</a>
                    </b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}