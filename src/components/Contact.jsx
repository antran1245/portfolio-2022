import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MessageBox from "../design/MessageBox";
import "../sass/contact.scss";

export default function Contact (props) {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        body: ""
    })
    const [error, setError] = useState({
        email: false,
        body: false
    })
    const submitHandle = async(e) => {
        e.preventDefault();
        let err = error;
        err.body = form.body === ""
        setError({...err})
        if(!err.body && !err.email) {
            window.location.href = `mailto:antran1245@gmail.com?subject=${form.subject}&body=${form.body}%0D%0A${form.name}`
        }
        console.log(err)
    }
    return(
        <section id="contact" ref={e => props.refer.current[4] = e}>
                <MessageBox box="otherMessageBox" size="w-50">
                    <p>How to contact you?</p>
                </MessageBox>
                <MessageBox box="messageBox">
                    <Row>
                        <Col xs={12} sm={6} className="d-flex flex-column pt-2 pt-sm-5 align-items-center">
                            <div className="pb-3" id="icon-box">
                                <a href="https://www.linkedin.com/in/an-tran1245/">
                                    <FontAwesomeIcon icon={faLinkedin} size="3x"/> 
                                    <p>an-tran1245</p>
                                </a>
                                <div className="mt-3">
                                    <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                                    <p>antran1245@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form onSubmit={submitHandle}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name <Form.Text className="text-dark">(Optional)</Form.Text></Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setForm({...form, name:e.target.value})}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Subject <Form.Text className="text-dark">(Optional)</Form.Text></Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject" onChange={(e) => setForm({...form, subject:e.target.value})}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Detail<span className="text-danger"> *</span></Form.Label>
                                    {error.body && <p className="text-danger">Detail is required</p>}
                                    <Form.Control as={"textarea"} rows={4} onChange={(e) => setForm({...form, body: e.target.value})}/>
                                </Form.Group>
                                <Row>
                                    <Col className="d-flex justify-content-end">
                                        <Button variant="primary" type="submit" className="w-50">Send</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                    </Row>
                </MessageBox>
            </section>
    );
}