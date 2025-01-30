import React, { useEffect, useState } from 'react'

const Form = ({addTransactions , edit , updateTransaction}) => {

  // console.log(edit);

  const [ text , setText] = useState("")
  const [ amount , setAmount] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const parsedAmount = parseInt(amount)
    if(edit.isEdit){
      updateTransaction(edit.transaction.id, text, parsedAmount)
    }else {
    addTransactions(text , parsedAmount)
    }
    setText("")
    setAmount("")
}

useEffect(() =>{
  setText(edit.transaction.text);
  setAmount(edit.transaction.amount)
}, [edit])

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}> 
    <input type="text" className="form-control mb-3" onChange={(e) => setText(e.target.value)} 
    value={text}
    placeholder="Enter Transaction"/>

    <input type="number" className="form-control mb-3" onChange={(e)=> setAmount(e.target.value)} 
    value={amount}
    placeholder="Enter Amount"/>

    <button className="btn bg-success w-100 text-white" id='button' type="submit">Save Transaction</button>
    </form>
    </>
  )
}

export default Form;




  // edit.isEdit ? 
    // updateTransaction({id : edit.transaction.id ,  parsedAmount : parsedAmount , text}) 
    // : addTransactions(amount ,transaction)