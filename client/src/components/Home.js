import React from 'react';
import axios from 'axios';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';
// import TransactionList from './TransactionsList';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

class Home extends React.Component {
  state = { transactions: [] };


  // Grab all the transactions
  componentDidMount() {
    axios.get('/api/transactions')
      .then(res => {
        this.setState({ transactions: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }


  // Where we create our transaction
  addTrans = ( name, amount ) => {
    axios.post('/api/transactions', { name, amount })
      .then(res => {
        const { transactions } = this.state
        this.setState({ transactions: [...transactions, res.data] });
      })

  }

  // Where we update the transaction
  updateTrans = (d) => {
    // debugger
    const { name, amount } = d
    axios.put(`/api/transactions/${d.id}`, {name, amount})
      .then(res => {
        // debugger
        const transactions = this.state.transactions.map(t => {
          if (t.id === d.id)
            return res.data;
          return t;
        });
        this.setState({ transactions });
      })
  }

  // Where we delete the transaction
  deleteTrans = (id) => {
    axios.delete(`/api/transactions/${id}`)
      .then(res => {
        const { transactions } = this.state
        this.setState({ transactions: transactions.filter(t => t.id !== id) })
      })
  }

  renderTrans = () => {
    if (this.state.transactions.length <=0)
      return <Header as='h1'>No Transactions</Header>

    return (
       this.state.transactions.map( transaction =>( 
        <Transaction
          key={transaction.id}
          {...transaction}
          updateTrans={ this.updateTrans }
          deleteTrans={ this.deleteTrans }
        />
      
       )
    ).reverse())
  }

  render() {
    return (
      <>
        <StyledHeader as='h1'>Transactions</StyledHeader>
        <TransactionForm 
          addTrans={this.addTrans} 
          />
        { this.renderTrans() }
      </>
    )
  }
}

const StyledHeader = styled(Header)`
  border-bottom: 2px solid black !important;
`

// const StyledDiv = styled.div`
//   background-color: #f6f4e9;
// `


export default Home;