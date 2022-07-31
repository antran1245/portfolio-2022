import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MessageBox from "../design/MessageBox";
import "../sass/contact.scss";

export default function Contact (props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
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
        err.email = form.email === ""
        setError({...err})
        if(!err.body && !err.email) {
            window.location.href = `mailto:antran1245@gmail.com?subject=${form.subject}&body=${form.body}%0D%0A${form.name}%0D%0A${form.email}`
        }
        console.log(err)
    }
    return(
        <section id="contact" ref={e => props.refer.current[3] = e}>
                <MessageBox box="otherMessageBox">
                    <p>How to contact you?</p>
                </MessageBox>
                <MessageBox box="messageBox">
                    <Form onSubmit={submitHandle}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name <Form.Text className="text-white">(Optional)</Form.Text></Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setForm({...form, name:e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address<span className="text-danger">*</span></Form.Label>
                            {error.email && <p className="text-danger">Email is required</p>}
                            <Form.Control type="text" placeholder="Enter email" onChange={(e) => setForm({...form, email:e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject <Form.Text className="text-white">(Optional)</Form.Text></Form.Label>
                            <Form.Control type="text" placeholder="Enter subject" onChange={(e) => setForm({...form, subject:e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Detail<span className="text-danger">*</span></Form.Label>
                            {error.body && <p className="text-danger">Detail is required</p>}
                            <Form.Control as={"textarea"} rows={4} onChange={(e) => setForm({...form, body: e.target.value})}/>
                        </Form.Group>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <Button variant="primary" type="submit" className="w-50">Send</Button>
                            </Col>
                        </Row>
                    </Form>
                </MessageBox>
            </section>
    );
}