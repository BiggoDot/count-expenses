import './Expense.css';
import ExpenseDate from './ExpenseDate';

function Expense ({expense}) {

    return (
        <div className="expense-item">
            <ExpenseDate expense={expense}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <div className="expense-item__price">{expense.amount}</div>
            </div>
        </div>
    )

}

export default Expense;