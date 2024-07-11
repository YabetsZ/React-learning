import { useState } from "react";
import "../css/Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [changedYear, setChangedYear] = useState("2022");
    const changedFilterHandler = (year) => {
        setChangedYear(year);
    };

    const filteredExpense = props.data.filter(
        (expense) => expense.date.getFullYear() === Number(changedYear)
    );

    return (
        <Card className="expenses">
            <ExpenseFilter
                year={changedYear}
                onChangedFilter={changedFilterHandler}
            />
            <ExpenseList filteredExpense={filteredExpense} />
        </Card>
    );
}
export default Expenses;
