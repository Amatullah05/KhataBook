import React, { useEffect, useState } from 'react'

const Form = ({addTransactions , edit , updateTransaction}) => {

  // console.log(edit);

  const [ text , setText] = useState("")
  const [ amount , setAmount] = useState()
  const [type, setType] = useState("Credit"); // New state for transaction type

  const handleSubmit = (e) =>{
    e.preventDefault();
    const parsedAmount = parseInt(amount)
    if(edit.isEdit){
      updateTransaction(edit.transaction.id, text, parsedAmount , type)
    }else {
    addTransactions(text , parsedAmount , type)
    }
    setText("")
    setAmount("")
    setType("Credit");
}

useEffect(() =>{
  setText(edit.transaction.text);
  setAmount(edit.transaction.amount)
  setType(edit.transaction.type || "credit");
}, [edit])

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}> 
    <input type="text" className="form-control mb-3" onChange={(e) => setText(e.target.value)} 
    value={text}
    placeholder="Enter Transaction"
    required
    />

    <input type="number" className="form-control mb-3" onChange={(e)=> setAmount(e.target.value)} 
    value={amount}
    placeholder="Enter Amount"
    required
    />

    {/* Dropdown for transaction type */}
    <select
    className="form-control mb-3"
    onChange={(e) => setType(e.target.value)}
    value={type}
    required
    >
    <option value="credit">Credit </option>
    <option value="debit">Debit </option>
    </select>

    <button className="btn bg-success w-100 text-white" id='button' type="submit">Save Transaction</button>
    </form>
    </>
  )
}

export default Form;




  // edit.isEdit ? 
    // updateTransaction({id : edit.transaction.id ,  parsedAmount : parsedAmount , text}) 
    // : addTransactions(amount ,transaction)