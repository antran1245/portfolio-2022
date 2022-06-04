import { Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import '../sass/frontpage.scss';

export default function FrontPage(props) {
    const text = "Hello. I'm An. \n I'm a Full Stack Developer."
    const [count, setCount] = useState(0)
    const [blink, setBlink] = useState(false)
    const [display, setDisplay] = useState([])
    const {show, setShow} = props;

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
        <Container fluid id="frontpage" style={{display: show?'flex':'none'}}>
                <Row>
                    <p>
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
                    </p>
                </Row>
                <Row>
                    <Button className="p-2" onClick={() => setShow(false)}>Have a look at my work &#62;</Button>
                </Row>
        </Container>
    );
}