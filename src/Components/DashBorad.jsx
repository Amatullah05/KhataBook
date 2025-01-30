import React from 'react'

const DashBorad = ({transactions}) => {
    
    const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

    // console.log(income);

    const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

    // console.log(expense);

    const balance= transactions.reduce((p, c) => p + c.amount, 0);

    // console.log(balance);





    return (
    <>
        <div className="col-md-4 col-sm-12 p-4 column">
            Total Income
            <h3 className='mt-2'>{income}</h3>
        </div>
        <div className="col-md-4 col-sm-12 p-4 column">
            Total Expenses
            <h3 className='mt-2'>{expense}</h3>
        </div>
        <div className="col-md-4 col-sm-12 bg-warning p-4 column">
            Total Balance
            <h3 className='mt-2'>{balance}</h3>
        </div>
    </>
)
}

export default DashBorad;