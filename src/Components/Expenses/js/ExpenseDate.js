import "../css/ExpenseDate.css";
import Card from "../../UI/Card";

function ExpenseDate(props) {
    const day = props.date.toLocaleDateString("en-US", { day: "numeric" });
    const month = props.date.toLocaleDateString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </Card>
    );
}
export default ExpenseDate;
