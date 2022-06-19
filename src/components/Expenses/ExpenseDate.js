import styled from "styled-components";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  border: 2px solid #2a2a2a;
  background-color: #eeeeee;
  color: #2a2a2a;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const MonthWrapper = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;
const YearWrapper = styled.div`
  font-size: 0.75rem;
`;
const DayWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <DateWrapper>
      <MonthWrapper>{month}</MonthWrapper>
      <YearWrapper>{year}</YearWrapper>
      <DayWrapper>{day}</DayWrapper>
    </DateWrapper>
  );
};
export default ExpenseDate;
