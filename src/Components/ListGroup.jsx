import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({theme , transactions , removeTransaction, editTransaction}) => {
  return (
    <>
        <ul className='list-group'>
        {
          transactions.map((transactions) => (
            <ListItem theme={theme} 
            transactions={transactions} 
            key={transactions.id} 
            removeTransaction={removeTransaction} 
            editTransaction={editTransaction}/>
          ))
        }
        {/* <ListItem theme={theme} transactions={transactions}/> */}
        </ul>
    </>
  )
}

export default ListGroup