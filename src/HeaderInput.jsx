import React from "react";
import sky from "./1.png";
import styled from "styled-components";
import { sendResponse, getResponses } from "./store";
import { connect } from "react-redux";

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5em 0;
  border: none;
  background: yellow;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;

const mapDispatchToProps = dispatch => ({
  sendResponse: payload => dispatch(sendResponse(payload)),
  bla: () => dispatch(getResponses())
});

class HeaderInput extends React.Component {
  state = {
    name: "",
    text: "",
    lat: 0,
    lon: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendResponse(this.state);
  };

  async componentDidMount() {
    await this.props.bla();
  }

  render() {
    return (
      <div>
        <img alt="" style={{ width: "100%", height: "100vh" }} src={sky} />
        <Form onSubmit={this.handleSubmit}>
          I,
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
            required
          />
          <br /> imagine freedom as
          <input
            type="text"
            name="text"
            placeholder="response"
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
            required
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderInput);
