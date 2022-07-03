import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import '../sass/frontpage.scss';

export default function FrontPage(props) {
    const text = "Hello. I'm An. \n I'm a Full Stack Developer."
    const [count, setCount] = useState(0)
    const [blink, setBlink] = useState(false)
    const [display, setDisplay] = useState([" "])

    useEffect(() => {
        let interval = setInterval(() => {
                setBlink(!blink)
                if(count <= text.length) {
                    setCount(count+1)
                    setDisplay([...display, text[count]])
                }
            }, 200)
        return () => clearInterval(interval)
    }, [blink, count, display])
    return(
        <Container id="frontpage">
                <Row>
                    <Col>
                        <h1>
                            {
                                display.map((item, i) => {
                                    if(item === '\n') {
                                        return <br key={i}/>
                                    } else {
                                        return<span key={i}>{item}</span>
                                    }
                                })
                            }
                            {
                                blink?
                                <span>&#65343;</span>:
                                <span style={{visibility:'hidden'}}>&#65343;</span>
                            }
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <button className="p-2"><a href="#projects">Have a look at my projects &#62;</a></button>
                    </Col>
                </Row>
        </Container>
    );
}