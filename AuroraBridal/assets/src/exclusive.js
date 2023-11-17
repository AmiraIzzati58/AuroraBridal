const category6 = {
  item1a: { name: "500pax (2 canopy)", price: 850, category: "Category 1" },
  item2a: {
    name: "1000pax (3 canopy)",
    price: 1700,
    category: "Category 1",
  },
  item3a: {
    name: "1500pax (4 canopy)",
    price: 2550,
    category: "Category 1",
  },
};

const category7 = {
  item4a: { name: "Package A (500pax) ", price: 5000, category: "Category 2" },
  item5a: { name: "Package B (500pax)", price: 4500, category: "Category 2" },
  item6a: { name: "Package C (500pax)", price: 4000, category: "Category 2" },
};

const category8 = {
  item7a: { name: "Traditional", price: 1900, category: "Category 3" },
  item8a: { name: "Modern", price: 1600, category: "Category 3" },
};

const category9 = {
  item9a: { name: "Make Up Artist", price: 350, category: "Category 4" },
};

const category10 = {
  item1a0: { name: "Indoor ", price: 500, category: "Category 5" },
  item1a1: { name: "Outdoor", price: 650, category: "Category 5" },
};

const items = {
  ...category6,
  ...category7,
  ...category8,
  ...category9,
  ...category10,
};

let totalPriceA = 0;

const radioButtons1 = document.querySelectorAll('input[name="category6"]');
const radioButtons2 = document.querySelectorAll('input[name="category7"]');
const radioButtons3 = document.querySelectorAll('input[name="category8"]');
const radioButtons4 = document.querySelectorAll('input[name="category9"]');
const radioButtons5 = document.querySelectorAll('input[name="category10"]');

//item selection
const selecteditem1a = document.getElementById("premium-selected-item1a");
const selecteditem2a = document.getElementById("premium-selected-item2a");
const selecteditem3a = document.getElementById("premium-selected-item3a");
const selecteditem4a = document.getElementById("premium-selected-item4a");
const selecteditem5a = document.getElementById("premium-selected-item5a");
//total price
const totalPriceAElement = document.getElementById("premium-total-priceA");

totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;

let selectedcategory6Price = 0;
let selectedcategory7Price = 0;
let selectedcategory8Price = 0;
let selectedcategory9Price = 0;
let selectedcategory10Price = 0;

radioButtons1.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selecteditem1a.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 1
    selectedcategory6Price = item.price;
    // Update the total price
    totalPriceA =
      selectedcategory6Price +
      selectedcategory7Price +
      selectedcategory8Price +
      selectedcategory9Price +
      selectedcategory10Price;
    totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;
    // call the loanCalculatorA function with totalPriceA as argument
    loanCalculatorA(totalPriceA);
    document.getElementById("amountA").value = totalPriceA;
  });
});

radioButtons2.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selecteditem2a.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 2
    selectedcategory7Price = item.price;
    // Update the total price
    totalPriceA =
      selectedcategory6Price +
      selectedcategory7Price +
      selectedcategory8Price +
      selectedcategory9Price +
      selectedcategory10Price;
    totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;
    // call the loanCalculatorA function with totalPriceA as argument
    loanCalculatorA(totalPriceA);
    document.getElementById("amountA").value = totalPriceA;
  });
});

radioButtons3.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selecteditem3a.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 3
    selectedcategory8Price = item.price;
    // Update the total price
    totalPriceA =
      selectedcategory6Price +
      selectedcategory7Price +
      selectedcategory8Price +
      selectedcategory9Price +
      selectedcategory10Price;
    totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;
    // call the loanCalculatorA function with totalPriceA as argument
    loanCalculatorA(totalPriceA);
    document.getElementById("amountA").value = totalPriceA;
  });
});

radioButtons4.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selecteditem4a.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 4
    selectedcategory9Price = item.price;
    // Update the total price
    totalPriceA =
      selectedcategory6Price +
      selectedcategory7Price +
      selectedcategory8Price +
      selectedcategory9Price +
      selectedcategory10Price;
    totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;
    // call the loanCalculatorA function with totalPriceA as argument
    loanCalculatorA(totalPriceA);
    document.getElementById("amountA").value = totalPriceA;
  });
});

radioButtons5.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selecteditem5a.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 5
    selectedcategory10Price = item.price;
    // Update the total price
    totalPriceA =
      selectedcategory6Price +
      selectedcategory7Price +
      selectedcategory8Price +
      selectedcategory9Price +
      selectedcategory10Price;
    totalPriceAElement.innerHTML = `Total Price: RM ${totalPriceA}`;
    // call the loanCalculatorA function with totalPriceA as argument
    loanCalculatorA(totalPriceA);
    document.getElementById("amountA").value = totalPriceA;
  });
});

//Reset Button
const resetButton = document.getElementById("reset-buttonA");
resetButton.addEventListener("click", function () {
  totalPriceA = 0;
  selectedcategory6Price = 0;
  selectedcategory7Price = 0;
  selectedcategory8Price = 0;
  selectedcategory9Price = 0;
  selectedcategory10Price = 0;
  selecteditem1a.textContent = "";
  selecteditem2a.textContent = "";
  selecteditem3a.textContent = "";
  selecteditem4a.textContent = "";
  selecteditem5a.textContent = "";
  totalPriceAElement.innerHTML = `Total Price: ${totalPriceA}`;
});

/**
 * Toggles classes on the element
 * @param {} elm The element for which to toggle class
 * @param {string|string[]} classes The class(es) to be toggled
 **/
function toggleClass(elm, classes) {
  const currClass = new Set(elm.classList);
  const newClasses = typeof classes === "string" ? classes.split(" ") : classes;

  for (const className of newClasses) {
    if (currClass.has(className)) {
      elm.classList.remove(className);
    } else {
      elm.classList.add(className);
    }
  }
}

//loan calculator

let inputs = document.querySelectorAll(".loan-inputA");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", focusInputs, false);
  inputs[i].addEventListener("blur", focusBlurs, false);
  inputs[i].addEventListener("keyup", formatInputs, false);
}
function focusInputs() {
  let plist,
    parent = this.parentElement;
  plist = parent.classList;
  if (!plist.contains("valid") && !plist.contains("invalid")) {
    toggleClass(parent, "focused");
  }
}
function focusBlurs() {
  let plist,
    parent = this.parentElement;
  plist = parent.classList;
  if (!plist.contains("valid") && !plist.contains("invalid")) {
    toggleClass(parent, "focused");
  }
  if (this.value == "" || parseInt(this.value) < 0) {
    plist.add("invalid");
    plist.add("focused");
  }
}
function formatInputs() {
  let child,
    parent = this.parentElement;
  child = this;
  let plist = parent.classList;
  if (child.value != "" && plist.contains("focused") && child.value > 0) {
    plist.add("valid");
    plist.remove("invalid");
  } else if (child.value == "") {
    plist.remove("valid");
    plist.add("invalid");
  }
}

/**
 * loanCalculatorA: calculates the total monthly payments, as well as total paid and total interest based off the entered data.
 * @param {float} principal - total price of selected items
 **/

function loanCalculatorA(principal) {
  // loan calculator inputs
  let timeA = document.getElementById("timeA").value;
  let payment = document.getElementById("payment"); //display
  let total = document.getElementById("total"); //display

  // let interest = parseFloat(apr.value) / 100 / 12; // Calculate interest from percentage to decimal
  let monthlyPayA = totalPriceA / timeA;

  // Monthly payment figure
  // let x = Math.pow(1 + interest, payments);
  // let monthlyPayA = (principal * x * interest) / (x - 1);

  console.log(timeA);
  console.log(monthlyPayA);
  console.log(totalPriceA); 

  // payment.innerHTML = monthlyPayA.toFixed(2);
  // total.innerHTML = totalPriceA.toFixed(2);
  
  if (isFinite(monthlyPayA) && monthlyPayA > 0) {
    // Fill the outputs with the values
    payment.innerHTML = monthlyPayA.toFixed(2);
    total.innerHTML = totalPriceA.toFixed(2);
  } else {
    console.log("Please make sure all inputs are filled and valid numbers");
  }
}
