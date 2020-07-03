// 1. arguments object - no longer bound with arrow functions

//ES5
const add = function(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(1,2,3));

//ES6 - arguments are not accessable anymore
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(1,2,3));

// 2. This keyword - no longer bound
//ES5
// const user = {
//     name: 'Snezhinka',
//     cities: ['Minsk', 'Ulan-Bator', 'Baku'],
//     printPlacesLived: function () {
//         //console.log(this.name);// prints well, can access the name
//         //console.log(this.cities);//prints well, can access the cities

//         const that = this; // it was done to access name and cities
//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city); // it is not going to be printed with this, we need to add that=this
//         });
//     }
// };
// user.printPlacesLived();

//ES6
const user = {
    name: 'Snezhinka',
    cities: ['Minsk', 'Ulan-Bator', 'Baku'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());
// user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());