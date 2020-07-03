console.log('utils is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export default subtract;

//alternative way is to have a key work export before the function name
// export { square, add, subtract as default }; // square and add are exporting by name and substruct has default export
// export default (a, b) => a - b; 