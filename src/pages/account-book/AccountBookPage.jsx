import { useState } from "react";
import { styled } from "styled-components";

import Expense from "../../components/account-book/Expense.jsx";
import ExpenseInfomation from "../../components/account-book/ExpenseInfomation.jsx";
import MonthlyExpense from "../../components/account-book/MonthlyExpense.jsx";
import DailyExpense from "../../components/account-book/DailyExpense.jsx";

const Container = styled.div`
  margin: 8px 32px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 8px 0;
  border: none;
  border-radius: 6px;
  background-color: rgba(217, 74, 86, 1);
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;

const initialExpense = 700000;
const initialExpenseChange = 105000; // 양수 -> 지출 증가 / 음수 -> 지출 감소
const initialMonthlyData = [
  {
    id: 1,
    name: "악세서리",
    value: 80000,
  },
  {
    id: 2,
    name: "간식",
    value: 25000,
  },
  {
    id: 3,
    name: "생활용품",
    value: 44000,
  },
  {
    id: 4,
    name: "영양제",
    value: 10000,
  },
  {
    id: 5,
    name: "의류",
    value: 32000,
  },
];
const initialDailyData = [
  {
    id: 1,
    name: "악세서리",
    value: 4000,
  },
  {
    id: 2,
    name: "간식",
    value: 10000,
  },
  {
    id: 3,
    name: "생활용품",
    value: 2000,
  },
];

const AccountBookPage = () => {
  const [expense, setExpense] = useState(initialExpense);
  const [expenseChange, setExpenseChange] = useState(initialExpenseChange);
  const [monthlyData, setMonthlyData] = useState(initialMonthlyData);

  return (
    <Container>
      <Expense value={expense} />
      <Button>이번달 소비 보기</Button>
      <ExpenseInfomation value={expenseChange} />
      <MonthlyExpense data={monthlyData} />
      <DailyExpense date="8월 7일" data={initialDailyData} />
    </Container>
  );
};

export default AccountBookPage;