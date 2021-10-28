const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      // Check if the type in the dispatch matches and then returns the current state and filter off the id
      // be deleted
      return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      // IF the dispatch action is ADD then add the new transaction payload to the transactions object
      // and spread and pass in the old state.
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
};

export default AppReducer;
