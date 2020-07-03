class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
            // when we had default props// options: props.options
        };
    }
    //lifecycle methods are avalable only for class components
    componentDidMount() {
        //fetching Data if even the page was refreshed
        // try - catch to check valid JSON data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse('options'); // from string format back to object format
            //check if there is data (not null for example)
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //do nothing, we have default value
        }  
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            //we are saving data to LocalStorage any time it changes
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); //'options' is a key
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        //the same as above just shoter
        this.setState(()=> ({ options: [] })); //if you want to return object -> ({})
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {// Action component needs just boolean if the length of array is more than 0 or not
        // const title = 'Indecision';
        //if we don't pass 'title' argument in Header, default one will be used
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                /> 
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
//Setting up default props for class component
// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
//Setting up default props for Header
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions} //we flip it. If hasOptions is true -> show the button
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <p>Options list:</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                // this.props.options.map((option)=> <p key={option}>{option}</p>)
                props.options.map((option)=> (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                     />
                ))
            }
        </div>
    );
};

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     alert('Remove All');
//     //     console.log(this.props.options); // if there is no binding in constructor, we cannot access the array of options
//     // }
//     render(){
//         return (
//             <div>
//                 <p>Options list:</p>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.length}
//                 {
//                     // this.props.options.map((option)=> <p key={option}>{option}</p>)
//                     this.props.options.map((option)=> <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            Option component here: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

//We use 'this' keyword for props to get them in class component
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        //component state
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //trim removes empty spaces
        const error = this.props.handleAddOption(option);
// see below: it is the same as {error: error} 
        // this.setState(()=> {
        //     return { error };
        // });
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//We used not empty options
// ReactDOM.render(<IndecisionApp options={['One', 'Two']}/>, document.getElementById('app'));

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

// ReactDOM.render(jsx, document.getElementById('app'));