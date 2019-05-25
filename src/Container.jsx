import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import moment from "moment";

const mapStateToProps = state => ({
  responses: state.responses
});

class Container extends Component {
  render() {
    console.log(this.props.responses);
    return (
      <div style={{ height: "100vh", textAlign: "center" }}>
        {this.props.responses.map(response => {
          return (
            <div key={response.id}>
              <p>{moment(response.created).fromNow()} New York</p>
              <h3>
                <span> For </span> {response.name} <span>freedom</span> is{" "}
                {response.text}
              </h3>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Container);
