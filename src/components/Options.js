import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;

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