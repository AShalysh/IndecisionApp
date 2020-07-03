import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//const template = <p> testing 123</p>;
// const template = <p>JSX</p>
// ReactDOM.render(template, document.getElementById('app'));



// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

// import './utils.js'; ----to import file
//import subtrack, { square, add } from './utils.js';
//we can rename subtrack function as we want in this file because it is a default one
//import isSenior, { isAdult, canDrink, } from './person.js';

// console.log('app.js is running!!!');
// console.log(square(2));
// console.log(add(1, 2));
// console.log(subtrack(10, 2));
// console.log(isAdult(19));
// console.log(canDrink(19));
// console.log(isSenior(66));
