import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //         // when we had default props// options: props.options
    //     };
    // }
    handleClearSelectedOption = () => {
        this.setState(()=>({ selectedOption: undefined }))
    };
    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        //the same as above just shoter
        this.setState(()=> ({ options: [] })); //if you want to return object -> ({})
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option })); //if we have at least one string in array -> true
    };
    handleAddOption = (option) => {
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
    };
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
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            //we are saving data to LocalStorage any time it changes
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); //'options' is a key
        }
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
    };
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
//Setting up default props for class component
// IndecisionApp.defaultProps = {
//     options: []
// };