import { Form, Button, Row, Col } from "react-bootstrap";

export default function Contact () {
    const submitHandle = (e) => {
        e.preventDefault();
    }
    return(
        <>
            <br id="contact"/>
            <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject <Form.Text className="text-muted">(Optional)</Form.Text></Form.Label>
                    <Form.Control type="text" placeholder="Enter subject"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control as={"textarea"} rows={4}/>
                </Form.Group>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button variant="primary" type="submit" className="w-50">Send</Button>
                    </Col>
                </Row>
            </Form>
            <hr />
        </>
    );
}