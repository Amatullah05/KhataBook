import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import DashBorad from './Components/DashBorad';
import ListGroup from './Components/ListGroup';

const App = () => {
  const [transactions , setTransactions] = useState([]) 

  const [theme , setTheme] = useState(false)

  const changeTheme = () =>{
    if(theme){
      setTheme(false)
    }else{
      setTheme(true)
    }
    console.log(theme);
  }

  const removeTransaction = (id) =>{
    setTransactions(transactions.filter(item => item.id !== id))
  }
  
  const addTransactions = (text , amount , type) =>{
    setTransactions([{ id : crypto.randomUUID(), text : text , amount : parseInt(amount) , type}, ...transactions])
  }

  const [edit , setEdit] = useState({ transaction : {} , isEdit : false })

  const editTransaction = (transaction) => {
    setEdit({transaction : transaction , isEdit : true})
  }

  const updateTransaction = (id , text , amount , type) => {
    setTransactions(transactions.map((item)=> {
      if(item.id === id ){
        return {id , text , amount , type}
      }else{
        return item;
      }
    }))
    setEdit({transaction : {} , isEdit : false})
    // console.log(id, text , amount);
  };

  return (
    <>
      <Navbar changeTheme={changeTheme} theme = {theme}/>

      <div className={theme ? "container-fluid bg-success-subtle" : "container-fluid"} id='content'>
        <Form addTransactions={addTransactions} edit ={edit} updateTransaction={updateTransaction}/>
      
        <div className="row my-4 px-3" id='rows'>
          <DashBorad transactions = {transactions}/>
        </div>
          <ListGroup theme={theme} 
          transactions={transactions} 
          removeTransaction={removeTransaction} 
          editTransaction = {editTransaction}
          />
    </div>
    </>
  );
}

export default App;

