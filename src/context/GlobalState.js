import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// create anobject of states to manage all states that will be provided to the children
const initialState = {
    transactions: [
        {id : 1, text: "Urgent 2K", amount: 2000},
        {id : 2, text: "Nepa Bills", amount: -160},
        {id : 3, text: "Lawn", amount: -30},
        {id : 4, text: "Kdp income", amount: 200},
    ]
}

// create a context, pass in the state to the global context

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    // the useReducer hook takes in a reducer and state
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // console.log(state)
    // actions for the reducer
    const deleteTransaction = (id) => {
        // dispatch an action of type delete and a payload of id of the transaction
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions, deleteTransaction, addTransaction}} >
            {children}  
        </GlobalContext.Provider>
    )
}