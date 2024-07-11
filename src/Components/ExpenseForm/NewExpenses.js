import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
    const [showForm, setShowForm] = useState(false);

    const submitDataHandler = (expenseItem) => {
        const expense = { ...expenseItem, id: Math.random().toFixed(3) };
        props.onSubmitData(expense);
    };
    const collapseHandler = () => {
        setShowForm(!showForm);
    };
    console.log(showForm);
    return (
        <div>
            {showForm ? (
                <div className="container">
                    <ExpenseForm
                        onCollapse={collapseHandler}
                        onSubmitData={submitDataHandler}
                    />
                </div>
            ) : (
                <div className="container cancel">
                    <button
                        className="add-button"
                        onClick={() => setShowForm(!showForm)}
                    >
                        Add New Expenses
                    </button>
                </div>
            )}
            ;
        </div>
    );
};
export default NewExpenses;
