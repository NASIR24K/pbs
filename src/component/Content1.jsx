import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Style.css';

import '../CSS/Footer.css';

const Content1 = () => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={4}>
          <img src="./src/pbs/header_first/1.PNG" className="img-fluid" alt="" />
        </Col>
        <Col md={4}>
          <img src="./src/pbs/header_first/2.PNG" className="img-fluid" alt="" />
        </Col>
        <Col md={4}>
          <img src="./src/pbs/header_first/3.PNG" className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Content1;
