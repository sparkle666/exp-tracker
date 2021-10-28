import {useState, useContext} from "react"
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)
    // Handle the form submission
    const handleSubmit = (e) => {
      // prevents form from submitting to server
      e.preventDefault()
      // Create a new transaction form the details gotten form the form and convert the string amount to int
      const newTransaction = {
        id: Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount //use the plus sign to convert to int
      }
      addTransaction(newTransaction) // send in the new transaction to the reducer.
      setText('')
      setAmount(0)
    }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit = {handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} 
          onChange = {(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input type="number" value = {amount} 
          onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
