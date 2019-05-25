import React from 'react';
import sky from "./1.png"
import styled from "styled-components"


const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5em 0;
  border: none;
  background: yellow;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`


class HeaderInput extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
  }

  render() {
    return (
    <div>
      <img alt="" style={{width: "100%", height: "100vh"}} src={sky}></img>
      <Form onSubmit={this.handleSubmit}>
        I, 
        <input type="text" name="name" placeholder="name"></input> <br/> imagine freedom as
        <input type="text" name="name" placeholder="response"></input> <br/>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </div>
  )
  }
}

export default HeaderInput
