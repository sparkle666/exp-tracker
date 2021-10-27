import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); // Use destruc to pull out transactions from the global state
  
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
