import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import './AllExpenses.css';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function AllExpenses({ expenses }) {
const [chosenYear, setChosenYear] = useState('');
const filteredExpenses = expenses.filter((i) => i.date.getFullYear().toString() === chosenYear)

    function getExpenseYear (year) {
        setChosenYear(year)
    }

    return (
        <div>
            <Card className="all-expenses">
            <ExpenseFilter getExpenseYear={getExpenseYear}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default AllExpenses;