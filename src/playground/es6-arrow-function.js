//ES5 function example
const square = function(x) {
    return x * x;
};

//ES6 function example
// const squareTwo = (x) => {
//     return x * x;
// };
//another axpression syntax in ES6
const squareTwo = (x) => x * x; // the same as above
console.log(squareTwo(9));

//ES6 Arrow Function
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Mike Fish'));

//expression syntax
const getFName = (fName) => fName.split(' ')[0];
console.log(getFName('Ana Sha'));

