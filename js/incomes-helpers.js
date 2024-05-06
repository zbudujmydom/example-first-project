import { getIncomes } from "./data.js";
import { incomesList, totalIncomes } from "./elements.js";

const getTotalIncomes = () => {
  const total = getIncomes().reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return total;
};

const showIncomesList = () => {
  incomesList.innerHTML = "";

  getIncomes().forEach((income) => {
    /*
      <li>
        <span> salary: 3000 EUR</span>
        <button>Edit</button>
        <button>Remove</button>
      </li>
    */
    const item = document.createElement("li");
    item.textContent = `${income.name}: ${income.amount} EUR`;
    incomesList.appendChild(item);
  });
};

const showTotalIncomes = () => {
  totalIncomes.textContent = getTotalIncomes();
};

export { showIncomesList, showTotalIncomes };
