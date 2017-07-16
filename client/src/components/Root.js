import React from "react";
import { Alert, Row, Col } from 'reactstrap';
import CreateDemo from './CreateDemo/CreateDemo';

class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <CreateDemo/>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Root;