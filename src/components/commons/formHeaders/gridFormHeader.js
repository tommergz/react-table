import React from 'react';
import { ButtonGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';

import { ALIGN_AUTO, ALIGN_START, ALIGN_SMART, ALIGN_END, ALIGN_CENTER } from '../constants/formHeaderConstants';

const FormHeader = (props) => {
    return (
        <Container className='formHeader'>
            <Row>
                <Col aria-colspan={4}>
                    <h2 className='formTitle'>{props.formHeader}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control type="number" placeholder="Enter row number" onChange={props.onUpdateScrollToRow}/>
                </Col>
                <Col>
                    <Form.Control type="number" placeholder="Enter column number" onChange={props.onUpdateScrollToColumn}/>
                </Col>
                <Col>
                <ButtonGroup onClick={props.onUpdateAlign}>
                <Button variant="secondary" value={ALIGN_AUTO}>Auto</Button>
                    <Button variant="secondary" value={ALIGN_SMART}>Smart</Button>
                    <Button variant="secondary" value={ALIGN_CENTER}>Center</Button>
                    <Button variant="secondary" value={ALIGN_END}>End</Button>
                    <Button variant="secondary" value={ALIGN_START}>Start</Button>
                </ButtonGroup>
                </Col>
                <Col>
                    <Button variant="success" onClick={props.onScrollTo}>Search</Button>
                </Col>
            </Row>
        </Container>);
}

export default FormHeader;