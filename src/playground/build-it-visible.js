class VisibilityToggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleTogglerVisibility = this.handleTogglerVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleTogglerVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={this.handleTogglerVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Hey! Now you can see some details here!</p>
                        </div>
                    )
                }
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggler />, document.getElementById('app'));


// let visibility = false;

// const onVisToggle = () => {
//     visibility = !visibility;
//     renderVisibleApp();
// };

// const appRoot = document.getElementById('app');

// const renderVisibleApp = () => {
//     const template = (
//                 <div>
//                     <h1>Visibility Toggle</h1>
//                     <button onClick={onVisToggle}>{visibility ? 'Hide details' : 'Show details'}</button>
//                     {visibility && (
//                         <div>
//                             <p>Hey, this is all details!</p>
//                         </div>
//                     )}
//                 </div>
//             );
//     ReactDOM.render(template, appRoot);
// };
// renderVisibleApp();
