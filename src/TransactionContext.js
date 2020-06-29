import React, { createContext, useReducer } from 'react';
import TransReducer from './TransReducer';

const InitialTrans = [
    
    
]
export const TransactionContext = createContext(InitialTrans);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransReducer, InitialTrans);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                Amount: transObj.Amount,
                Desc: transObj.Desc
            }
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}