import React from 'react';
import { Header, Button, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import TransactionForm from './TransactionForm';

class Transaction extends React.Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <>
          {
            this.state.editing ?
              <TransactionForm { ...this.props } toggleEdit={this.toggleEdit} />
            :

             <StyledTrans>
            <Header as='h2' > {this.props.name} </Header>
            <StyledDiv>
              <Header as='h3' > ${this.props.amount} </Header>

              <div>
                <StyledIconBut
                  icon
                  size='small'
                  onClick={this.toggleEdit}
                >
                  <Icon name='pencil' />
                </StyledIconBut>
                <StyledIconBut
                  icon
                  size='small'
                  onClick={() => this.props.deleteTrans(this.props.id)}
                >
                  <Icon name='trash' />
                </StyledIconBut>
              </div>

          </StyledDiv>


        </StyledTrans>
           }
      </>
        )
      }
    }
    
    const StyledTrans = styled(Segment)`
      border-radius: 10px !important ;
      box-shadow: -4px 4px 0px 0px #000000 !important ;
      /* background: #e8eae6 !important ; */
      margin: 0 0 20px 0 !important;
    `
    const StyledIconBut = styled(Button)`
      background-color: transparent !important;
    `
    const StyledDiv = styled.div`
      display: flex;
      justify-content: space-between;
    `
    
export default Transaction;