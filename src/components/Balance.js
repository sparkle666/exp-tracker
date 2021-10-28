import { GlobalContext} from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  // Map through all amount and add it as an array to total
  const arrAmount = transactions.map(transaction => transaction.amount)
  // use the reduce to loop and add all elements of array and make it 2 decimal places
  const sumTotal = arrAmount.reduce((prev, curr) => prev += curr, 0).toFixed(2)
  
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${sumTotal} </h1>
    </>
  );
};

export default Balance;
