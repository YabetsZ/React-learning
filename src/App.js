import Expenses from "./Components/Expenses/Expenses";

function App() {
  const data = [
    { title: "Chair", price: 150.75, date: new Date(2024, 8, 15) },
    { title: "Table", price: 210.6, date: new Date(2024, 10, 20) },
    { title: "Bed", price: 500.99, date: new Date(2024, 11, 25) },
    { title: "Cabinet", price: 120.45, date: new Date(2024, 12, 3) },
    { title: "Desk", price: 300.89, date: new Date(2024, 1, 5) },
  ];
  return (
    <div>
      <h1>Lets's start!!</h1>
      <Expenses data={data} />
    </div>
  );
}

export default App;
