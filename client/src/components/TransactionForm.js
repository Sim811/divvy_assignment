import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

class TransactionForm extends React.Component {
  state = { name: '', amount: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value,});
  }

  handleSubmit = (e) => {
    const { name, amount } = this.state;
    e.preventDefault();
    if (this.props.id) {
      // debugger
      // console.log( this.props.id,{ ...this.state })
      this.props.updateTrans({ id: this.props.id, ...this.state });
      this.props.toggleEdit();
      
    } else {
      this.props.addTrans( name, amount );
    }
      this.setState({ name: '', amount: '' });
  }

  render() {
    const { name, amount } = this.state;

    return (
      <StyledDiv>

        <Form onSubmit={this.handleSubmit} >
          <Form.Group >
            <StyledFormInput
              label='Transaction Name'
              placeholder='ex. gas, food, haircut, etc.'
              required
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <StyledFormInput
              label='Amount'
              placeholder='ex. 19.99'
              required
              name='amount'
              value={amount}
              onChange={this.handleChange}
            />
          </Form.Group>
          <StyledButton type='submit' onClick={this.handleSubmit}>Submit</StyledButton>
        </Form>
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
  margin-bottom: 10px;
`

const StyledButton = styled(Button)`
  border: 2px solid black !important; 
  border-radius: 10px !important;
  background-color: transparent !important;
  color: black !important;

  &:hover {
    background-color: black !important;
    color: #e8eae6 !important;
  }
`
const StyledFormInput = styled(Form.Input)`
  input {
    border-radius: 10px !important;
  }
`

export default TransactionForm;