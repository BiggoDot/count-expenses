import React, { useEffect, useState } from "react";
import AllExpenses from "./components/AllExpenses";
import NewExpense from "./components/NewExpense";
import initialExpenses from "./utils/constants";

function App() {
const [newExpense, setNewExpense] = useState(initialExpenses);

  function getNewExpenses(expense) {
    setNewExpense(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense getNewExpenses={getNewExpenses}/>
      <AllExpenses expenses={newExpense}/>
    </div>
  );
}

export default App;
