import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
    const submitDataHandler = (expenseItem) => {
        const expense = { ...expenseItem, id: Math.random().toFixed(3) };
        props.onSubmitData(expense);
    };
    return (
        <div className="form">
            <ExpenseForm onSubmitData={submitDataHandler} />
        </div>
    );
};
export default NewExpenses;
