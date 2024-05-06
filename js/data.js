const incomes = [];

const getIncomes = () => {
  return incomes;
};

const addIncome = (name, amount) => {
  incomes.push({
    name,
    amount: Number(amount),
    id: Math.random(),
  });
};

export { getIncomes, addIncome };
