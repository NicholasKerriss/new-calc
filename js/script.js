let expenseInfo = {
  Alimentação: [],
  Transporte: [],
  Moradia: [],
  Educação: [],
  Outros: [],
};
const addButton = document.getElementById("button-value");
const totalButton = document.getElementById("button-total");
const mediaButton = document.getElementById("button-media");
const delButton = document.getElementById("button-delet");

addButton.addEventListener("click", addFunction);
totalButton.addEventListener("click", totalFunction);
mediaButton.addEventListener("click", mediaFunction);
delButton.addEventListener("click", delFunction);

function addFunction() {
  const categorySelect = document.getElementById("select");
  const selectedCategory = categorySelect.value;
  const getValue = parseInt(document.getElementById("text-value").value);
  if (!isNaN(getValue)) {
    expenseInfo[selectedCategory].push(getValue);
    document.getElementById("acumulate-values").textContent =
      "valores acumulados:" + expenseInfo[selectedCategory].toString();
  }
  document.getElementById("text-value").value = "";
  document.getElementById("house").textContent =
    "Moradia(R$): " + expenseInfo.Moradia.toString();
  document.getElementById("transp").textContent =
    "Transporte(R$): " + expenseInfo.Transporte.toString();
  document.getElementById("food").textContent =
    "Alimentação(R$): " + expenseInfo.Alimentação.toString();
  document.getElementById("education").textContent =
    "Educação(R$): " + expenseInfo.Educação.toString();
  document.getElementById("others").textContent =
    "Outros(R$): " + expenseInfo.Outros.toString();
}

function totalFunction() {
  const selectedCategory = document.getElementById("select").value;
  const total = expenseInfo[selectedCategory].reduce(
    (total, value) => total + value,
    0
  );
  document.getElementById("total").textContent = "Total: " + total.toString();
}

function mediaFunction() {
  const selectedCategory = document.getElementById("select").value;
  const expenses = expenseInfo[selectedCategory];
  const initialCalc = expenses.reduce((total, value) => total + value, 0);
  const finalCalc = initialCalc / expenses.length;
  document.getElementById("media").textContent =
    "Média: " + finalCalc.toString();
}

function delFunction() {
  document.getElementById("media").textContent = "";
  document.getElementById("total").textContent = "";
  document.getElementById("acumulate-values").textContent = "";
  document.getElementById("house").textContent = "Moradia(R$):";
  document.getElementById("transp").textContent = "Transporte(R$):";
  document.getElementById("food").textContent = "Alimentação(R$):";
  document.getElementById("education").textContent = "Educação(R$):";
  document.getElementById("others").textContent = "Outros(R$):";
}
