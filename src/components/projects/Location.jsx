import { Card, Row, Col } from 'react-bootstrap';
import location from '../../img/location.png';
import { useState } from 'react';

export default function CrimeReport() {
    const [hover, setHover] = useState(false);
    return(
        <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {
                hover?
                <Card.Img className='overlay' fluid="true" variant="top" height={350}/>:
                <Card.Img src={location} fluid="true" variant="top" height={350}/>
            }
            {
                hover &&
                <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                    <Card.Title className='text-center'>Location</Card.Title>
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
                </Card.ImgOverlay>
            }
        </Card>
    );
}