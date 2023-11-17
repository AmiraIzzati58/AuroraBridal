const category1 = {
  item1: { name: "500pax (2 canopy)", price: 850, category: "Category 1" },
  item2: {
    name: "1000pax (3 canopy)",
    price: 1700,
    category: "Category 1",
  },
  item3: {
    name: "1500pax (4 canopy)",
    price: 2550,
    category: "Category 1",
  },
};

const category2 = {
  item4: { name: "Package A (500pax) ", price: 5000, category: "Category 2" },
  item5: { name: "Package B (500pax)", price: 4500, category: "Category 2" },
  item6: { name: "Package C (500pax)", price: 4000, category: "Category 2" },
};

const category3 = {
  item7: { name: "Traditional", price: 1900, category: "Category 3" },
  item8: { name: "Modern", price: 1600, category: "Category 3" },
};

const category4 = {
  item9: { name: "Make Up Artist", price: 350, category: "Category 4" },
};

const category5 = {
  item10: { name: "Indoor ", price: 500, category: "Category 5" },
  item11: { name: "Outdoor", price: 650, category: "Category 5" },
};

const items = {
  ...category1,
  ...category2,
  ...category3,
  ...category4,
  ...category5,
};

let totalPrice = 0;

const radioButtons1 = document.querySelectorAll('input[name="category1"]');
const radioButtons2 = document.querySelectorAll('input[name="category2"]');
const radioButtons3 = document.querySelectorAll('input[name="category3"]');
const radioButtons4 = document.querySelectorAll('input[name="category4"]');
const radioButtons5 = document.querySelectorAll('input[name="category5"]');

//item selection
const selectedItem1 = document.getElementById("premium-selected-item1");
const selectedItem2 = document.getElementById("premium-selected-item2");
const selectedItem3 = document.getElementById("premium-selected-item3");
const selectedItem4 = document.getElementById("premium-selected-item4");
const selectedItem5 = document.getElementById("premium-selected-item5");
//total price
const totalPriceElement = document.getElementById("premium-total-price");

totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;

let selectedCategory1Price = 0;
let selectedCategory2Price = 0;
let selectedCategory3Price = 0;
let selectedCategory4Price = 0;
let selectedCategory5Price = 0;

radioButtons1.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selectedItem1.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 1
    selectedCategory1Price = item.price;
    // Update the total price
    totalPrice =
      selectedCategory1Price +
      selectedCategory2Price +
      selectedCategory3Price +
      selectedCategory4Price +
      selectedCategory5Price;
    totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;
    // call the loanCalculator function with totalPrice as argument
    loanCalculator(totalPrice);
    document.getElementById("amount").value = totalPrice;
  });
});

radioButtons2.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selectedItem2.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 2
    selectedCategory2Price = item.price;
    // Update the total price
    totalPrice =
      selectedCategory1Price +
      selectedCategory2Price +
      selectedCategory3Price +
      selectedCategory4Price +
      selectedCategory5Price;
    totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;
    // call the loanCalculator function with totalPrice as argument
    loanCalculator(totalPrice);
    document.getElementById("amount").value = totalPrice;
  });
});

radioButtons3.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selectedItem3.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 3
    selectedCategory3Price = item.price;
    // Update the total price
    totalPrice =
      selectedCategory1Price +
      selectedCategory2Price +
      selectedCategory3Price +
      selectedCategory4Price +
      selectedCategory5Price;
    totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;
    // call the loanCalculator function with totalPrice as argument
    loanCalculator(totalPrice);
    document.getElementById("amount").value = totalPrice;
  });
});

radioButtons4.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selectedItem4.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 4
    selectedCategory4Price = item.price;
    // Update the total price
    totalPrice =
      selectedCategory1Price +
      selectedCategory2Price +
      selectedCategory3Price +
      selectedCategory4Price +
      selectedCategory5Price;
    totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;
    // call the loanCalculator function with totalPrice as argument
    loanCalculator(totalPrice);
    document.getElementById("amount").value = totalPrice;
  });
});

radioButtons5.forEach((button) => {
  button.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;
    // Get the item object
    const item = items[selectedValue];
    // Show the selected item, price, and category in the selected-item div
    selectedItem5.innerHTML = ` ${item.name} || RM ${item.price}`;
    // update the selected item's price of category 5
    selectedCategory5Price = item.price;
    // Update the total price
    totalPrice =
      selectedCategory1Price +
      selectedCategory2Price +
      selectedCategory3Price +
      selectedCategory4Price +
      selectedCategory5Price;
    totalPriceElement.innerHTML = `Total Price: RM ${totalPrice}`;
    // call the loanCalculator function with totalPrice as argument
    loanCalculator(totalPrice);
    document.getElementById("amount").value = totalPrice;
  });
});

//Reset Button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  totalPrice = 0;
  selectedCategory1Price = 0;
  selectedCategory2Price = 0;
  selectedCategory3Price = 0;
  selectedCategory4Price = 0;
  selectedCategory5Price = 0;
  selectedItem1.textContent = "";
  selectedItem2.textContent = "";
  selectedItem3.textContent = "";
  selectedItem4.textContent = "";
  selectedItem5.textContent = "";
  totalPriceElement.innerHTML = `Total Price: ${totalPrice}`;
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

let inputs = document.querySelectorAll(".loan-input");
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
 * loanCalculator: calculates the total monthly payments, as well as total paid and total interest based off the entered data.
 * @param {float} principal - total price of selected items
 **/

function loanCalculator(principal) {
  // loan calculator inputs
  let time = document.getElementById("time").value;
  let payment = document.getElementById("payment"); //display
  let total = document.getElementById("total"); //display

  // let interest = parseFloat(apr.value) / 100 / 12; // Calculate interest from percentage to decimal
  let monthlyPay = totalPrice / time;

  // Monthly payment figure
  // let x = Math.pow(1 + interest, payments);
  // let monthlyPay = (principal * x * interest) / (x - 1);

  console.log(time);
  console.log(monthlyPay);
  console.log(totalPrice); 

  // payment.innerHTML = monthlyPay.toFixed(2);
  // total.innerHTML = totalPrice.toFixed(2);
  
  if (isFinite(monthlyPay) && monthlyPay > 0) {
    // Fill the outputs with the values
    payment.innerHTML = monthlyPay.toFixed(2);
    total.innerHTML = totalPrice.toFixed(2);
  } else {
    console.log("Please make sure all inputs are filled and valid numbers");
  }
}


