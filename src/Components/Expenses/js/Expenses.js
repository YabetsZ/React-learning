import { useState, useMemo } from "react";
import "../css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [changedYear, setChangedYear] = useState("");
    const changedFilterHandler = (year) => {
        setChangedYear(year);
    };

    const filterResult = useMemo(() => {
        if (changedYear === "") {
            return props.data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                />
            ));
        } else {
            return props.data
                .filter(
                    (expense) =>
                        expense.date.getFullYear() === Number(changedYear)
                )
                .map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        price={expense.price}
                        date={expense.date}
                    />
                ));
        }
    }, [changedYear, props.data]);
    // console.log(typeof props.data[0].date.getFullYear());
    return (
        <Card className="expenses">
            <ExpenseFilter
                year={changedYear}
                onChangedFilter={changedFilterHandler}
            />
            {filterResult}
        </Card>
    );
}
export default Expenses;
