import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const arrAmount = transactions.map((val) => val.amount) // get a list of all amounts in transaction
  // get a list of amount > 0, sum it up and make it 2 decimal places
  const income = arrAmount.filter((val) => val > 0).reduce((a, b) => (a += b), 0).toFixed(2)
  // gets a list of amounts less than 0, sum the list up and make it 2 decimals
  const expenses = arrAmount.filter((val) => val < 0).reduce((a, b) => (a += b), 0).toFixed(2) * -1


  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            ${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expenses}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
