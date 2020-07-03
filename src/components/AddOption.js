import React from 'react';
//We use 'this' keyword for props to get them in class component
export default class AddOption extends React.Component {
    //new set up option from class properties plugin
    state = {
        error: undefined
    };
    // after instalation of babel plagin for class properties, we can remove constructor and run functions as arrow functions
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     //component state
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }
    handleAddOption = (e) => {
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
    };
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
};