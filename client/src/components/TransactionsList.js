import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, updateTrans, deleteTrans }) => {
  <>
    { transactions.map( transaction => 
        <Transaction
          key={transaction.id}
          {...transaction}
          updateTrans={ updateTrans }
          deleteTrans={ deleteTrans }
        />
      )
    }
  </>
}

export default TransactionList;