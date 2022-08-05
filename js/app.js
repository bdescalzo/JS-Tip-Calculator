// Grab elements drom DOM
const priceBillEl = document.getElementById("formPrice");
const tipPercentageEl = document.getElementById("formPercentage");
const peoplePayingEl = document.getElementById("formPeople");
const formButtonEl = document.getElementById("formButton");
const totalTipEl = document.getElementById("totalTip");
const tipPerPersonEl = document.getElementById("tipPerPerson");

// These variables will hold the result of our operations
let totalTip;
let tipPerPerson;

// Calculate button
formButtonEl.addEventListener("click", () => {
  totalTip = priceBillEl.value * (tipPercentageEl.value / 100);

  tipPerPerson = totalTip / peoplePayingEl.value;

  totalTipEl.textContent = totalTip;
  tipPerPersonEl.textContent = tipPerPerson;
});
