import React from 'react'

const ListItem = ({theme , transactions , removeTransaction , editTransaction}) => {
  return (
    <>
    <li className={theme ? 'list-group-item bg-dark text-white' : 'list-group-item'}>
            {/* <p>{transactions.id}</p> */}
            <h4>{transactions.text}</h4>
            <h1>{transactions.amount}</h1>
            <span className='float-end'>
            <button className='btn btn-warning btn-sm me-2' onClick={() => editTransaction(transactions)}>Edit</button>
            <button className='btn btn-danger btn-sm' onClick={() => removeTransaction(transactions.id)}>Delete</button>
            </span>
        </li>
        {/* <li className={theme ? 'list-group-item bg-dark text-white' : 'list-group-item' }>
            <h4>Expenses</h4>
            <h1>50000</h1>
            <span className='float-end'>
            <button className='btn btn-warning btn-sm me-2'>Edit</button>
            <button className='btn btn-danger btn-sm'>Delete</button>
            </span>
        </li> */}
    </>
  )
}

export default ListItem