const incomes = [];

const getIncomes = () => {
  // in real application we could use some deep copy of this array because
  // we want to reveal raw source data, we want to modify this array only
  // by means of our dedicated functions like addIncome, removeIncome etc.
  // but in this project you don't have to use real deep copy, we can use only
  // this simple function.

  // The simplest way to do deep copy for that object is for instance:
  // return JSON.parse(JSON.stringify(incomes))
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
