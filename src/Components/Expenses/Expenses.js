import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [changedYear, setChangedYear] = useState("2019");
    const changedFilterHandler = (year) => {
        setChangedYear(year);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter onChangedFilter={changedFilterHandler} />
            <p>These are filters for year {changedYear} </p>
            <ExpenseItem
                title={props.data[0].title}
                price={props.data[0].price}
                date={props.data[0].date}
            />

            <ExpenseItem
                title={props.data[1].title}
                price={props.data[1].price}
                date={props.data[1].date}
            />

            <ExpenseItem
                title={props.data[2].title}
                price={props.data[2].price}
                date={props.data[2].date}
            />
        </Card>
    );
}
export default Expenses;
