import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqpic from './faq.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FAQ = () => {
    return (
        <Row className='container mt-4 mb-3'>
            <Col sm={8}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who can do these course?</Accordion.Header>
                        <Accordion.Body>
                            Anyone, who has a pure thirst of learning something new and interesting can do our courses.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do I need any previous knowledge of programming?</Accordion.Header>
                        <Accordion.Body>
                            It is not mandatory to have programming knowledge but having previous knowledge is a plus.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What kind of learning support do you provide for students?</Accordion.Header>
                        <Accordion.Body>
                            To provide better learning oppertunity we have dedicated support sessions 3 times everyday. We have one conceptual sessions in each week. All student have lifetime access to the course and to the git repository.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do you provide any certification?</Accordion.Header>
                        <Accordion.Body>
                            Yes, each student will receive a certificate from us upon successfull completion of the course.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col className='mt-3'>
                <img src={faqpic} className='img-fluid' alt="" />
            </Col>
        </Row>
    );
};

export default FAQ;