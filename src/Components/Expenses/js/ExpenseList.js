import ExpenseItem from "./ExpenseItem";
import "../css/ExpenseList.css";
const ExpenseList = (props) => {
    if (props.filteredExpense.length === 0) {
        return <h2 className="no-expense-msg">No Expenses for this year.</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.filteredExpense.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
