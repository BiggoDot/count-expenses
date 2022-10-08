import './ExpensesList.css';
import Expense from "./Expense";

const ExpensesList = ({filteredExpenses}) => {

return (
    <ul className="expenses-list">
    { filteredExpenses.length === 0 ? <h2 className="expenses-list__fallback">No expenses found</h2> 
    : filteredExpenses.map((i) => <Expense key={i.id} expense={i}></Expense>)}
        </ul>
);
}

export default ExpensesList;