import React, { useState } from 'react';
import ExpenseInput from "./ExpenseInput";
import './NewExpense.css';

const NewExpense = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputAmount, setInputAmount] = useState('');

    function changeTitle(e) {
        setInputTitle(e.target.value)
    }

    function changeDate(e) {
        setInputDate(e.target.value)
    }

    function changeAmount(e) {
        setInputAmount(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();

        const newExpense = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate),

        };

        console.log(newExpense)

    //    return newExpense;

    }

    return (
        <div className="new-expense">
            <form onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <ExpenseInput header={'Title'} types={'text'} inputValue={inputTitle}
                        changeValue={changeTitle} />
                    <ExpenseInput header={'Amount'} types={'number'} minimum={'0.01'}
                        step={'0.01'} inputValue={inputAmount} changeValue={changeAmount} />
                    <ExpenseInput header={'Date'} types={'date'} minimum={'2019-01-01'}
                        maximum={'2022-12-31'} inputValue={inputDate} 
                        changeValue={changeDate} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>

    );
}

export default NewExpense;