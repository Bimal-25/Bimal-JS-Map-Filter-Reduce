console.log("Map Method ");
console.log("Filter Method");
console.log("Reduce Method");

// Map Method - First Example - Start
const obj = [
  { name: "Ramesh", age: 23, city: "Ahmedabad" },
  { name: "Suresh", age: 28, city: "Ahmedabad" },
  { name: "Rishi", age: 35, city: "Bhuj" },
];

const newarray = obj.map(callback, {
  pincode: 380015,
  state: "Guajarat",
}); //thisarg
function callback(data, index) {
  const result = [data.name, data.age, data.city, this.pincode, this.state];
  return result;
}
console.log(newarray);

//=======================================================================================//

// Map Method - Second Example - Start
const array = ["HTML", "CSS", "JavaScipt"];
// callback & thisarg
const finalResult = array.map(callback1, { type: "Front-End" });
function callback1(value, index, array) {
  return index + " : " + value + " - " + this.type;
}
console.log(finalResult);

//=======================================================================================//

// Map Method - Third Example - Start
const shirts = [
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
];

const mapResult = shirts.map((value) => {
  return [value.size, value.sleeve, value.colour, value.brand, value.price];
});
console.log(mapResult);

//=======================================================================================//

// Filter Method - First Example - Start
const filterResult = shirts.filter((value) => {
  return value.brand == "Arrow" && value.price >= 15;
});
console.log(filterResult);

//=======================================================================================//

// Filter & findIndex Method - Second Example - Start
const personResult = obj.filter((value) => {
  return value.city == "Bhuj";
});
console.log(personResult);

//=======================================================================================//

// Map Method -Arrow function
let arr = [];
arr.map((element) => {
  /* execute this */
});
arr.map((element, index) => {
  /* execute this */
});
arr.map((element, index, arr) => {
  /* execute this */
});
// arr.map((element, index, arr) => {
//   /* execute this */
// }, thisVal);

// Map Method - Inline callback function
arr.map(function (element) {
  /* execute this */
});
arr.map(function (element, index) {
  /* execute this */
});
arr.map(function (element, index, arr) {
  /* execute this */
});
// arr.map(function (element, index, arr) {
//   /* execute this */
// }, thisVal);

// Callback Function
// arr.map(callBackFunction);
// arr.map(callBackFunction, thisVal);

//=======================================================================================//

// Map Method - Parameters
// callBackFunction() - A function to be called on each array element. (Required)
// element - The value of the current element. (Required)
// index - The index of the current element. (Optional)
// arr - The array of the current element. (Optional)
// thisVal - A value passed to the function to be used as ‘this’. If the parameter is not provided, undefined will be used as the ‘this’ value.

//=======================================================================================//
