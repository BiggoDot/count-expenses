import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function Expense ({expense}) {

    return (
        <Card className="expense-item">
            <ExpenseDate expense={expense}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <div className="expense-item__price">{expense.amount}</div>
            </div>
        </Card>
    )

}

export default Expense;