import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.05rem;
  margin: 1rem 0;
  border-radius: 10px;
  background-color: #eeeeee;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const ExpenseTitle = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  @media (main-width: 500px) {
    font-size: 1.25rem;
  }
`;

const ExpensePrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #3a3a3a;
  background-color: #eeeeee;
  border: 1px solid #3a3a3a;
  padding: 0.5rem;
  border-radius: 12px;
  @media (main-width: 500px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

export default function ExpenseItem(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Container>
      <ExpenseDate date={props.date} />
      <ExpenseItemDescription>
        <ExpenseTitle>{props.title}</ExpenseTitle>
        <ExpensePrice>{props.price}€</ExpensePrice>
      </ExpenseItemDescription>
    </Container>
  );
}
