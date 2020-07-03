//JSON INFO
// JSON - JavaScript Object Notation
//JSON - string representation of JS object or an array 
// const json = JSON.stringify({ age: 26 }) takes object and returns => string "{"age":26}"
// JSON.parse(json) => will return back object { age: 26 }
// JSON.parse(json).age => 26
// to get data from localStorage: localStorage.getItem('options')-you give a key and will be returned you stringified object
//localStorage.clear() -> to clear it

// To store numbers in local storage withut JSON because it does not take numbers
//parseInt(number, 10) - where number is a string num '12' and 10 - is a 10 based system and converts it to number 12
//isNaN('a' * 5) => true (is Not a Number)

// Webpack is asset bandeler. It combines all assets of our application with all assets needed from third party libraries.
// For example, date picker, drug and drop. Also we can take our code and break in multiple files, each component will leave in it's own file.
// it creates one file bundler.js in Public folder that contains everything, our application code and dependencies, it compreses them. So there will be one request.
// webpack breaks the app files in little islands, they can comunicated by using ES6 import/export syntax, so we can brake our app in many files

// When we had globaly installed babel-cli and live-server, we run these command:
// babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// To uninstall globall installed babel-cli and live-server, we need to run:
//yarn global remove babel-cli live-server
// if you used npm -> npm uninstall -g babel-cli live-server
//To check if live-server is still here, run: live-server public/
//To check if babel is still here, run: babel

//To install locally babel-cli and live-server, run: yarn add live-server babel-cli@6.24.1
//We will define scripts in package.json, how we will use the babel-cli and live-server

//"scripts": {
//    "serve": "live-server public/",
//    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
//  },
// to run the "serve" in scripts: yarn run serve
// to run the "build" in scripts: yarn run build-babel

//WEBPACK INSTALLATION
//yarn add webpack@3.1.0
// add to scripts -> "build": "webpack"
//create a new file in main root -> webpack.config.js (it is node script)

//Inside webpack.config.js, we need to specify where is ENTRY (starting) point,
//for us it is going to be app.js under src folder
//Also to specify where is OUTPUT -> our final bundle file, it is js file that contains everything we need to run our app
//bundle.js will be created when you run webpack

//to get full path to your app folder(for output info), run: node webpack.config.js

//To RUN WEBPACK, we use our name 'build' given in scripts: yarn run build

// ES6 IMPORT/EXPORT
//1. You can import/export by name.
// export -> export const square = (x) => x * x; from utils file
//import -> import { square, add } from './utils.js'; to main - app.js file
//2. You can import/export by default.

//IMPORTING NPM MODULES
//1st step is install:
//We need to install locally this moduler:
//1.npm validator: run -> yarn add validator@8.0.0
//2nd step is import
// specify the import from the documentation of modules
//Example: import validator from 'validator';
//if you see no root given in the path ' ' but module name then it is 3rd party library
//3rd step is to use-> console.log(validator.isEmail('test@gmail.com'));

//IMPORTING REACT and REACT-DOM
//installation: yarn add react@16.0.0 react-dom@16.0.0
//Importation: 
// import React from 'react';
// import ReactDOM from 'react-dom';
//Usage:
//const template = <p> testing 123</p>; if you have Babel
// const template = React.getElement('p', {}, 'testing 123'); if you dont have Babel
// ReactDOM.render(template, document.getElementById('app'));

//LOADER - webpack technic, when webpack sees js files or sccs files. When it sees js files, it runs it through Babel
//TO ADD BABEL to use it with Webpack, run: yarn add babel-core@6.25.0 babel-loader@7.1.1
// SET UP LOADER in webpack.config.js
// module: {
//     rules: [{
//         loader: 'babel-loader',
//         test: /\.js$/            //when it finds files with .js at the end, it runs babel-loader
//         exclude: /node_modules/  //does not take this folder
//     }]
// }

//Created json file .babelrc in the main root to pass all the arguments we put in command line
//when project runs, babel takes this two arguments:
// {
//     "presets": [
//         "env",
//         "react"
//     ]
// }

//SOURCE MAP Tool
//Add it to your webpack.config.js file-> devtool: 'cheap-module-eval-source-map' //it is for development
// To see in console what is the name of the component has a problem// as well as shows the component name if you pring via console.log

// WEBPACK DEV SERVER - fits webpack better that live-server and reflects changes faster.
//To install locally: yarn add webpack-dev-server@2.5.1
// we need to say to our dev server, where are our public files. We do it in webpack.config.js file:
// devServer: {
//     contentBase: path.join(__dirname, 'public') // we are giving absolute path
// }
// "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch" - I removed it from scripts, no need it
// Changed the scripts in package.json
// "scripts": {
//     "serve": "live-server public/",
//     "build": "webpack",
//     "dev-server": "webpack-dev-server"
//   },
// Now our command to run app: yarn run dev-server  //Now our app is on localhost 8080

//if to delete bundle.js file and run: yarn run dev-server //it will not build a new file, it will run app from memory
//if you run: yarn run build // bundle.js file will be created

//ES6 class properties
//BABEL feathures, added plugin for class properties
//yarn add babel-plugin-transform-class-properties@6.24.1
// Example without plugin and with plagin how class-constructor looks like
// class OldSyntax {
//     constructor() {
//         name: "Mike";
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return 'hi, ${this.name}.';
//     }
// }
// 
// const OldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting; // this will break this.bindings, so we need to bind it in constructor
// console.log(OldSyntax.getGreeting());
// ------ New Syntax --------
// class NewSyntax {
//     name: "Tom";
//     getGreeting = () => {
//          return 'hi, ${this.name}.';
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

//Passing Children to Component (build-in children prop)
// const Layout = (props) = {
//     return (
//         <div>
//             <p>Header</p>
//               {props.children} // <p>This is inline</p> is props.children - passing JSX
//             <p>Footer</p>
//         </div>
//     );
// };
// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );
//ReactDOM.render(<Layout content={template}/>, document.getElementById('app')); // usual approch
// ReactDOM.render((
//     <Layout>
//         <p>This is inline</p>
//     </Layout>
// ), document.getElementById('app'));
//------- Setting Up React-Model ----------
//command line: yarn add react-modal@2.2.2
// extra file for Modal + new state prop: selectedOption:undefined
// refactoring code: for all stateless functional components we removed return word and {} before return key word
//
// ------- Configuring Webpack to process Scss to Css --------
//we need npm package css-loader and style-loader
//to install: yarn add style-loader@0.18.2 css-loader@0.28.4
//to add to rules in webpack.config.js
// module: {
//     rules: [{
//         loader: 'babel-loader',
//         test: /\.js$/,
//         exclude: /node_modules/
//     }, {
//         test: /\.scss$/,
//         use: [
//             'style-loader',
//             'css-loader'
//         ]
//     }]
// },
//import './styles/styles.css'; to main app.js
//for scss go to sass-lang.com, we will use scss syntax (it is the same as sass just syntax slightly different)
// to download locally loader for scss files:
//yarn add node-sass@4.14.1
//yarn add sass-loader@6.0.6
//yarn run dev-server
//or npm i node-sass@latest sass-loader@latest
