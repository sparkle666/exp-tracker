import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction"

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); // Use destruc to pull out transactions from the global state
  
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => <Transaction key = { transaction.id } transaction = {transaction} /> )}
      </ul>
    </div>
  );
};

export default TransactionList;
