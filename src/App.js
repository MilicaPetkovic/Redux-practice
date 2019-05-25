import React from "react";
import "./App.css";
import Header from "./HeaderInput";
import Container from "./Container";
import { getResponses } from "./store";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  loadResponses: () => dispatch(getResponses())
});

class App extends React.Component {
  async componentDidMount() {
    await this.props.loadResponses();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
