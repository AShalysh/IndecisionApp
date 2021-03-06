import React from 'react';

const Option = (props) => (
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

export default Option;