import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransactionContext';
function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0.0);



    const handleAddition = (event) => {


        event.preventDefault();
        if (Number(newAmount == 0)) {
            alert("please enter correct amount");
            return false;
        }

        console.log(newDesc, newAmount)
        addTransaction({
            Amount: Number(newAmount),

            Desc: newDesc
        });
        setDesc('');
        setAmount(0.0);
    }
    const getIncome = () => {
        let income = 0.0;
        for (var a = 0; a < transactions.length; a++) {
            if (transactions[a].Amount > 0) {
                income = income + transactions[a].Amount
            }
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0.0;
        for (var a = 0; a < transactions.length; a++) {
            if (transactions[a].Amount < 0)
                expense = expense + transactions[a].Amount

        }
        return expense;
    }
    return (
        <div className='container'>
            <div className='head'>
                <h1 >Expense Tracker<sub className='sub'> by WAQAR AHMED</sub></h1>
            </div>

            <h2 className='bal'>Your Balance <br /> ${getIncome() + getExpense()}</h2>
            <div className='incexp'>
                <h2>Income <br />${getIncome()}</h2>
                <h2>Expense <br />${getExpense()}</h2>
            </div>
            <h2 className='bal'>History</h2>
            <hr />
            <ul className='list'>
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.Desc}</span>
                        <span>{transObj.Amount}</span>
                    </li>);
                })}

            </ul>
            <h2 className='bal'>Add New Transaction</h2>
            <h5 className='bal'>Use "+"for Income "-" for Expense</h5>
            <hr />
            <div>
                <form onSubmit={handleAddition}>
                    <label className='bal'>
                        Enter Description <br />
                        <input type='text'
                            onChange={(ev) => setDesc(ev.target.value)}
                            required />
                        <br />
                    </label>
                    <label className='bal'>
                        Enter Amount <br />
                        <input type='number' onChange={(ev) => setAmount(ev.target.value)} required />
                        <br />
                    </label>
                    <br />
                    <input type='submit' className='bal' value='Add transction' />
                </form>
            </div>
        </div>
    )
}
export default Child;