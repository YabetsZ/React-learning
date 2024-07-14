import ChartBar from "./ChartBar";
import "./Charts.css";
const Charts = (props) => {
    const dataValues = props.chartExpense.map((data) => data.value);
    const maxValue = Math.max(...dataValues);
    return (
        <div className="charts">
            {props.chartExpense.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.month}
                    month={dataPoint.month}
                    value={dataPoint.value}
                    maxValue={maxValue}
                />
            ))}
        </div>
    );
};
export default Charts;
