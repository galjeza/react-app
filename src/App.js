import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import expenses from "./expenses";

function App() {
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
