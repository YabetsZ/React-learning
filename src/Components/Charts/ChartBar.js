import "./ChartBar.css";
const ChartBar = (props) => {
    let fillHeight = "0%";
    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return (
        <div className="bar">
            <div className="bar__fill">
                <div
                    className="bar__fill--level"
                    style={{ height: fillHeight }}
                ></div>
            </div>
            <div className="bar__label">{props.month}</div>
        </div>
    );
};
export default ChartBar;
