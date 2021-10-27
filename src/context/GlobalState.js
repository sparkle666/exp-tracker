import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// create anobject of states to manage all states that will be provided to the children
const initialState = {
    transactions: [
        {id : 1, text: "Urgent", amount: 2000},
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
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions}} >
            {children}  
        </GlobalContext.Provider>
    )
}