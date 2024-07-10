import "../css/ExpenseFilter.css";
const ExpenseFilter = (props) => {
    const changeHandler = (event) => {
        props.onChangedFilter(event.target.value);
    };
    return (
        <div className="filter-items">
            <label>Filter by year</label>
            <select value={props.year} onChange={changeHandler}>
                <option value="">Nothing</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;
