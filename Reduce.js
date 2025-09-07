console.log(" Reducer Method Examples");
console.log("===========================");
// Reducer Method - First Example - Start
const nums = [10, 15, 24, 48, 67];
const sumofNums = nums.reduce((prev, curr) => {
  return prev + curr;
}, 5);
console.log(" Sum of All Numbers : " + sumofNums);

//==================================================================================//

// Reducer Method - Second Example - Start
const shirtCart = [
  {
    size: "S",
    sleeve: "Half Sleeve",
    colour: "Red",
    brand: "Van hussain",
    price: 10,
  },
  {
    size: "M",
    sleeve: "Full Sleeve",
    colour: "Blue",
    brand: "Arrow",
    price: 14,
  },
  {
    size: "XL",
    sleeve: "Full Sleeve",
    colour: "White",
    brand: "Arrow",
    price: 16,
  },
  {
    size: "XXL",
    sleeve: "Full Sleeve",
    colour: "Blue",
    brand: "Arrow",
    price: 18,
  },
];

const cartTotal = shirtCart.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);
console.log(" Total Price of Cart Items : " + cartTotal);

//================================================================================//

// Reducer Method - Third  Example : Grouping Objects by a property - Start
const projects = [
  { id: 1, type: "housing", name: "Urban Residence" },
  { id: 2, type: "mall", name: "Grand Shopping Plaza" },
  { id: 3, type: "housing", name: "Suburban Villas" },
  { id: 4, type: "airport", name: "International Terminal" },
  { id: 5, type: "mall", name: "City Center Mall" },
];

const groupedProjects = projects.reduce((acc, project) => {
  const key = project.type;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(project);
  return acc;
}, {});

console.log(groupedProjects);

//=======================================================================================//

// Reducer Method - Fourth  Example : Object.groupBy - Grouping Objects by a property - Start
const result = Object.groupBy(projects, ({ type }) => type);
console.log(result);

//=======================================================================================//

// Reducer Method - Fourth  Example : Object.groupBy - Grouping Objects by a property - Start
const result1 = Object.groupBy(shirtCart, ({ brand }) => brand);
console.log(result1);

//=======================================================================================//

// JavaScript (ES6) - Map

// In 2015, JavaScript (ES6) introduced a new data structure called the Map. Not to be confused with the .map() array method we’ve just discussed,this is a built-in data structure that can be used to store data as a collection of distinct and ordered key-value pairs.

// Map Methods

// map.set() - Adds a key-value pair to the Map
// map.has() - Returns a boolean value after checking whether the specified key is currently in the Map
// map.get() - Returns the corresponding value for a given key
// map.delete() - Deletes the given key-value pair from the Map
// map.clear() - Removes all key-value pairs from the Map

// let shoppingList = [
//   { item_name: "Apple", quantity: 5 },
//   { item_name: "Banana", quantity: 2 },
//   { item_name: "Milk", quantity: 4 },
//   { item_name: "Pears", quantity: 3 },
// ];

let shoppingList = new Map();

shoppingList.set("apple", 2);
shoppingList.set("banana", 5);
shoppingList.set("milk", 4);
shoppingList.set("pears", 3);

// iterating the Map
shoppingList.forEach((val, key) => {
  console.log(`Item: ${key}, Quantity: ${val}`);
});
// logging the Map size
console.log(`Number of Items: ${shoppingList.size}`);
