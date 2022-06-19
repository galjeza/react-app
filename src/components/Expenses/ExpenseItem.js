import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const Container = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #3a3a3a;
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
  color: #eeeeee;
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
  color: #eeeeee;
  background-color: #3a3a3a;
  border: 1px solid #eeeeee;
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
    <Container className={props.className}>
      <ExpenseDate date={props.date} />
      <ExpenseItemDescription>
        <ExpenseTitle>{props.title}</ExpenseTitle>
        <ExpensePrice>{props.price}€</ExpensePrice>
      </ExpenseItemDescription>
    </Container>
  );
}
