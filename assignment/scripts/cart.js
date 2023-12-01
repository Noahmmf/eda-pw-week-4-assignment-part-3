console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  if (isFull()) {
    return false;
  }
  basket.push(item);
  return true;
}
console.log(addItem("apple"));
console.log(basket);

function listItems() {
  if (basket.length > 0) {
    for (i = 0; i < basket.length; i++) console.log(basket[i]);
  } else {
    console.log("The basket is empty.");
  }
}
listItems();

function empty() {
  while (basket.length > 0) {
    basket.pop();
  }
}

console.log("this is what I have in my basket:", basket);
empty();
console.log("I emptied my basket:", basket);

const maxItems = 5;

function isFull() {
  if (basket.length === 5) {
    return true;
  } else {
    if (basket.length < 5) return false;
  }
}
console.log("Basket is full:", isFull());

function removeItem(item) {
  const index = basket.indexOf(item);

  if (index !== -1) {
    const removedItem = basket.splice(index, 1)[0];
    console.log(`Removed ${removedItem} from the basket`);
    return removedItem;
  } else {
    console.log(`Item ${item} not found in the basket`);
    return null;
  }
}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
