import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
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
        <section id="frontpage" ref={e => props.refer.current[0] = e}>
            <div id="computer">
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
                        <button className="p-2" onClick={props.scrollToProject}>Have a look at my projects &#62;</button>
                    </Col>
                </Row>
            </div>
            <div className="stand"></div>
            <div id="keyboard"></div>
        </section>
    );
}