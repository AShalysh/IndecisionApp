import React from 'react';

const Action = (props) => (
    <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions} //we flip it. If hasOptions is true -> show the button
        >
            What should I do?
        </button>
    </div>
);

export default Action;