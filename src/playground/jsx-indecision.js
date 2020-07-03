console.log('App.js is running!');

const appObject = {
    title: 'Indecision App Object',
    subtitle: 'This is some info Object',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //prevents full page refresh
    const option = e.target.elements.option.value; //to get input
    //if there was an input, push it to array and clear input field
    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const onRemoveAll = () => {
    appObject.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// const numbers = [55, 60, 70];

// possible to render JSX inside JSX {[<p key="1">a</p>, <p key="2">b</p>]}
const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <p>{appObject.options.length}</p>
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                /*numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })*/
            }
            <ol>
                {
                    appObject.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();


// -------- // ----------

// const user = {
//     name: 'Snezhinka',
//     age: 18,
//     location: 'Montreal'
// };

// function getLocation(location){
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// };

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

