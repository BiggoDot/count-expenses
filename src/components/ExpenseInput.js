import React, {useState} from 'react';
import './ExpenseInput.css';

const ExpenseInput = ({header, types, minimum, maximum, steps, changeValue, inputValue}) => {
    return (
            <div className="new-expense__control">
                <label>{header}</label>
                <input type={types} min={minimum ? minimum : ''} 
                max={maximum ? maximum : ''} 
                step={steps ? steps : ''} onChange={changeValue} value={inputValue || ''}/>
            </div>
    );
}
export default ExpenseInput;