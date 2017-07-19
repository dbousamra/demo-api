
import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as lodash from 'lodash'

class CreateDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rounds: [1,2,3,4,5,6,7],
      playerName: "",
      demoUrl: "",
      roundsOfInterest: [],
      rank: "",
      comments: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmitDemoRequest = this.handleSubmitDemoRequest.bind(this)
  }

  handleInput(e, state) {
    this.setState({
      [state]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmitDemoRequest() {
    const request = {
      playerName: this.state.playerName,
      demoUrl: this.state.demoUrl,
      roundsOfInterest: this.state.roundsOfInterest,
      rank: this.state.rank,
      comments: this.state.comments
    }
    this.props.handleSubmitDemoRequest(request)
  }

  render() {

    const roundsToRadio = lodash.map(this.state.rounds, (round) => {
      return (
        <FormGroup check key={round}>
          <Label check>
            <Input type="radio" name="round" />{' '}
            {round}
          </Label>
        </FormGroup>
      )
    })

    const roundsOfInterest =
      <FormGroup tag="fieldset">
        <legend>Rounds of interest</legend>
        {roundsToRadio}
      </FormGroup>


    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Alias</Label>
          <Input type="text" name="playerName" id="playerName" placeholder="What's your alias?" onChange={(e) => this.handleInput(e, "playerName")}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Demo Url</Label>
          <Input type="text" name="demoUrl" id="demoUrl" placeholder="Demo url" onChange={(e) => this.handleInput(e, "demoUrl")}/>
        </FormGroup>
        {roundsOfInterest}
        <FormGroup>
          <Label for="comments">Comments</Label>
          <Input type="textarea" name="text" id="comments" onChange={(e) => this.handleInput(e, "comments")}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button onClick={this.handleSubmitDemoRequest}>Submit</Button>
      </Form>
    );
  }
}

export default CreateDemo;