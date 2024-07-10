import React, { useState } from "react";
import Expenses from "./Components/Expenses/js/Expenses";
import NewExpenses from "./Components/ExpenseForm/NewExpenses";

const DUMMY_DATA = [
    { id: "1", title: "Chair", price: 150.75, date: new Date(2019, 8, 15) },
    { id: "2", title: "Table", price: 210.6, date: new Date(2022, 10, 20) },
    { id: "3", title: "Bed", price: 500.99, date: new Date(2021, 11, 25) },
    { id: "4", title: "Cabinet", price: 120.45, date: new Date(2020, 11, 3) },
    { id: "5", title: "Desk", price: 300.89, date: new Date(2019, 1, 5) },
];

function App() {
    const [data, setData] = useState(DUMMY_DATA);

    const submitDataHandler = (expense) => {
        setData((prevData) => [expense, ...prevData]);
    };

    return (
        <div>
            <NewExpenses onSubmitData={submitDataHandler} />
            <Expenses data={data} />
        </div>
    );
}

export default App;
