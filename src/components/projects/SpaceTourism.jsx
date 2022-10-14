import { Card, Row, Col } from "react-bootstrap";
import space_tourism from "../../img/space_tourism.png";

export default function SpaceTourism() {
    return(
        <Card className="mt-2 mt-sm-0 h-100">
            <Card.Img src={space_tourism} fluid="true" variant="top" height={250}/>
            <Card.Body>
                <Card.Title className="text-center">Space Tourism</Card.Title>
                <Card.Text className="text-center">
                    Responsive landing page for space tourism. Created based on a Figma Design.
                </Card.Text>
                <Card.Text as={Row}>
                    <Col xs={6} md={{span: 6, offset: 1}} lg={{span: 6, offset: 1}}>
                        <b>Front End</b>
                        <br/><ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>React</li>
                        </ul>
                    </Col>
                </Card.Text>
                <Card.Text as={Row} className="text-center">
                    <b>
                        <a href='https://github.com/antran1245/space-tourism'>Github</a> |&nbsp;
                        <a href="https://antran1245.github.io/space-tourism/">Live Link</a>
                    </b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}