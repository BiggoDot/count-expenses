import Expense from "./Expense";
import './AllExpenses.css';

function AllExpenses({ expenses }) {

    return (
    <div className="all-expenses">
        {expenses.map((i) => <Expense key={i.id} expense={i}></Expense>)}
    </div>

    );
}

export default AllExpenses;