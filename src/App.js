import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const data = [
    { title: "Chair", price: 150.75, date: new Date(2024, 4, 15) },
    { title: "Table", price: 210.6, date: new Date(2024, 5, 20) },
    { title: "Bed", price: 500.99, date: new Date(2024, 6, 25) },
    { title: "Cabinet", price: 120.45, date: new Date(2024, 7, 30) },
    { title: "Desk", price: 300.89, date: new Date(2024, 8, 5) },
  ];
  return (
    <div>
      <h1>Lets's start!!</h1>
      <ExpenseItem
        title={data[0].title}
        price={data[0].price}
        date={data[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={data[1].title}
        price={data[1].price}
        date={data[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={data[2].title}
        price={data[2].price}
        date={data[2].date}
      ></ExpenseItem>
    </div>
  );
};

export default App;
