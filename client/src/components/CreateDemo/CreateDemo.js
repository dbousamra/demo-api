
import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as lodash from 'lodash'

class CreateDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rounds: [1,2,3,4,5,6,7],
      playerName: null,
      demoUrl: null,
      roundsOfInterest: [],
      rank: null,
      comments: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmitDemoRequest = this.handleSubmitDemoRequest.bind(this)
    this.handleRoundsOfInterest = this.handleRoundsOfInterest.bind(this)
  }

  handleInput(e, state) {
    this.setState({
      [state]: e.target.value
    })
  }

  handleRoundsOfInterest(e) {
    const selected = lodash.filter(e.target.options, (option) => {
      return option.selected;
    });
    this.setState({"roundsOfInterest": lodash.map(selected, (o) => parseInt(o.value))})
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

    return (
      <div className="container-fluid">
        <Form>

          <FormGroup>
            <Label for="playerName">Alias</Label>
            <Input type="text" name="playerName" id="playerName" placeholder="What's your alias?" onChange={(e) => this.handleInput(e, "playerName")}/>
          </FormGroup>

          <FormGroup>
            <Label for="demoUrl">Demo Url</Label>
            <Input type="text" name="demoUrl" id="demoUrl" placeholder="Demo url" onChange={(e) => this.handleInput(e, "demoUrl")}/>
          </FormGroup>
      
          <FormGroup>
            <Label for="roundsOfInterest">Rounds of interest</Label>
            <Input type="select" name="roundsOfInterest" id="roundsOfInterest" multiple onChange={(e) => this.handleRoundsOfInterest(e)}>
              {lodash.chain(lodash.range(1, 17)).map((i) => {
                return (<option key={i}>{i}</option>)
              }).value()}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Rank</Label>
            <Input type="text" name="rank" id="rank" placeholder="Rank?" onChange={(e) => this.handleInput(e, "rank")}/>
          </FormGroup>
          <FormGroup>
            <Label for="comments">Comments</Label>
            <Input type="textarea" name="text" id="comments" onChange={(e) => this.handleInput(e, "comments")}/>
          </FormGroup>
          
          <Button onClick={this.handleSubmitDemoRequest}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CreateDemo;