import React, {useState} from "react";
import Expense from "./Expense";
import './AllExpenses.css';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function AllExpenses({ expenses }) {
const [chosenYear, setChosenYaer] = useState('');

    function getExpenseYear (year) {
        setChosenYaer(year)
    }

    console.log(chosenYear)

    return (
        <div>
            <ExpenseFilter getExpenseYear={getExpenseYear}/>
            <Card className="all-expenses">
                {expenses.map((i) => <Expense key={i.id} expense={i}></Expense>)}
            </Card>
        </div>

    );
}

export default AllExpenses;