import React from "react";
import { Alert, Row, Col } from 'reactstrap';
import axios from 'axios';
import CreateDemo from './CreateDemo/CreateDemo';

class Root extends React.Component {

  constructor() {
    super();
    this.handleSubmitDemoRequest = this.handleSubmitDemoRequest.bind(this)
  }

  handleSubmitDemoRequest(demoRequest) {
    axios.post('/demorequest', demoRequest).then((res) => {
      console.log("test worked")
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <CreateDemo handleSubmitDemoRequest={this.handleSubmitDemoRequest}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Root;