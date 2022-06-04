import { Col, Image, Modal, Row } from "react-bootstrap";
import joke_board from "../img/joke_board.png";
import crime_report from "../img/crime_report.png";
import todo_morning from "../img/todo_morning.png";
import todo_night from "../img/todo_night.png";
import "../sass/project.scss";
import { useState } from "react";

export default function Projects() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState([]);

    const handleShow = (imageArr) => {
        setImage([...imageArr]);
        setShow(true);
    }

    return(
        <>  
            <Modal size="xl" centered show={show} onHide={() => setShow(false)}>
                <Image src={image[0]} />
            </Modal>
            <Row className="mt-3 project">
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <Image src={joke_board} fluid className="h-100" onClick={() => handleShow([joke_board])}/>
                </Col>
            </Row>
        </>
    );
}