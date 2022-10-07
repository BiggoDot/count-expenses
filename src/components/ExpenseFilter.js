import React, {useState} from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = ({getExpenseYear}) => {
const [year, setYear] = useState(chooseNumber())

function chooseNumber (e) {
    setYear(e.target.value)
    getExpenseYear(e.target.value)
}

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={chooseNumber} value={year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;