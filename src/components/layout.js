import React from 'react';
import '../css/layout.css';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './navbar';

export default () => {
  return (
    <div className="layout">
      <Container fluid>     
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row> 
        <Row>
          <Col xs="6"></Col>
          <Col xs="6"></Col>
        </Row>
      </Container>
    </div>
  )
}
