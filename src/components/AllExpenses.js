import Expense from "./Expense";
import './AllExpenses.css';
import Card from "./Card";

function AllExpenses({ expenses }) {

    return (
    <Card className="all-expenses">
        {expenses.map((i) => <Expense key={i.id} expense={i}></Expense>)}
    </Card>

    );
}

export default AllExpenses;