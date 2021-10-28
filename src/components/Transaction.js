import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ transaction }) => {
  // Get the delete transaction from the context provider and use it
  const {deleteTransaction} = useContext(GlobalContext)
// Check the sign of the amount and add it in front of the jsx amount.
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} $ {Math.abs(transaction.amount)}{" "}
      </span>
      <button className="delete-btn" onClick = {() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

export default Transaction;
