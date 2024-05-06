import { addIncome } from "./js/data.js";
import { incomesForm } from "./js/elements.js";
import { showIncomesList, showTotalIncomes } from "./js/incomes-helpers.js";

incomesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.incomeName.value;
  const amount = event.target.incomeAmount.value;
  addIncome(name, amount);

  event.target.reset();

  showIncomesList();
  showTotalIncomes();
});
