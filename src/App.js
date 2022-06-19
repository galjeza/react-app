import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenses from "./expenses";
import Card from "./components/UI/Card";
import styled from "styled-components";

const ExpensesContainer = styled(Card)`
  padding: 1rem;
  background-color: rgb(31,31,31);
  margin: 2rem auto;
  width: 50rem;
  max-width:95%;
`


function App() {
  return (
    <ExpensesContainer>
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
    </ExpensesContainer>
  );
}

export default App;
