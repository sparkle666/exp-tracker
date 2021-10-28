const Transaction = ({ transaction }) => {
  // Check the sign of the amount and add it in front of the jsx amount.
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} $ {Math.abs(transaction.amount)}{" "}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
