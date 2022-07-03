import { Card, Row, Col } from 'react-bootstrap';
import joke_board from "../../img/joke_board.png";

export default function JokeBoard() {
    return(
        <Card className="mt-2 mt-sm-0">
            <Card.Img src={joke_board} fluid="true" variant="top" height={350}/>
            <Card.Body>
                <Card.Title className='text-center'>Joke Board</Card.Title>
                <Card.Text className="text-center">
                    The website integrated with multiple jokes API for visitors to find joke and vote on whether or not they like the joke.
                </Card.Text>
                <Card.Text as={Row}>
                    <Col xs={6} md={{span: 6, offset: 1}} lg={{span: 6, offset: 1}}>
                        <b>Front End</b>
                        <br/><ul>
                            <li>JavaScript</li>
                            <li>CSS/SASS</li>
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
                        <a  href='https://github.com/antran1245/joke-board'>Github</a> |&nbsp;
                        <a href="http://54.145.154.50/">Live Link</a>
                    </b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}