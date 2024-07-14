import Charts from "../../Charts/Charts";

const ExpenseChart = (props) => {
    let chartExpense = [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
        { month: "Apr", value: 0 },
        { month: "May", value: 0 },
        { month: "Jun", value: 0 },
        { month: "Jul", value: 0 },
        { month: "Aug", value: 0 },
        { month: "Sep", value: 0 },
        { month: "Oct", value: 0 },
        { month: "Nov", value: 0 },
        { month: "Dec", value: 0 },
    ];
    try {
        for (let data of props.filteredExpense) {
            let index = data.date.getMonth();
            chartExpense[index].value += data.price;
        }
    } catch (error) {
        console.log("error here!");
    }

    return <Charts chartExpense={chartExpense} />;
};
export default ExpenseChart;
