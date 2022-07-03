import { Card, Carousel, Row, Col } from "react-bootstrap";
import todo_morning from "../../img/todo_morning.png";
import todo_night from "../../img/todo_night.png";

export default function ToDo() {
    return(
        <Card className="h-100">
            <Carousel controls={false} interval={3000}>
                <Carousel.Item>
                    <Card.Img src={todo_morning} fluid="true" variant="top" height={350}/>
                    <Carousel.Caption>
                        Light Mode
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img src={todo_night} fluid="true" variant="top" height={350}/>
                    <Carousel.Caption>
                        Dark Mode
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className='text-center'>To Do</Card.Title>
                <Card.Text className="text-center">
                    An application for a user to add and display saved items from a MongoDB.
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
                    <Col xs={6} md={5}>
                        <b>Back End</b>
                        <br/><ul>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                    </Col>
                </Card.Text>
                <Card.Text as={Row} className="text-center">
                    <b>
                        <a  href='https://github.com/antran1245/todo'>Github</a>
                    </b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}