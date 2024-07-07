import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [inputData, setInputData] = useState({
        title: "",
        price: "",
        date: "",
    });

    const inputChangeHandler = (id, value) => {
        if (id === "title") {
            setInputData((prevState) => ({ ...prevState, title: value }));
        } else if (id === "price") {
            setInputData((prevState) => ({ ...prevState, price: value }));
        } else if (id === "date") {
            setInputData((prevState) => ({ ...prevState, date: value }));
        }
    };
    const submitHandler = (event) => {
        event.preventDefault();
        let fullDate = new Date(inputData.date);
        const expenseData = { ...inputData, date: fullDate };
        props.onSubmitData(expenseData);
        setInputData({
            title: "",
            price: "",
            date: "",
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="expense-form__controls">
                <div className="expense-form__control">
                    <label>Title</label>
                    <input
                        type="text"
                        title="Title here"
                        value={inputData.title}
                        onChange={(event) =>
                            inputChangeHandler("title", event.target.value)
                        }
                    />
                </div>
                <div className="expense-form__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={inputData.price}
                        onChange={(event) =>
                            inputChangeHandler("price", event.target.value)
                        }
                    />
                </div>
                <div className="expense-form__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={inputData.date}
                        onChange={(event) =>
                            inputChangeHandler("date", event.target.value)
                        }
                        required
                    />
                </div>
            </div>
            <div className="submit-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
